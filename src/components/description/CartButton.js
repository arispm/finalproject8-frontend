import React, { useState } from 'react';

function CartButton() {
  const [quantity, setQuantity] = useState(1);

  return (
      <div className='flex items-center mx-0'>
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l' onClick={() => setQuantity(quantity - 1)}>-</button>
        <span className='bg-gray-100 text-gray-700 font-bold py-2 px-4'>{quantity}</span>
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r' onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    
  );
}

export default CartButton;