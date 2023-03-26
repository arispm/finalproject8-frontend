import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi';

const Cart = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get('http://13.215.161.174:8080/products');
    setProduct(response.data.products);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://13.215.161.174:8080/products/${productId}`);
      const newProducts = products.filter((product) => product.id !== productId);
      setProduct(newProducts);
    } catch (error) {
      console.log(error);
    }
  };

  var totalCartPrice = 0;

  // const [counter, setCounter] = useState(0);
  // const incrementCounter = (id) => {
  //   setCounter((val) => val + 1);
  // };
  // const decrementCounter = () => {
  //   setCounter((val) => val - 1);
  // };

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(0);
  }
  // let total = counter * 48;

  return (
    <section>
      <div className="bg-[#F7F3F2] py-9">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-5">SHOOPING CART</h1>
          </div>
        </div>

        {products.map((product) => {
          //totalCartPrice += product.price * product.counter;
          return (
            <div className="container bg-[#F7F3F2] mx-auto mt-10">
              <div className="flex shadow-sm my-3">
                <div className="w-full px-10 py-0">
                  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-2">
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img key={product.id} src={product.product_images[0].image_path} id={product.id} alt="" className="rounded-md duration-200 hover:scale-105" />
                      </div>
                      <div className="flex items-center justify-center px-4">
                        <span className="font-bold text-sm">{product.name}</span>
                      </div>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">{product.price}</span>
                    <div className="flex justify-center w-1/5">
                      <button onClick={() => decrementCounter(`${product}`)}>
                        <FiMinus />
                      </button>
                      <label className="mx-3 bg-white ">{counter}</label>
                      <button onClick={() => incrementCounter(`${product}`)}>
                        <FiPlus />
                      </button>
                    </div>
                    <div className="text-center w-1/5 font-semibold text-sm">
                      <button>
                        <FiTrash
                          size={20}
                          className="delete-icon"
                          onClick={() => {
                            deleteProduct(product.id);
                            console.log('delete', product.id);
                            //product.onRemove(product.id);
                          }}
                        />
                      </button>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">$ {counter * product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div id="summary" className="px-20 py-10 content-center sm:w-1/2 lg:w-1/10 border">
          <div className="flex text-3xl font-semibold justify-between py-6 uppercase">
            <span>Grand Total</span>
            <span>$ {totalCartPrice}</span>
          </div>
          <Link to="/checkout">
            <button className="rounded-lg bg-[#4B5254] font-semibold hover:bg-slate-400 py-3 text-sm text-white uppercase w-1/4">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
