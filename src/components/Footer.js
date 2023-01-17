import React from 'react';

const Footer = () => {
  return (
    <>
      <footer class="w-full md:flex max-[768px]:flex-wrap justify-around bg-[#4b5254] mt-10 text-white p-7">
        <div class="w-full flex items-center max-[768px]:justify-around justify-around gap-x-60 max-[768px]:flex-wrap ">
          <div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Story</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Auction</a>
              </li>
              <li>
                <a href="#">Wholesale</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="max-[768px]:w-full">
            <div class="text-center">
              <h1>Follow our unprecedented journey</h1>
            </div>
            <div class="text-black flex justify-center items-center">
              <input type="email" name="email" id="email" class="border border-[#1b3c33] w-[75%]" />
              <button class="bg-transparent text-white font-semibold py-1 px-2 border border-white rounded text-[12px] my-3">Submit</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
