import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Test() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("http://13.215.161.174:8080/orders")
      .then((res) => {
        console.log(res.data);
        setQuote(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default Test;
