import React from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import bcaImg from "../../assets/BCA.png";
import bniImg from "../../assets/BNI.png";
import mandiriiImg from "../../assets/Mandiri.png";
import triangle from "../../assets/triangle-svgrepo-com.svg";
import box from "../../assets/FOR_SHOPIFY_DURRAR_02_medium.webp";
import axios from "axios";
import { useState, useEffect } from "react";

const Checkout = () => {
  const urlPost = "http://13.215.161.174:8080/orders";
  const [data, setData] = useState({
    orderTotalPrice: "3000",
    orderEmail: "",
    orderFirstName: "",
    orderLastName: "",
    orderProvinsi: "",
    orderKabkota: "",
    orderKecamatan: "Indonesia",
    orderKelurahan: "Indonesia",
    orderPostalCode: "",
    orderAddress: "",
    orderPhoneNumber: "",
    orderOtherDesc: "",
    orderShippingMethod: "JNE",
    orderPaymentMethod: "Virtual Account",
    orderDetails: [
      {
        productID: "1",
        qty: "2",
        price: "20000",
      },
      { productID: "1", qty: "1", price: "10000" },
    ],
  });
  function submit(e) {
    axios
      .post(urlPost, {
        orderTotalPrice: data.orderTotalPrice,
        orderEmail: data.orderEmail,
        orderFirstName: data.orderFirstName,
        orderLastName: data.orderLastName,
        orderProvinsi: data.orderProvinsi,
        orderKabkota: data.orderKabkota,
        orderKecamatan: data.orderKecamatan,
        orderKelurahan: data.orderKelurahan,
        orderPostalCode: data.orderPostalCode,
        orderAddress: data.orderAddress,
        orderPhoneNumber: data.orderPhoneNumber,
        orderOtherDesc: data.orderOtherDesc,
        orderShippingMethod: data.orderShippingMethod,
        orderPaymentMethod: data.orderPaymentMethod,
        orderDetails: data.orderDetails,
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

  const [isDropdown, setIsDropdown] = useState(false);
  const [selected, setSelected] = useState("");
  const option = [
    "JNE - Regular",
    "Pos Indonesia - One Day",
    "JNT - Sameday",
    "siCepat - Regular yakin cepat sampai",
  ];
  return (
    // body = Background image
    <body class="doubleColor ">
      <section class="flex flex-col container mx-auto lg:flex-row">
        {/* <!-- Left Item --> */}
        <div class="flex flex-col lg:w-1/2">
          {/* <!-- Container dalam --> */}
          <div class="w-[95%] lg:w-[90%]">
            <div class="mt-10 p-6">
              <h1 class="font-normal text-3xl">Port of Mokha</h1>
            </div>
            <div class="pl-6 flex gap-x-2 text-xs">
              <Link to="/cart">
                <button className="text-blue-400">Cart</button>
              </Link>
              <p>></p>
              <div class="mb-3">Checkout</div>
            </div>
            {/* <!-- Line Payment TOP--> */}
            <div class="flex pl-6 items-center text-center mb-5">
              <div class="lineBar w-[20%]"></div>
              <div class="text-xs w-[50%]">Choose Payment</div>
              <div class="lineBar w-[20%]"></div>
            </div>
            {/* <!-- Payment Grid --> */}
            <div class="grid grid-cols-3 gap-4 pl-6 mb-5">
              <button class="rounded-lg border border-transparent bg-GrayDefault hover:bg-gray-200 focus:border-gray-400">
                <div class="flex justify-center">
                  <img src={bniImg} alt="" class="w-[57%] md:w-[30%]" />
                </div>
              </button>
              <button class="rounded-lg border border-transparent bg-GrayDefault hover:bg-gray-200 focus:border-gray-400">
                <div class="flex justify-center">
                  <img src={bcaImg} alt="" class="w-[57%] md:w-[30%]" />
                </div>
              </button>
              <button class="rounded-lg border border-transparent bg-GrayDefault hover:bg-gray-200 focus:border-gray-400">
                <div class="flex justify-center">
                  <img src={mandiriiImg} alt="" class="w-[57%] md:w-[30%]" />
                </div>
              </button>
            </div>
            {/* <!-- Line Payment Bottom--> */}
            <div class="flex pl-6 items-center text-center mb-3">
              <div class="lineBar w-[10%]"></div>
              <div class="text-xs w-[30%]">Shipping</div>
              <div class="lineBar w-[10%]"></div>
            </div>
            {/* <!-- Container Contact Information - Checkbox --> */}
            {/* Form Container */}
            <form onSubmit={(e) => submit(e)}>
              <div class="mb-10">
                {/* <!-- Address Information --> */}
                <div class="pl-6 flex flex-col justify-between  mb-3 lg:flex-row lg:items-center">
                  <div class="font-normal text-xl">Contact Information</div>
                  <div class="text-sm">Input your detail below!</div>
                </div>
                {/* <!-- Form Email  --> */}
                <div class="pl-6 form1 relative mb-3">
                  <input
                    onChange={(e) => handle(e)}
                    type="text"
                    value={data.orderEmail}
                    placeholder=" "
                    class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                    id="orderEmail"
                    required
                  />
                  <label
                    for="Email"
                    class="absolute pl-6 text-gray-400 text-base left-4 top-[4.5px] items-center label1 cursor-text"
                  >
                    Email
                  </label>
                </div>
                {/* <!-- Checkbox --> */}
                <div class="pl-6 flex space-x-3 items-center">
                  <button class="rounded-sm border border-gray-400 w-4 h-4"></button>
                  <div>Email me with offers and promotions</div>
                </div>
              </div>
              {/* <!-- Shipping Container --> */}
              <div class="pl-6 relative mb-6">
                <div class="text-xl mb-5">Shipping Address</div>
                {/* <!-- Courier box--> */}
                <button
                  id="button1"
                  class="flex items-center justify-between relative border border-gray-300 w-full rounded-lg h-9 mb-3"
                  onClick={(e) => setIsDropdown(!isDropdown)}
                >
                  {/* Harusnya ini ada state Courier, tapi ga tau caranya.. sepertinya pake if si bisa */}
                  <div
                    onChange={(e) => handle(e)}
                    class="pl-4"
                    id="orderShippingMethod"
                  >
                    {selected}
                  </div>
                  <div class="text-[16px] border-l-[1px] px-4 w-[45px] h-[20px] flex items-center">
                    {/* <!-- Source : https://www.svgrepo.com/svg/104388/triangle --> */}
                    <img src={triangle} alt="triangle" />
                  </div>
                </button>
                {/* <!-- Dropdown Courier --> */}
                {/* tutorial dropdown https://www.youtube.com/watch?v=C845oiKpxcg */}

                {isDropdown && (
                  <div class="z-10 bg-white flex flex-col cursor-pointer absolute  mt-[-11px] border border-gray-300 rounded-lg gap-y-1 w-[95%] lg:w-[96%] ">
                    {option.map((option) => (
                      <div
                        onClick={(e) => {
                          setSelected(option);
                          setIsDropdown(false);
                        }}
                      >
                        <div className="hover:bg-slate-100 pl-6 rounded-lg">
                          {option}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {/* <!-- First and Last Form Container --> */}
                <div class="flex flex-col gap-x-3 items-center lg:flex-row">
                  {/* <!-- form First Name --> */}
                  <div class="relative flex mb-3 w-full lg:w-1/2">
                    <input
                      onChange={(e) => handle(e)}
                      value={data.orderFirstName}
                      type="text"
                      placeholder=" "
                      class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                      id="orderFirstName"
                      required
                    />
                    <label
                      for="FirstName"
                      class="absolute pl-1 text-gray-400 text-base left-3 top-[4.5px] items-center label1 cursor-text"
                    >
                      First Name
                    </label>
                  </div>
                  {/* <!-- Form Last Name --> */}
                  <div class="relative flex mb-3 w-full lg:w-1/2">
                    <input
                      onChange={(e) => handle(e)}
                      value={data.orderLastName}
                      type="text"
                      placeholder=" "
                      class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                      id="orderLastName"
                      required
                    />
                    <label
                      for="LastName"
                      class="absolute pl-1 text-gray-400 text-base left-3 top-[4.5px] items-center label1 cursor-text"
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                {/* <!-- Company Form --> */}
                <div class="block form1 relative mb-3">
                  <input
                    onChange={(e) => handle(e)}
                    value={data.orderOtherDesc}
                    type="text"
                    placeholder=" "
                    class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                    id="orderOtherDesc"
                  />
                  <label
                    for="Company"
                    class="absolute pl-1 text-gray-400 text-base left-3 top-[4.5px] items-center label1 cursor-text"
                  >
                    Company(Optional)
                  </label>
                </div>
                {/* <!-- Address --> */}
                <div class="block form1 relative mb-3">
                  <input
                    onChange={(e) => handle(e)}
                    value={data.orderAddress}
                    type="text"
                    placeholder=" "
                    class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                    id="orderAddress"
                    required
                  />
                  <label
                    for="Address"
                    class="absolute pl-1 text-gray-400 text-base left-3 top-[4.5px] items-center label1 cursor-text"
                  >
                    Address
                  </label>
                </div>
                {/* <!-- Apartement, suite, etc. (Optional) --> */}
                <div class="block form1 relative mb-3">
                  <input
                    type="text"
                    placeholder=" "
                    class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                    id="Apartement, suite, etc. (Optional)"
                  />
                  <label
                    for="Apartement, suite, etc. (Optional)"
                    class="absolute pl-1 text-gray-400 text-base left-3 top-[4.5px] items-center label1 cursor-text"
                  >
                    Apartement, suite, etc. (Optional)
                  </label>
                </div>
                {/* <!-- City --> */}
                <div class="block form1 relative mb-3">
                  <input
                    onChange={(e) => handle(e)}
                    value={data.orderKabkota}
                    type="text"
                    placeholder=" "
                    class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                    id="orderKabkota"
                    required
                  />
                  <label
                    for="City"
                    class="absolute pl-1 text-gray-400 text-base left-3 top-[4.5px] items-center label1 cursor-text"
                  >
                    City
                  </label>
                </div>
                {/* <!-- First and Last Form Container --> */}
                <div class="flex flex-col gap-x-3 items-center lg:flex-row">
                  {/* <!-- form Province --> */}
                  <div class="relative flex mb-3 w-full lg:w-1/2">
                    <input
                      onChange={(e) => handle(e)}
                      value={data.orderProvinsi}
                      type="text"
                      placeholder=" "
                      class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                      id="orderProvinsi"
                      required
                    />
                    <label
                      for="Province"
                      class="absolute pl-1 text-gray-400 text-base left-3 top-[4.5px] items-center label1 cursor-text"
                    >
                      Province
                    </label>
                  </div>
                  {/* <!-- Form Postal code --> */}
                  <div class="relative flex mb-3 w-full lg:w-1/2">
                    <input
                      onChange={(e) => handle(e)}
                      value={data.orderPostalCode}
                      type="text"
                      placeholder=" "
                      class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                      id="orderPostalCode"
                      required
                    />
                    <label
                      for="Postal code"
                      class="absolute pl-1 text-gray-400 text-base left-3 top-[4.5px] items-center label1 cursor-text"
                    >
                      Postal code
                    </label>
                  </div>
                </div>
                {/* <!-- Phone --> */}
                <div class="block form1 relative mb-3">
                  <input
                    onChange={(e) => handle(e)}
                    value={data.orderPhoneNumber}
                    type="number"
                    placeholder=" "
                    class="w-full h-9 text-pasBanget rounded-lg border border-gray-300 outline-blue-400 pl-4 pt-4 pb-2 input1"
                    id="orderPhoneNumber"
                    required
                  />
                  <label
                    for="Phone"
                    class="absolute pl-1 text-gray-400 text-base left-3 top-[4.5px] items-center label1 cursor-text"
                  >
                    Phone
                  </label>
                </div>
                {/* <!-- Checkbox --> */}
                <div class="flex space-x-3 items-center">
                  <button class="rounded-sm border border-gray-400 w-4 h-4"></button>
                  <div>Save this information for next time</div>
                </div>
              </div>
              {/* <!-- Return to Cart & button Container --> */}
              <div class="pl-6 mb-10 flex flex-col-reverse gap-y-4 justify-between items-center lg:flex-row">
                {/* <!-- Return to Cart --> */}
                <Link to={"/cart"} class="text-blue-400">
                  Return to Cart
                </Link>
                {/* <!-- Button --> */}
                <button class="w-full bg-blue-400 rounded-md text-center text-white h-14 lg:w-[35%]">
                  Order
                </button>
              </div>
            </form>
            {/* <!-- Garis Bottom --> */}
            <div class="hidden border-b-2 border-x-GrayDefault mb-3 ml-6 md:flex"></div>
          </div>
          {/* <!-- Garis Bottom Mobile--> */}
          <div class="border-b-2 border-x-GrayDefault mb-3 md:hidden"></div>

          {/* <!-- Footer --> */}
          <div class="pl-6 text-blue-400 mb-5 flex gap-x-7 textSize">
            <Link to="#">Refund Policy</Link>
            <Link to="#">Shipping Policy</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
        {/* Right Items */}
        <div class="hidden lg:flex lg:flex-col border-l border-gray-200 lg:w-1/2">
          {/* items container */}
          <div class="w-[75%] lg:w-[70%]">
            <div class="mt-10 p-6">
              {/* Item Lists */}
              <div className="justify-between  gap-x-4 flex items-center mb-6">
                <div className="relative">
                  {/* QTY and RoundShape */}
                  <div className="rounded-full absolute border-white border-[1px] bg-GreenDefault w-[30px] h-[30px] items-center top-[-10px] right-[-14px]">
                    <div className="text-white left-[8px] top-[6px] text-xs absolute">
                      01
                    </div>
                  </div>
                  {/* Box */}
                  <div className="bg-white rounded-[12px] border-2 border-gray-200 items-center justify-center w-[100px] h-[100px] flex">
                    <img src={box} alt="boxJualan" />
                  </div>
                </div>
                {/* Item Name */}
                <div className="w-[280px] ">
                  Al-Durrar - Single Farmer Micro lot Box - 4oz
                </div>
                {/* Price */}
                <div>$48.00</div>
              </div>
              {/* Border */}
              <div class=" border-b-2 border-x-GrayDefault mb-3  md:flex"></div>
              {/* Discount and button container */}
              <div className="gap-x-2 flex py-2 items-center mb-3">
                {/* form */}
                <div className="w-3/4 relative">
                  <input
                    type="text"
                    placeholder=" "
                    class="w-full h-9 textSize rounded-md border border-gray-300 outline-blue-400 pl-3 pt-4 pb-2 input2"
                    id="Discount"
                    required
                  />
                  <label
                    for="Discount"
                    class="absolute pl-3 text-gray-400 text-base left-0 top-[4.5px] items-center label1 cursor-text"
                  >
                    Discount Code
                  </label>
                </div>
                {/* Button */}
                <button className="w-1/4 rounded-md bg-blue-500 h-9 text-white">
                  Apply
                </button>
              </div>
              {/* Border */}
              <div class=" border-b-2 border-x-GrayDefault mb-3  md:flex"></div>
              {/* Subtotal and Shipping container */}
              <div className="gap-y-2 flex flex-col mb-3">
                {/* Subtotal */}
                <div className="flex">
                  <div className="w-3/4">Subtotal</div>
                  <div className="w-1/4 text-right">$48.00</div>
                </div>
                {/* Shipping */}
                <div className="flex">
                  <div className="w-3/4">Shipping</div>
                  <div className="w-1/4 text-right">$58.63</div>
                </div>
              </div>
              {/* Border */}
              <div class=" border-b-2 border-x-GrayDefault mb-6  md:flex"></div>
              {/* Total */}
              <div className="flex">
                <div className="w-3/4">Total</div>
                <div className="w-1/4 text-right text-3xl">$58.63</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Checkout;
