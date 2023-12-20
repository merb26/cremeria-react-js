import './styles.css';

export const RegisterMissingParts = () => {

  const handleRegister = () => {
    alert('registrando.......');
  };

  return (
    <div className="container-register-missing">
      <div className="container-register-missing__title">
        Registrando piezas faltantes
      </div>
      <form onSubmit={handleRegister} className="container-register-missing__box">
        <div>
          <label htmlFor="name" className="input-field">
            Nombre:{' '}
          </label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="amountPieces" className="input-field">
            Cantidad de piezas:{' '}
          </label>
          <input type="text" id="amountPieces" name="amountPieces" required />
        </div>
        <div>
          <label htmlFor="totalCost" className="input-field">
            Costo total:{' '}
          </label>
          <input type="text" id="totalCost" name="totalCost" required />
        </div>
        <div>
          <label htmlFor="unitCost" className="input-field">
            Costo unitario:{' '}
          </label>
          <input type="text" id="unitCost" name="unitCost" required />
        </div>
        <div>
          <label htmlFor="publicPrice" className="input-field">
            Precio al público:{' '}
          </label>
          <input type="text" id="publicPrice" name="publicPrice" required />
        </div>
        <div>
          <label htmlFor="revenue" className="input-field">
            Ganancia:{' '}
          </label>
          <input type="text" id="revenue" name="revenue" required />
        </div>
        <button type='submit'>Registrar</button>
      </form>
    </div>
  );
};
