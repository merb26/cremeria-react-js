import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="container-app">
        <div className="container-app__title">Cremería</div>
        <Link to="/registrar-pzs-faltantes">
          <button>Registrar piezas faltantes</button>
        </Link>
      </div>
    </>
  );
}

export default App;
