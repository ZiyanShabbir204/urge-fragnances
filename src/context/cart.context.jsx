import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cart")) === null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    // console.log("products", products);
    const bill = products.reduce((acc, p) => acc + p.quantity * p.price, 0);
    setTotalBill(bill);
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  const updateCart = (productImage, price, name, size, quantity,maxQuantity) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = currentCart.findIndex(
      (product) => product.name === name && product.size === size
    );

    if (productIndex > -1) {
      // If the product exists, increase the quantity
      currentCart[productIndex].quantity += quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      currentCart.push({
        name: name,
        size,
        price,
        productImage: productImage,
        quantity: quantity,
        maxQuantity
      });
    }
    // localStorage.setItem("cart", JSON.stringify(currentCart));
    setProducts(currentCart);
  };
  const removeProduct = (name, size) => {
    const newProduct = products.filter(
      (p) => !(p.name === name && p.size === size)
    );
    setProducts(newProduct);
  };
  const increaseQuantity = (name, size) => {
    const newProduct = [...products];
    const productIndex = newProduct.findIndex(
      (product) => product.name === name && product.size === size
    );
    if (productIndex > -1 && newProduct[productIndex].quantity < newProduct[productIndex].maxQuantity ) {
      newProduct[productIndex].quantity += 1;
    }
    // console.log("newProducts", newProduct);

    setProducts(newProduct);
  };

  const decreaseQuantity = (name, size) => {
    const newProduct = [...products];
    const productIndex = newProduct.findIndex(
      (product) => product.name === name && product.size === size
    );
    if (newProduct[productIndex].quantity === 1) {
      removeProduct(name, size);
    } else {
      newProduct[productIndex].quantity -= 1;
      setProducts(newProduct);
    }
  };

  const value = {
    products,
    setProducts,
    updateCart,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    totalBill,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;

export const useCart = () => useContext(CartContext);
