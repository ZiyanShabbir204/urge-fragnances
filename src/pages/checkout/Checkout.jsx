import React, { useState, useEffect } from "react";
import { useCart } from "../../context/cart.context";
import axios from "axios";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const countries = [
  { name: "Pakistan", phoneCode: "+92", standardShipping: 5, expressShipping: 15 },
];

const Checkout = () => {
  const { products, totalBill, orderCompleted } = useCart();
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [disabled, setDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({});

  const navigate = useNavigate();

  // Update phone code whenever the country changes
  useEffect(() => {
    setValue("phoneCode", selectedCountry.phoneCode);
  }, [selectedCountry, setValue]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (data) => {
    const {
      email,
      country,
      firstName,
      lastName,
      address,
      city,
      postalCode,
      contact,
      paymentMethod,
    } = data;

    // Post data
    try {
      // Disable form while processing submission
      setDisabled(true);
      const phoneNumber = selectedCountry.phoneCode + " " + contact;
      const newOrder = {
        email,
        country,
        firstName,
        lastName,
        address,
        city,
        postalCode,
        phoneNumber,
        paymentMethod,
        products: products,
        totalBill,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_HOSTURL}/order`,
        newOrder
      );
      if (response.status === 200) {
        orderCompleted();
        toast.success("Ordered successfully");
        // console.log("Response data success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      // console.error("Response data:", error);
    } finally {
      setDisabled(false);
      reset();
    }
  };

  const calculateItems = () => {
    return products.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

    const errorClass = "text-red-500 mt-1 text-sm";
    const asteriskClass = "text-red-500 font-bold text-lg absolute top-2 right-4";
    const radioButtonClass = "mr-2 w-4 h-4";
    const checkoutInputClass =
      "w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400";
  return (
    <form
      className="flex flex-col-reverse md:flex-row justify-center gap-2 px-6 py-6 md:py-12 "
      onSubmit={handleSubmit(onSubmit)}
      disabled={disabled}
    >
      {/* Left Section */}
      <div className="w-full md:w-2/4 bg-white py-6 md:px-6 rounded-lg">
        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <div className="mb-4 relative">
            <input
              type="email"
              placeholder="johndoe@example.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter email address",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
              className={`${checkoutInputClass} ${
                errors.email
                  ? "border-red-500 focus:ring-0"
                  : "border-outerSpace"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.email.message}
              </p>
            )}
            <span className={asteriskClass}>*</span>
          </div>
        </div>

        {/* Delivery Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Delivery</h2>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <select
              {...register("country", { required: true })}
              value={selectedCountry.name}
              onChange={(e) =>
                setSelectedCountry(
                  countries.find((c) => c.name === e.target.value)
                )
              }
              className={`${checkoutInputClass} ${
                errors.country
                  ? "border-red-500 focus:ring-0"
                  : "border-outerSpace"
              }`}
            >
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">Please select your country</p>
            )}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                  className={`${checkoutInputClass} ${
                    errors.firstName
                      ? "border-red-500 focus:ring-0"
                      : "border-outerSpace"
                  }`}
                />
                <span className={asteriskClass}>*</span>
              </div>
              <input
                type="text"
                placeholder="Last Name (Optional)"
                {...register("lastName")}
                className={checkoutInputClass}
              />
            </div>
            {errors.firstName && (
              <p className={errorClass}>Please enter your first name</p>
            )}
          </div>
          <div className="flex flex-col relative gap-4 mb-4">
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
              className={`${checkoutInputClass} ${
                errors.address
                  ? "border-red-500 focus:ring-0"
                  : "border-outerSpace"
              }`}
            />
            {errors.address && (
              <p className={errorClass}>Please enter your address</p>
            )}
            <span className={asteriskClass}>*</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="City"
                {...register("city", { required: true })}
                className={`${checkoutInputClass} ${
                  errors.city
                    ? "border-red-500 focus:ring-0"
                    : "border-outerSpace"
                }`}
              />
              <span className={asteriskClass}>*</span>
            </div>

            <input
              type="text"
              placeholder="Postal Code (Optional)"
              {...register("postalCode")}
              className={checkoutInputClass}
            />
          </div>
          {errors.city && <p className={errorClass}>Please enter your city</p>}

          <div className="flex items-center relative mt-2">
            <span className="border border-gray-300 p-3 border-r-0 bg-gray-300 rounded-l">
              {selectedCountry.phoneCode}
            </span>
            <input
              type="text"
              {...register("contact", {
                required: {
                  value: true,
                  message: "Please enter your phone number",
                },
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please enter a 10-digit phone number",
                },
              })}
              placeholder="3201234564"
              className={`${checkoutInputClass} ${
                errors.contact
                  ? "border-red-500 focus:ring-0"
                  : "border-outerSpace rounded-l-none"
              }`}
            />
            <span className={asteriskClass}>*</span>
          </div>
          {errors.contact && (
            <p className="text-red-500 text-sm">{errors.contact.message}</p>
          )}
        </div>

        {/* Payment Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Payment</h2>
          <div className="flex items-center gap-2 mb-6">
            <input
              type="radio"
              id="cod"
              defaultChecked
              {...register("paymentMethod", { required: true })}
              value="Cash on Delivery"
              className={radioButtonClass}
            />
            <label htmlFor="cod" className="text-base text-gray-600">
              Cash on Delivery
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full  text-white py-3 rounded-lg bg-orange-900  hover:bg-customBrown transition"
        >
          COMPLETE ORDER
        </button>
      </div>

      {/* Right Section: Cart Summary */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg md:mt-6">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div
          onClick={toggleDropdown}
          className="cursor-pointer text-base font-medium flex justify-between items-center mb-4"
        >
          <span>Product Details</span>
          <span className="text-2xl">
            {isProductsDropdownOpen ? (
              <IoMdArrowDropup />
            ) : (
              <IoMdArrowDropdown />
            )}
          </span>
        </div>

        {/* Dropdown List */}
        {isProductsDropdownOpen && (
          <ul>
            {products.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4 border-b pb-4"
              >
                {/* Product Image */}
                <img
                  src={item.productImage}
                  alt={item.name}
                  className="w-16 h-16 rounded-md object-cover mr-4"
                />
                {/* Product Name & Price */}
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {item.name} - {item.size}
                  </p>
                  <p className="text-gray-500 text-xs">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="text-gray-700 font-medium">
                  Qty: {item.quantity}
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <div className="flex justify-between items-center mb-2 text-gray-600">
            <span>Subtotal - {calculateItems()} Items</span>
            <span>Rs. {totalBill.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-2 text-gray-600">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          <div className="flex justify-between items-center font-semibold text-lg">
            <span>Total</span>
            <span>PKR {totalBill.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
