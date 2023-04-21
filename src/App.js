import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Account from "./pages/account";
import Index from "./pages";
import Content from "./pages/content/content";
import Login from "./pages/forms/login";
import SignUp from "./pages/forms/signUp";
import Conditions from "./pages/conditions";
import Nosotros from "./pages/nosotros";
import { TareasProvider } from "./context/tareasContext";
import Details from "./pages/content/details";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://i.postimg.cc/sD8GfRfB/TRIANGULO-NEGRO-VOLUNTEERS-t-1.png"
          alt="logo"
          className="logo"
        />
        <nav>
          <ul>
            <Link to={"/"}>
              <li className="primary-bottom">INICIO</li>
            </Link>
            <Link to={"/content"}>
              <li className="primary-bottom">CONTENIDO</li>
            </Link>
            <li className="primary-bottom open-submenu">
              MI CUENTA
              <ul className="submenu">
                <Link to={"/login"}>
                  <li className="primary-bottom login">Iniciar Sesion</li>
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
            <Route path="/details/:id" element={<Details />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
          <Toaster />
        </TareasProvider>
      </main>
      <footer>
        <Link to='/nosotros'>
          <h6>NOSOTROS</h6>
        </Link>
        <h6>VOLUNTEERS 2023</h6>
      </footer>
    </div>
  );
}

export default App;
