import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Description from "./components/description/Description";
import Test from "./components/checkout/getTest";
import Test2 from "./components/checkout/postTest";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/getTest" element={<Test />} />
        <Route path="/postTest" element={<Test2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
