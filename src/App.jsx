import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import './App.css';
import './constants/colors.css'

const firebaseConfig = {
  apiKey: 'AIzaSyDXJnCSLQD2o5lqmaPW1AF5F59kPDJcvWk',
  authDomain: 'cremeria-react-js.firebaseapp.com',
  projectId: 'cremeria-react-js',
  storageBucket: 'cremeria-react-js.appspot.com',
  messagingSenderId: '546941054738',
  appId: '1:546941054738:web:949b4242e8a7c249f30dcb',
};

initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <div className="container-app">
        <div className="container-app__title">Cremería</div>
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

export default App;
