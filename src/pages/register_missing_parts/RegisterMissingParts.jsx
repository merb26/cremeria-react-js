import { useState } from 'react';
import './styles.css';

export const RegisterMissingParts = () => {
  const [name, setName] = useState('');
  const [amountPieces, setAmountPieces] = useState('')
  const [totalCost, setTotalCost] = useState('')
  const [unitCost, setUnitCost] = useState('')
  const [publicPrice, setPublicPrice] = useState('')
  const [revenue, setRevenue] = useState('')

  const handleRegister = (event) => {
    event.preventDefault();
    console.log({ name });
    console.log({ amountPieces });
    console.log({ totalCost });
    console.log({ unitCost });
    console.log({ publicPrice });
    console.log({ revenue });
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
          <input type="text" id="amountPieces" name="amountPieces" value={amountPieces} onChange={(e) => setAmountPieces(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="totalCost" className="input-field">
            Costo total:{' '}
          </label>
          <input type="text" id="totalCost" name="totalCost" value={totalCost} onChange={(e) => setTotalCost(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="unitCost" className="input-field">
            Costo unitario:{' '}
          </label>
          <input type="text" id="unitCost" name="unitCost" value={unitCost} onChange={(e) => setUnitCost(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="publicPrice" className="input-field">
            Precio al público:{' '}
          </label>
          <input type="text" id="publicPrice" name="publicPrice" value={publicPrice} onChange={(e) => setPublicPrice(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="revenue" className="input-field">
            Ganancia:{' '}
          </label>
          <input type="text" id="revenue" name="revenue" value={revenue} onChange={(e) => setRevenue(e.target.value)} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};
