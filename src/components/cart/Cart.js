import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiMinus, FiTrash } from "react-icons/fi";
//import data from "./data";

const Cart = () => {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(0);
  }
  let grandTotal = counter * 48;
  return (
    <section>
      <div className="bg-[#F7F3F2] py-9">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-5">
              SHOOPING CART
            </h1>
          </div>
        </div>
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md shadow-grey-400 my-3">
            <div className="w-full bg-[#F7F3F2] px-10 py-0">
              <div className="flex items-center hover:bg-gray-200 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002"
                      alt=""
                      className="rounded-md duration-200 hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-center px-4">
                    <span className="font-bold text-sm">
                      Al-Durrar - Single Farmer Micro Lot - 4oz
                    </span>
                  </div>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $48
                </span>
                <div className="flex justify-center w-1/5">
                  <button onClick={decrementCounter}>
                    <FiMinus />
                  </button>
                  <label className="mx-3 bg-white ">{counter}</label>
                  <button onClick={incrementCounter}>
                    <FiPlus />
                  </button>
                </div>
                <div className="text-center w-1/5 font-semibold text-sm">
                  <button>
                    <FiTrash size={20} />
                  </button>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $ {grandTotal}
                </span>
              </div>
            </div>
          </div>

          <div
            id="summary"
            className="px-7 py-10 content-center sm:w-1/2 lg:w-1/10 border"
          >
            <div className="flex text-3xl font-semibold justify-between py-6 uppercase">
              <span>Grand Total</span>
              <span>$ {grandTotal}</span>
            </div>
            <Link to="checkout">
              <button className="rounded-lg bg-[#4B5254] font-semibold hover:bg-slate-600 py-3 text-sm text-white uppercase w-full">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
