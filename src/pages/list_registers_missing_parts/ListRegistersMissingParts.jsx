import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './styles.css'
import '../../constants/colors.css'

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
      <div className="conatiner-list-register__title">
        Lista de registros de piezas faltantes
      </div>
      <div className='conatiner-list-register__box-list'>
        {listRegisters.map((register) => {
          return (
            <div key={register.id} className='conatiner-list-register__box-list__item'>
              <p><span className='conatiner-list-register__box-list__item__span'>Nombre:</span> {register.name}</p>
              <p><span className='conatiner-list-register__box-list__item__span'>Cantidad de piezas:</span> {register.amountPieces}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
