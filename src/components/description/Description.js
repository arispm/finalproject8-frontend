import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import coffee from "../../assets/coffeebean.jpg";
import coffee1 from "../../assets/coffeebean1.jpg";
import coffee2 from "../../assets/coffeebean2.jpg";

const Description = () => {
  return (
    <div>
      <div className='flex flex-col'>
        {/* <div className='bg-[#000000] text-white font-bold h-[300px]' >
          <h1 className='mt-[10%] text-[40px] leading-[44px] uppercase tracking-[1.428px] text-center font-bold'>Coffee</h1>
        </div> */}

        <div className='flex mx-[10%] justify-around mt-[10%]'>
          {/* image */}
          <div className='rounded-[5px]'>
            <img src={coffee}/>
          </div>
          {/* text */}
          <div className='flex flex-col mx-[5%] space-y-5'>
            <h5 className='text-left text-sm leading-[19px] my-0 uppercase text-[#D87D4A]'>Product</h5>
            <h3 className='text-left text-[40px] uppercase leading-[44px] text-[#00000] font-bold tracking-[1.428px]'>LODGE ROAST WHOLE BEAN - 1 LB.</h3>
            <hr />
            <div className='flex space-x-3 my-0'>
            <div className='flex space-x-0'>
            <FontAwesomeIcon icon={faStar} className='text-yellow-400' ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className='text-yellow-400' ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className='text-yellow-400' ></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className='text-yellow-400'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
            <span id='noReview' className='text-sm text-gray-500'>(50 Review)</span>
            </div>
            <hr/>

            <p id='price' className='text-left text-gray-900 font-medium text-[20px]'>$200.00</p>

            <div className='text-sm'>
              <span className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded'>-</span>
              <input type='number' className='mx-2 my-0 form-control count border-none text-center w-12' value='1' readOnly/>
              <span className='bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded'>+</span>
            </div>

            <button type='button' id='cart' className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded'>Add to chart</button>

            <p className='w-[100%] text-left font-small text-[15px] leading-[25px] opacity-50'>The new XX99 Kopi bikin kuat tahan ngantuk jadi jago ngoding mantaps The new XX99 Kopi bikin kuat tahan ngantuk jadi jago ngoding mantaps The new XX99 Kopi bikin kuat tahan ngantuk jadi jago ngoding mantaps The new XX99 Kopi bikin kuat tahan ngantuk jadi jago ngoding mantaps</p>

            <button className='bg-[#db7d4a] w-[50%] h-[48px] mt-[5%] font bold uppercase text-[#ffff] text-[13px] tracking-[1px] leading-[18px]'>Submit your review</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Description;
