import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./navbar.css"
import Cart from "../cart/Cart";
import { useCart } from "../../context/cart.context";
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/images/navbar/urge logo-01.png"


const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [display, setDisplay] = useState("hidden")

  const { products } = useCart();

  const cartHandler = () => {
    setDisplay("block")
  }

  useEffect(() => {
    const scentDiv = document.querySelector(".scent-div");
    const candleDiv = document.querySelector(".candle-div");
    const fragnanceDiv = document.querySelector(".fragnance-div");
    const listItem1 = document.getElementById("li-1");
    const listItem2 = document.getElementById("li-2");
    const listItem3 = document.getElementById("li-3");


    const showDiv = (div, itemId) => {
      gsap.to(div, {
        width: "100%",
        display: "block",
        opacity: 1,
        duration: 0,

      });
      setActiveItem(itemId);
    };

    const hideDiv = (div, itemId) => {
      gsap.to(div, {
        width: "0%",
        display: "none",
        opacity: 0,
        duration: 0,
      });
      // Only unset activeItem if it's still the current item.
      setActiveItem((prev) => (prev === itemId ? null : prev));
    };

    const addHoverEffect = (listItem, div, itemId) => {
      const onMouseEnter = () => showDiv(div, itemId);
      const onMouseLeave = (e) => {
        const relatedTarget = e.relatedTarget;
        if (!listItem.contains(relatedTarget) && !div.contains(relatedTarget)) {
          hideDiv(div, itemId);
        }
      };

      listItem.addEventListener("mouseenter", onMouseEnter);
      listItem.addEventListener("mouseleave", onMouseLeave);
      div.addEventListener("mouseenter", onMouseEnter);
      div.addEventListener("mouseleave", onMouseLeave);

      // Cleanup listeners
      return () => {
        listItem.removeEventListener("mouseenter", onMouseEnter);
        listItem.removeEventListener("mouseleave", onMouseLeave);
        div.removeEventListener("mouseenter", onMouseEnter);
        div.removeEventListener("mouseleave", onMouseLeave);
      };
    };

    const cleanup1 = addHoverEffect(listItem1, scentDiv, "li-1");
    const cleanup2 = addHoverEffect(listItem2, candleDiv, "li-2");
    const cleanup3 = addHoverEffect(listItem3, fragnanceDiv, "li-3");

    return () => {
      cleanup1();
      cleanup2();
      cleanup3();
    };
  }, []);

  return (
    <>
      <div className="relative z-10 px-10 py-2 flex gap-40 items-center">
        <div className="overflow-hidden flex justify-center items-center">
          <img className="w-20" src={logo} alt="" srcset="" />
          <p className="text-xl font-bold">Urge Fragnances</p>
        </div>
        {/* <div className="logo text-4xl font-bold">Urge Fragnances</div> */}
        <div className="list">
          <ul className="text-2xl flex gap-10">
            <li
              className={`cursor-pointer relative group ${activeItem === "li-1" ? "active" : ""
                }`}
              id="li-1"
            >
              Scented Candles
              <span className="absolute bottom-[-10px] left-0 w-0 h-[5px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li
              className={`cursor-pointer relative group ${activeItem === "li-2" ? "active" : ""
                }`}
              id="li-2"
            >
              Perfumes
              <span className="absolute bottom-[-10px] left-0 w-0 h-[5px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li
              className={`cursor-pointer relative group ${activeItem === "li-3" ? "active" : ""
                }`}
              id="li-3"
            >
              Perfume Wax
              <span className="absolute bottom-[-10px] left-0 w-0 h-[5px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>

            {/* cart option */}
            <li className="absolute right-20 cursor-pointer"
              onClick={cartHandler}>
              <div className="indicator">
                <span className="indicator-item badge bg-orange-900 text-white">{products.length}</span>
                <div className="text-4xl"><CiShoppingCart />
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="indicator absolute right-0">
                <span className="indicator-item badge bg-orange-900 text-white">{products.length}</span>
                <CiShoppingCart />
              </div> */}
      </div>
      <Cart display={display} setDisplay={setDisplay} />

      <div className="p-10 absolute z-20 top-[5rem] w-0 hidden scent-div bg-white">
        <ul className="text-xl flex gap-10 items-center pl-28">
          <li className="cursor-pointer">
            link 1 of Scents
          </li>
          <li className="cursor-pointer">link 2</li>
          <li className="cursor-pointer">link 3</li>
        </ul>
      </div>
      <div className="p-10 absolute z-20 top-[5rem] w-0 hidden candle-div bg-white">
        <ul className="text-xl flex gap-10 items-center pl-28">
          <li className="cursor-pointer">
            link 1 of Candle
          </li>
          <li className="cursor-pointer">link 2</li>
          <li className="cursor-pointer">link 3</li>
        </ul>
      </div>
      <div className="p-10 absolute z-20 top-[5rem] w-0 hidden fragnance-div bg-white">
        <ul className="text-xl flex gap-10 items-center pl-28">
          <li className="cursor-pointer">
            link 1 of Fragnances
          </li>
          <li className="cursor-pointer">link 2</li>
          <li className="cursor-pointer">link 3</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
