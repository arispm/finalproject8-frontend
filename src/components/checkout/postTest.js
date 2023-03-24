import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";

function Test2() {
  const url = "http://13.215.161.174:8080/orders";
  const [data, setData] = useState({
    orderEmail: "",
  });
  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        orderEmail: data.orderEmail,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="orderEmail"
          value={data.orderEmail}
          placeholder="name"
          type="text"
        ></input>

        <button>Submit</button>
      </form>
    </div>
  );
}
export default Test2;
