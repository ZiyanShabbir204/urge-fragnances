import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-customBeige py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" md:flex flex-col md:flex-row gap-28 ">
            {/* Newsletter Section */}
            <div className="w-full md:w-1/2">
              <h3 className=" font-bold text-customBrown text-2xl mb-4">
                Let's Connect
              </h3>
              <form className="flex items-center gap-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300  py-2 px-4 focus:outline-none focus:ring focus:ring-gray-200"
                />
                <button
                  type="submit"
                  className="bg-customLightBrown text-white py-2 px-4 hover:bg-opacity-90 w-1/2 md:w-1/2"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-sm text-customLightBrown mt-2">
                Receive information about new product launches, sales, and other
                good stuff.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-customLightBrown hover:text-customLightBrown-800"
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
                  className="text-customLightBrown hover:text-customLightBrown-800"
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
                <h3 className="text-lg font-medium text-customLightBrown mb-4">
                  Help
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-customLightBrown hover:text-customBrown"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-customLightBrown hover:text-customBrown"
                    >
                      Contact Us
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      className="text-customBrown hover:text-customBrown"
                    >
                      Shipping + Returns
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="#"
                      className="text-customBrown hover:text-customBrown"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="#"
                      className="text-customBrown hover:text-customBrown"
                    >
                      Accessibility
                    </a>
                  </li> */}
                </ul>
              </div>

              {/* Shop Section */}
              <div className="w-1/3">
                {/* <h3 className="text-lg font-medium text-customBrown mb-4">
                  Shop
                </h3> */}
                <ul className="space-y-2">
                  {/* <li>
                    <a
                      href="#"
                      className="text-customBrown hover:text-customBrown"
                    >
                      Rewards
                    </a>
                  </li> */}

                  <li>
                    <a
                      href="#"
                      className="text-customBrown hover:text-customBrown"
                    >
                      Bulk Ordering
                    </a>
                  </li>

                  {/* <li>
                    <a
                      href="#"
                      className="text-customBrown hover:text-customBrown"
                    >
                      Our Stores
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="#"
                      className="text-customBrown hover:text-customBrown"
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
      <div className="border h-9 bg-[#894A20] text-white text-center p-2 flex justify-center items-center">
        &copy; 2024 / Privacy Policy
      </div>
    </>
  );
};

export default Footer;
