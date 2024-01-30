import { Link } from 'react-router-dom';
import './styles.css';

export const Merchandise = () => {
  return (
    <div className="container-merchandise">
      <div className="container-merchandise__title">Mercancías</div>
      <Link to="/mercancias/registrar">
          <button>Registrar mercancía</button>
        </Link>
    </div>
  );
};
