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
            <li className='primary-bottom'>
              <Link to={"/"}>INICIO</Link>

            </li>
            <li className='primary-bottom'>
              <Link to={"/content"}>CONTENIDO</Link>
            </li>
            <li className='primary-bottom'>
              <Link to={"/account"}>MI CUENTA</Link>
            </li>
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
