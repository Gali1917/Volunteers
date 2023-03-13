import './App.css';
import { Routes, Route, link } from "react-router-dom";
import Account from './pages/account';

function App() {
  return (
    <div className="App">
      <header>
        <img src="https://i.postimg.cc/Hsv3vdrn/logo.png" alt="logo" className="logo" />
        <nav>
          <ul>
            <li className='primary-bottom'>INICIO</li>
            <li className='primary-bottom'>CONTENIDO</li>
            <li className='primary-bottom'>MI CUENTA</li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
