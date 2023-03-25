import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import StarRating2 from './StarRating';
import CartButton from './CartButton';
import axios from 'axios';
import { useParams } from 'react-router';

const Description = () => {
  const [openRating, setOpenRating] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  async function getProduct() {
    try {
      const response = await axios.get(`http://13.215.161.174:8080/products/${id}`);
      setProduct(response.data.products);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* image */}
      <img className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center" />
      {/* text */}
      <div className="space-y-5 p-5">
        <h4 className="text-xl font-semibold uppercase text-[#D87D4A]">Product</h4>
        <h1 className="text-3xl uppercase text-[#00000] font-bold">{product.name}</h1>
        <div className="space-y-2">
          <hr className="h-px bg-gray-300 border-0 dark:bg-gray-900" />
          <p className="text-md font-bold">Rating: ★★★★★</p>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-900" />
        </div>
        <h2 id="price" className="text-2xl font-bold">
          {product.price}
        </h2>
        <div>
          <CartButton />
          <Link to="/cart">
            <button className="w-full mt-5 rounded-lg bg-[#4B5254] font-semibold hover:bg-slate-600 py-3 text-sm text-white uppercase text-center lg:w-1/2  md:w-full">
              <FontAwesomeIcon icon={faCartShopping} className="text-slate-50 text-base mx-4"></FontAwesomeIcon>
              Add to Cart
            </button>
          </Link>
        </div>
        <p className="w-3/4 text-md mb-3 font-light text-gray-500 dark:text-gray-400 lg:w-full md:w-full">{product.desc}</p>

        <div className="space-x-5 flex items-center">
          <button
            className="bg-[#db7d4a] flex items-center space-x-2 px-5 py-2 text-[#ffff] rounded-md hover:bg-red-400 hover:text-white text-xl"
            onClick={() => {
              setOpenRating(true);
            }}
          >
            Submit your review
          </button>
        </div>
        {openRating && <StarRating2 closeRating={setOpenRating} />}
      </div>
    </div>
  );
};

export default Description;

// import React from 'react';
// import { useParams } from 'react-router';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const Description = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});
//   async function getProduct() {
//     try {
//       const response = await axios.get(`http://13.215.161.174:8080/products/${id}`);
//       setProduct(response.data.products);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     getProduct();
//   }, []);

//   return (
//     <div>
//       {product && (
//         <>
//           <h1>{product.price}</h1>
//           <h1>{product.name}</h1>
//         </>
//       )}
//     </div>
//   );
// };

// export default Description;
