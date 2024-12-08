import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cart.context";

const Cart = ({ display, setDisplay }) => {
    const {products,totalBill} = useCart()
//   const [products, setProducts] = useState(
//     JSON.parse(localStorage.getItem("cart"))
//   );
//   useEffect(() => {
//     console.log("products", products);
//     setProducts(JSON.parse(localStorage.getItem("cart")))
//   }, [display]);
  return (
    <div
      class={`relative z-10 ${display}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div class="pointer-events-auto w-screen max-w-md">
              <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2
                      class="text-lg font-bold text-customBrown "
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div class="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setDisplay("hidden")}
                      >
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Close panel</span>
                        <svg
                          class="size-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        {products?.map((p) => (
                          <CartItem
                            productImage={p.productImage}
                            price={p.price}
                            name={p.name}
                            quantity={p.quantity}
                            size={p.size}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{totalBill}. Rs</p>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div class="mt-6">
                    <a
                      href="#"
                      class="flex items-center justify-center rounded-md border border-transparent bg-customLightBrown px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-customBrown"
                    >
                      Checkout
                    </a>
                  </div>
                  <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <button
                        type="button"
                        class="font-medium text-customBrown"
                        onClick={()=>setDisplay("hidden")}
                      
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ productImage, name, price, quantity, size }) => {
    const {removeProduct,increaseQuantity,decreaseQuantity } = useCart()
  return (
    <li class="flex py-6">
      <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={productImage}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          class="size-full object-cover"
        />
      </div>

      <div class="ml-4 flex flex-1 flex-col">
        <div>
          <div class="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{name}</a>
            </h3>
            <p class="ml-4">{price}</p>
          </div>
          <p class="mt-1 text-sm text-gray-500">{size}</p>
        </div>
        <div class="flex flex-1 items-end justify-between text-sm">
          <div className="flex gap-4">
          <p onClick={()=>decreaseQuantity(name,size) } className="cursor-pointer" > -</p>
          <p class="text-gray-500">{quantity}</p>
          <p onClick={()=>increaseQuantity(name,size) } className="cursor-pointer">+</p>


          </div>
          
          <div class="flex">
            <button
              type="button"
              class="font-medium text-customBrown"
              onClick={() => removeProduct(name,size)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Cart;
