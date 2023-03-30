import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Account from './pages/account';
import Index from './pages';
import Content from './pages/content/content';
import Login from './pages/forms/login';
import SignUp from './pages/forms/signUp';
import Conditions from './pages/conditions';
import { TareasProvider } from './context/tareasContext';

function App() {
  return (
    <div className="App">
      <header>
        <img src="https://i.postimg.cc/sD8GfRfB/TRIANGULO-NEGRO-VOLUNTEERS-t-1.png" alt="logo" className="logo" />
        <nav>
          <ul>
            <Link to={"/"}>
              <li className='primary-bottom'>
                INICIO
              </li>
            </Link>
            <Link to={"/content"}>
              <li className='primary-bottom'>
                CONTENIDO
              </li>
            </Link>
            <li className='primary-bottom open-submenu'>
              MI CUENTA
              <ul className='submenu'>
                <Link to={"/login"}>
                  <li className='primary-bottom login'>Iniciar Sesion</li>
                </Link>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <TareasProvider>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/content" element={<Content />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="*" element={<Index />} />

          </Routes>
        </TareasProvider>
      </main>
    </div>
  );
}

export default App;
