import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Description = () => {
  const { id } = useParams;
  const [product, setProduct] = useState([]);
  async function getProduct() {
    try {
      const response = await axios.get(`http://13.215.161.174:8080/products/${id}`);
      setProduct(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>{product.price}</h1>
      <h1>{product.name}</h1>
    </div>
  );
};

export default Description;
