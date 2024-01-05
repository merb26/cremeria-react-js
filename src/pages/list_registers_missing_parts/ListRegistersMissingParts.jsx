import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './styles.css'

export const ListRegistersMissingParts = () => {
  const [listRegisters, setListRegisters] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const registerCollection = collection(db, 'registers');
    getDocs(registerCollection).then((snapshot) => {
      setListRegisters(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);

  console.log(listRegisters);

  return (
    <div className="container-list-register">
      <h1 className="conatiner-list-register__title">
        Lista de registros de piezas faltantes
      </h1>
      <div className='conatiner-list-register__box-list'>
        {listRegisters.map((register) => {
          return (
            <div key={register.id} className='conatiner-list-register__box-list__item'>
              <p>Nombre: {register.name}</p>
              <p>Cantidad de piezas: {register.amountPieces}</p>
              <p>Costo total: ${register.totalCost}</p>
              <p>Costo unitario: ${register.unitCost}</p>
              <p>Precio público: ${register.publicPrice}</p>
              <p>Ganancia: ${register.revenue}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
