import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./navbar.css"
import Cart from "../cart/Cart";
import { useCart } from "../../context/cart.context";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/navbar/urge logo-01.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [display, setDisplay] = useState("hidden")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()

  const { products } = useCart();

  const cartHandler = () => {
    setDisplay("block")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  // useEffect(() => {
  //   const scentDiv = document.querySelector(".scent-div");
  //   const candleDiv = document.querySelector(".candle-div");
  //   const fragnanceDiv = document.querySelector(".fragnance-div");
  //   const listItem1 = document.getElementById("li-1");
  //   const listItem2 = document.getElementById("li-2");
  //   const listItem3 = document.getElementById("li-3");

  //   const showDiv = (div, itemId) => {
  //     gsap.to(div, {
  //       width: "100%",
  //       display: "block",
  //       opacity: 1,
  //       duration: 0,
  //     });
  //     setActiveItem(itemId);
  //   };

  //   const hideDiv = (div, itemId) => {
  //     gsap.to(div, {
  //       width: "0%",
  //       display: "none",
  //       opacity: 0,
  //       duration: 0,
  //     });
  //     // Only unset activeItem if it's still the current item.
  //     setActiveItem((prev) => (prev === itemId ? null : prev));
  //   };

  //   const addHoverEffect = (listItem, div, itemId) => {
  //     const onMouseEnter = () => showDiv(div, itemId);
  //     const onMouseLeave = (e) => {
  //       const relatedTarget = e.relatedTarget;
  //       if (!listItem.contains(relatedTarget) && !div.contains(relatedTarget)) {
  //         hideDiv(div, itemId);
  //       }
  //     };

  //     listItem.addEventListener("mouseenter", onMouseEnter);
  //     listItem.addEventListener("mouseleave", onMouseLeave);
  //     div.addEventListener("mouseenter", onMouseEnter);
  //     div.addEventListener("mouseleave", onMouseLeave);

  //     // Cleanup listeners
  //     return () => {
  //       listItem.removeEventListener("mouseenter", onMouseEnter);
  //       listItem.removeEventListener("mouseleave", onMouseLeave);
  //       div.removeEventListener("mouseenter", onMouseEnter);
  //       div.removeEventListener("mouseleave", onMouseLeave);
  //     };
  //   };

  //   const cleanup1 = addHoverEffect(listItem1, scentDiv, "li-1");
  //   const cleanup2 = addHoverEffect(listItem2, candleDiv, "li-2");
  //   const cleanup3 = addHoverEffect(listItem3, fragnanceDiv, "li-3");

  //   return () => {
  //     cleanup1();
  //     cleanup2();
  //     cleanup3();
  //   };
  // }, []);

  return (
    <>
      {/* Main Navbar */}
      <div className="relative z-10 px-2 sm:px-10 py-2 flex justify-between lg:justify-start md:gap-40 items-center">
        <div className="overflow-hidden flex justify-center items-center cursor-pointer" onClick={()=> navigate("/")}>
          <img className="w-20" src={logo} alt="" srcset="" />
          <p className="text-xl font-bold">Urge Fragnances</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="list">
            <ul className="text-xl flex gap-10">
              
              <li
                className={`cursor-pointer relative group ${activeItem === "li-3" ? "active" : ""}`}
                id="li-3"
                onClick={()=>navigate("/perfumeWax")}

              >
                Perfume Wax
                <span className="absolute bottom-[-10px] left-0 w-0 h-[5px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
              <li
                className={`cursor-pointer relative group ${activeItem === "li-2" ? "active" : ""}`}
                id="li-2"
                onClick={()=>navigate("/perfume")}
              >
                Perfumes
                <span className="absolute bottom-[-10px] left-0 w-0 h-[5px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
              <li
                className={`cursor-pointer relative group ${activeItem === "li-1" ? "active" : ""}`}
                onClick={()=>navigate("/scentedCandle")}
                id="li-1"
              >
                Scented Candles
                <span className="absolute bottom-[-10px] left-0 w-0 h-[5px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>

              {/* cart option */}
              <li className="absolute right-20 cursor-pointer" onClick={cartHandler}>
                <div className="indicator">
                  <span className="indicator-item badge bg-orange-900 text-white">{products.length}</span>
                  <div className="text-4xl"><CiShoppingCart /></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <div
            className="mr-4 relative cursor-pointer"
            onClick={cartHandler}
          >
            <div className="indicator">
              <span className="indicator-item badge bg-orange-900 text-white">{products.length}</span>
              <div className="text-2xl"><CiShoppingCart /></div>
            </div>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center space-x-2">
                <img
                  className="w-12 h-auto"
                  src={logo}
                  alt="Urge Fragrances Logo"
                />
                <p className="text-lg font-bold">Urge Fragnances</p>
              </div>
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none"
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>

            {/* <nav className="p-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Scented Candles</h3>
                <ul className="space-y-2">
                  <li className="text-md text-gray-600 hover:text-black cursor-pointer">
                    link 1 of Scents
                  </li>
                  <li className="text-md text-gray-600 hover:text-black cursor-pointer">
                    link 2
                  </li>
                  <li className="text-md text-gray-600 hover:text-black cursor-pointer">
                    link 3
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Perfumes</h3>
                <ul className="space-y-2">
                  <li className="text-md text-gray-600 hover:text-black cursor-pointer">
                    link 1 of Candle
                  </li>
                  <li className="text-md text-gray-600 hover:text-black cursor-pointer">
                    link 2
                  </li>
                  <li className="text-md text-gray-600 hover:text-black cursor-pointer">
                    link 3
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Perfume Wax</h3>
                <ul className="space-y-2">
                  <li className="text-md text-gray-600 hover:text-black cursor-pointer">
                    link 1 of Fragnances
                  </li>
                  <li className="text-md text-gray-600 hover:text-black cursor-pointer">
                    link 2
                  </li>
                  <li className="text-md text-gray-600 hover:text-black cursor-pointer">
                    link 3
                  </li>
                </ul>
              </div>
            </nav> */}
          </div>
        </div>
      )}

      <Cart display={display} setDisplay={setDisplay} />

      {/* Existing Dropdown Divs for Desktop */}
      {/* <div className="px-10 py-5 absolute z-20 top-[5rem] w-0 hidden scent-div bg-white">
        <ul className="text-xl flex gap-10 items-center pl-28">
          <li className="cursor-pointer">Men</li>
          <li className="cursor-pointer">link 2</li>
          <li className="cursor-pointer">link 3</li>
        </ul>
      </div>
      <div className="px-10 py-5 absolute z-20 top-[5rem] w-0 hidden candle-div bg-white">
        <ul className="text-xl flex gap-10 items-center pl-28">
          <li className="cursor-pointer">link 1 of Candle</li>
          <li className="cursor-pointer">link 2</li>
          <li className="cursor-pointer">link 3</li>
        </ul>
      </div>
      <div className="px-10 py-5 absolute z-20 top-[5rem] w-0 hidden fragnance-div bg-white">
        <ul className="text-xl flex gap-10 items-center pl-28">
          <li className="cursor-pointer">link 1 of Fragnances</li>
          <li className="cursor-pointer">link 2</li>
          <li className="cursor-pointer">link 3</li>
        </ul>
      </div> */}
    </>
  );
};

export default Navbar;