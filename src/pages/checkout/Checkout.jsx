import React, { useState } from 'react';
//Todo
// local storage work

const Checkout = () => {
    const [formData, setFormData] = useState({
        email: '',
        signUpForUpdates: false,
        country: 'Pakistan',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        phoneNumber: '',
        paymentMethod: 'Cash on Delivery',
        billingAddress: 'same',
    });

    //This will come from local storage
    const cartItems = [
        {
            id: 1,
            name: 'Lavender - Large Scented Candle',
            price: 2500,
            quantity: 1,
            img: 'https://via.placeholder.com/60', // Replace with actual product image
        },
        {
            id: 2,
            name: 'Thandi Shaam - Large Scented Candle',
            price: 3500,
            quantity: 1,
            img: 'https://via.placeholder.com/60', // Replace with actual product image
        },
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form Data:', formData);
        alert('Order Completed! Check console for details.');
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const calculateItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };
    return (
        <form
            className="flex flex-col md:flex-row justify-center gap-2 px-6 py-12 "
            onSubmit={handleSubmit}
        >
            {/* Left Section */}
            <div className="w-full md:w-2/4 bg-white p-6 rounded-lg">

                {/* Contact Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact</h2>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <input
                            type="checkbox"
                            name="signUpForUpdates"
                            checked={formData.signUpForUpdates}
                            onChange={handleChange}
                            className="h-4 w-4 text-yellow-500"
                        />
                        <label htmlFor="updates" className="text-sm text-gray-600">
                            Sign up for updates
                        </label>
                    </div>
                </div>

                {/* Delivery Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Delivery</h2>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            <option value="Pakistan">Pakistan</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className='flex gap-4'>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="col-span-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="Postal Code (optional)"
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-6"
                    />
                </div>

                {/* Payment Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Payment</h2>
                    <div className="flex items-center gap-2 mb-6">
                        <input
                            type="radio"
                            id="cod"
                            name="paymentMethod"
                            value="Cash on Delivery"
                            checked={formData.paymentMethod === 'Cash on Delivery'}
                            onChange={handleChange}
                            className="h-4 w-4 text-yellow-500"
                        />
                        <label htmlFor="cod" className="text-sm text-gray-600">
                            Cash on Delivery
                        </label>
                    </div>
                </div>

                {/* Billing Address Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="radio"
                            id="sameAddress"
                            name="billingAddress"
                            value="same"
                            checked={formData.billingAddress === 'same'}
                            onChange={handleChange}
                            className="h-4 w-4 text-yellow-500"
                        />
                        <label htmlFor="sameAddress" className="text-sm text-gray-600">
                            Same as shipping address
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            id="differentAddress"
                            name="billingAddress"
                            value="different"
                            checked={formData.billingAddress === 'different'}
                            onChange={handleChange}
                            className="h-4 w-4 text-yellow-500"
                        />
                        <label htmlFor="differentAddress" className="text-sm text-gray-600">
                            Use a different billing address
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-6 w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition"
                >
                    COMPLETE ORDER
                </button>
            </div>

            {/* Right Section: Cart Summary */}
            <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg ">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li
                            key={item.id}
                            className="flex justify-between items-center mb-4 border-b pb-4"
                        >
                            {/* Product Image */}
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-16 h-16 rounded-md object-cover mr-4"
                            />
                            {/* Product Name & Price */}
                            <div className="flex-1">
                                <p className="text-sm font-medium">{item.name}</p>
                                <p className="text-gray-500 text-xs">Rs. {item.price.toLocaleString()}</p>
                            </div>
                            <div className="text-gray-700 font-medium">
                                Qty: {item.quantity}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-4">
                    <div className="flex justify-between items-center mb-2 text-gray-600">
                        <span>Subtotal - {calculateItems()} Items</span>
                        <span>Rs. {calculateTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2 text-gray-600">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>
                    <div className="flex justify-between items-center font-semibold text-lg">
                        <span>Total</span>
                        <span>PKR {calculateTotal().toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Checkout;
