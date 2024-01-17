import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import FullCart from './pages/FullCart';
import './scss/main.scss';



function App() {

  return (
    <>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/description/:id" element={<FullCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="footer">
          <div className="container">
            <div className="footer__copiright">© 2023 JIVA</div>
          </div>
        </footer>
    </>
  );
}

export default App;
