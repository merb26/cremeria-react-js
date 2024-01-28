import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './styles.css';

export const RegisterMissingParts = () => {
  const [name, setName] = useState('');
  const [amountPieces, setAmountPieces] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [unitCost, setUnitCost] = useState('');
  const [publicPrice, setPublicPrice] = useState('');
  const [revenue, setRevenue] = useState('');
  const [id, setId] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();

    const register = {
      name,
      amountPieces,
      totalCost,
      unitCost,
      publicPrice,
      revenue,
    };

    const db = getFirestore();
    const registerCollection = collection(db, 'registers');
    const query = addDoc(registerCollection, register);

    query
      .then(({ id }) => {
        setId(id);
        toast.success('Se ha registrado con éxito', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-register-missing">
      <div className="container-register-missing__title">
        Registrando piezas faltantes
      </div>
      <form
        onSubmit={handleRegister}
        className="container-register-missing__box"
      >
        <div>
          <label htmlFor="name" className="input-field">
            Nombre:{' '}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amountPieces" className="input-field">
            Cantidad de piezas:{' '}
          </label>
          <input
            type="text"
            id="amountPieces"
            name="amountPieces"
            value={amountPieces}
            onChange={(e) => setAmountPieces(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <ToastContainer />
    </div>
  );
};
