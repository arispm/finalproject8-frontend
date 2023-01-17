import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import { Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
