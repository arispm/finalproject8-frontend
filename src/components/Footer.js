import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer class="bg-[#4b5254] text-center mt-4">
        <div class="px-6 pt-6">
          <form action="">
            <div class="grid md:grid-cols-3 gird-cols-1 gap-4 ">
              <div class="md:ml-auto md:mb-6">
                <p class="text-gray-200">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div class="md:mb-6">
                <input
                  type="text"
                  class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div class="md:mr-auto mb-6">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-[#c0d6d7] text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:text-[#c0d6d7] hover:shadow-lg  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="text-center text-gray-200 p-4 bg-[#4b5254]">
          © 2023 Copyright:
          <Link class="text-gray-200" to="/">
            Port of Mokha
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
