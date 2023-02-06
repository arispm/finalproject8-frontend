import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <section class="w-full absolute top-0">
        <div className="jumboBg bg-cover h-96 flex">
          <div class="m-auto flex items-center justify-center bg-black bg-opacity-30 w-full h-full">
            <h1 class="text-white text-4xl font-semibold tracking-widest">SHOP COFFEE</h1>
          </div>
        </div>
      </section>

      <section className="w-full mt-80 md:flex md:flex-wrap md:justify-around md:items-center p-[5vw] gap-7">
        {/* Cards */}
        <div class="md:w-1/4 w-full rounded-lg shadow-md bg-[#4b5254] mt-5">
          <Link to="/description">
            <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002" alt="product image" />
          </Link>
          <div class="px-5 pb-5">
            <Link to="/description">
              <h5 class="text-xl font-semibold tracking-tight text-white ">Al-Durrar - Single Farmer Micro Lot - 4oz</h5>
            </Link>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white ">$48</span>
              <Link to="/description" class="text-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div class="md:w-1/4 w-full rounded-lg shadow-md bg-[#4b5254] mt-5">
          <Link to="/description">
            <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002" alt="product image" />
          </Link>
          <div class="px-5 pb-5">
            <Link to="/description">
              <h5 class="text-xl font-semibold tracking-tight text-white ">Al-Durrar - Single Farmer Micro Lot - 4oz</h5>
            </Link>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white ">$48</span>
              <Link to="/description" class="text-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div class="md:w-1/4 w-full rounded-lg shadow-md bg-[#4b5254] mt-5">
          <Link to="/description">
            <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002" alt="product image" />
          </Link>
          <div class="px-5 pb-5">
            <Link to="/description">
              <h5 class="text-xl font-semibold tracking-tight text-white ">Al-Durrar - Single Farmer Micro Lot - 4oz</h5>
            </Link>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white ">$48</span>
              <Link to="/description" class="text-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div class="md:w-1/4 w-full rounded-lg shadow-md bg-[#4b5254] mt-5">
          <Link to="/description">
            <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002" alt="product image" />
          </Link>
          <div class="px-5 pb-5">
            <Link to="/description">
              <h5 class="text-xl font-semibold tracking-tight text-white ">Al-Durrar - Single Farmer Micro Lot - 4oz</h5>
            </Link>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white ">$48</span>
              <Link to="/description" class="text-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div class="md:w-1/4 w-full rounded-lg shadow-md bg-[#4b5254] mt-5">
          <Link to="/description">
            <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002" alt="product image" />
          </Link>
          <div class="px-5 pb-5">
            <Link to="/description">
              <h5 class="text-xl font-semibold tracking-tight text-white ">Al-Durrar - Single Farmer Micro Lot - 4oz</h5>
            </Link>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white ">$48</span>
              <Link to="/description" class="text-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div class="md:w-1/4 w-full rounded-lg shadow-md bg-[#4b5254] mt-5">
          <Link to="/description">
            <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002" alt="product image" />
          </Link>
          <div class="px-5 pb-5">
            <Link to="/description">
              <h5 class="text-xl font-semibold tracking-tight text-white ">Al-Durrar - Single Farmer Micro Lot - 4oz</h5>
            </Link>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white ">$48</span>
              <Link to="/description" class="text-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div class="md:w-1/4 w-full rounded-lg shadow-md bg-[#4b5254] mt-5">
          <Link to="/description">
            <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002" alt="product image" />
          </Link>
          <div class="px-5 pb-5">
            <Link to="/description">
              <h5 class="text-xl font-semibold tracking-tight text-white ">Al-Durrar - Single Farmer Micro Lot - 4oz</h5>
            </Link>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white ">$48</span>
              <Link to="/description" class="text-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div class="md:w-1/4 w-full rounded-lg shadow-md bg-[#4b5254] mt-5">
          <Link to="/description">
            <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002" alt="product image" />
          </Link>
          <div class="px-5 pb-5">
            <Link to="/description">
              <h5 class="text-xl font-semibold tracking-tight text-white ">Al-Durrar - Single Farmer Micro Lot - 4oz</h5>
            </Link>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white ">$48</span>
              <Link to="/description" class="text-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div class="md:w-1/4 w-full rounded-lg shadow-md bg-[#4b5254] mt-5">
          <Link to="/description">
            <img class="p-8 rounded-t-lg" src="https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002" alt="product image" />
          </Link>
          <div class="px-5 pb-5">
            <Link to="/description">
              <h5 class="text-xl font-semibold tracking-tight text-white ">Al-Durrar - Single Farmer Micro Lot - 4oz</h5>
            </Link>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold text-white ">$48</span>
              <Link to="/description" class="text-white hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        {/* Cards End */}
      </section>

      <section class="w-[90%] mx-auto">
        <div class="text-center my-11">
          <h1 class="text-2xl">LEARN MORE</h1>
        </div>
        <div class="module-story bg-[#cbded2] text-[#1b3c33] py-[80px] px-[20px] relative h-96">
          <div class="learnMore module-background w-9/12 h-96 bg-cover bg-top absolute bg-no-repeat top-0 right-0 z-[1] after:left-0 after:absolute after:w-full after:h-full after:top-0 after:z-[1] after:bg-contain after:bg-gradient-to-r from-[#cbded2] to-[rgba(203, 222, 210, 0)]"></div>
          <div class="col-description z-[2] w-1/2 absolute inset-y-1/4 max-[768px]:w-full">
            <div class="module-content mx-11">
              <h6 class="tt-title module-title font-sans tracking-[4px] lg:text-[30px] md:!leading-10 !font-bold max-[600px]:text-[14px]">COFFEE WORTH RISKING YOUR LIFE FOR</h6>
              <p class="module-description font-sans tracking-wider lg:text-[16px] md:!leading-[2em] max-[600px]:text-8px !font-light !text-[#1b3c33]">
                Experience the story of how Mokhtar escaped Yemen by boat to introduce his coffee to the world.
              </p>
              <button class="bg-transparent hover:bg-[#1b3c33] text-[#1b3c33] font-semibold hover:text-white py-2 px-4 border border-[#1b3c33] hover:border-transparent rounded my-9">THE STORY</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
