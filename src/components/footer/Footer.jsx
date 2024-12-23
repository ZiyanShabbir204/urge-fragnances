import axios from "axios";
import React, { useState } from "react";

const Footer = () => {
  const [data, setData] = useState("");
  const handleSubscribe = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_HOSTURL}/order/subscribe`)
    } catch (error) {
      console.log(error)
    }

  }
  const handleChange = (e) => {
    setData(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
      <footer className="bg-customOrange text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" md:flex flex-col md:flex-row gap-28 ">
            {/* Newsletter Section */}
            <div className="w-full md:w-1/2">
              <h3 className=" font-bold text-2xl mb-4">
                Let's Connect
              </h3>
              <form className="flex items-center gap-1">
                <input
                  type="text"
                  placeholder="Enter your email address or phone"
                  className="w-full border border-gray-300  py-2 px-4 focus:outline-none focus:ring focus:ring-gray-200"
                  value={data}
                  onClick={handleSubscribe}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="bg-orange-900 text-white py-2 px-4 hover:bg-orange-800 w-1/2 md:w-1/2"

                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-2">
                Receive information about new product launches, sales, and other
                good stuff.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-white hover:text-customLightBrown-800"
                >
                  {/* Instagram Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="..." />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-customLightBrown-800"
                >
                  {/* Facebook Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="..." />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-2/3 flex flex-row lg:justify-center gap-5">
              <div className="w-1/3">
                <h3 className="text-lg font-medium text-white mb-4">
                  Help
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-customBrown"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-customBrown"
                    >
                      Contact Us
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      className="text-white hover:text-customBrown"
                    >
                      Shipping + Returns
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-customBrown"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      className="text-white hover:text-customBrown"
                    >
                      Accessibility
                    </a>
                  </li> */}
                </ul>
              </div>

              {/* Shop Section */}
              <div className="w-1/3">
                {/* <h3 className="text-lg font-medium text-white mb-4">
                  Shop
                </h3> */}
                <ul className="space-y-2">
                  {/* <li>
                    <a
                      href="#"
                      className="text-white hover:text-customBrown"
                    >
                      Rewards
                    </a>
                  </li> */}

                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-customBrown"
                    >w
                      Bulk Ordering
                    </a>
                  </li>

                  {/* <li>
                    <a
                      href="#"
                      className="text-white hover:text-customBrown"
                    >
                      Our Stores
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="#"
                      className="text-white hover:text-customBrown"
                    >
                      Take Our Quiz
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Help Section */}
          </div>
        </div>
      </footer>
      <div className="border h-9 py-8 bg-customOrange text-white text-center flex justify-center items-center">
        &copy; 2024 / Privacy Policy
      </div>
    </>
  );
};

export default Footer;
