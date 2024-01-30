import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

export const RegisterMerchandise = () => {
  const [name, setName] = useState('');
  const [pieceCost, setPieceCost] = useState('');
  const [publicPrice, setPublicPrice] = useState('')

  const handleRegister = (event) => {
    event.preventDefault();

    // const register = {
    //   name,
    //   amountPieces,
    //   date: currentDate()
    // };

    // const db = getFirestore();
    // const registerCollection = collection(db, 'registers');
    // const query = addDoc(registerCollection, register);

    // query
    //   .then(() => {
    //     toast.success('Se ha registrado con éxito', {
    //       position: "top-center",
    //       autoClose: 2000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //       });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="container-register-missing">
      <div className="container-register-missing__title">
        Registrando mercancía
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
          <label htmlFor="pieceCost" className="input-field">
            Costo por pieza:{' '}
          </label>
          <input
            type="text"
            id="pieceCost"
            name="pieceCost"
            value={pieceCost}
            onChange={(e) => setPieceCost(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="publicPrice" className="input-field">
            Precio público:{' '}
          </label>
          <input
            type="text"
            id="publicPrice"
            name="publicPrice"
            value={publicPrice}
            onChange={(e) => setPublicPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      <ToastContainer />
    </div>
  );
};
