import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Account from './pages/account';
import Index from './pages';
import Content from './pages/content/content';

function App() {
  return (
    <div className="App">
      <header>
        <img src="https://i.postimg.cc/Hsv3vdrn/logo.png" alt="logo" className="logo" />
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
            <Link to={"/account"}>
              <li className='primary-bottom'>
                MI CUENTA
              </li>
            </Link>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/content" element={<Content />} />
          <Route path="/account" element={<Account />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
