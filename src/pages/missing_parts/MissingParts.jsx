import { Link } from "react-router-dom";
import './styles.css'

export const MissingParts = () => {

    return (
        <>
          <div className="container-missing">
            <div className="container-missing__title">Piezas faltantes</div>
            <Link to="/lista-registro-pzs-faltantes">
              <button>Lista de piezas faltantes</button>
            </Link>
            <Link to="/registrar-pzs-faltantes">
              <button>Registrar piezas faltantes</button>
            </Link>
          </div>
        </>
      );
}