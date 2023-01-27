import React from "react";
import { Link } from "react-router-dom";
import coffee from "../../assets/coffeebean.jpg";

const Cart = () => {
  return (
    <section>
      <div class="bg-[#F7F3F2] py-24 sm:py-32 lg:py-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="sm:text-center">
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-5">
              SHOOPING CART
            </h1>
          </div>
        </div>
        <div class="container mx-auto mt-10">
          <div class="flex shadow-md shadow-grey-400 my-10">
            <div class="w-full bg-[#F7F3F2] px-10 py-10">
              <div class="flex mt-10 mb-5">
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Delete
                </h3>
              </div>
              <div class="flex items-center hover:bg-gray-200 -mx-8 px-6 py-5">
                <div class="flex w-2/5">
                  <div class="w-20">
                    <img
                      src={coffee}
                      alt=""
                      className="rounded-md duration-200 hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-center px-4">
                    <span class="font-bold text-sm">Signature Coffe</span>
                  </div>
                </div>
                <div class="flex justify-center w-1/5">
                  <svg class="fill-current w-3" viewBox="0 0 448 512"></svg>

                  <svg class="fill-current w-3" viewBox="0 0 448 512"></svg>
                </div>
                <span class="text-center w-1/5 font-semibold text-sm">
                  $10.00
                </span>
                <span class="text-center w-1/5 font-semibold text-sm"></span>
              </div>
            </div>
          </div>

          <div id="summary" class="w-1/4 px-8 py-10 content-center">
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">Items 1</span>
              <span class="font-semibold text-sm">10$</span>
            </div>
            <div>
              <label class="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select class="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $5</option>
              </select>
            </div>
            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$15</span>
              </div>
              <Link to="checkout">
                <button class="bg-[#4B5254] font-semibold hover:bg-slate-600 py-3 text-sm text-white uppercase w-full">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
