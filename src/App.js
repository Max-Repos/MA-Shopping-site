import React, { useState } from "react";
import "./App.css";
import Header from "./common/header/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Sdata from "./components/shops/Sdata";
import Cart from "./common/cart/Cart";
import Footer from "./common/footer/Footer";

const App = () => {
  const { productItems } = Data;
  const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages
                CartItem={CartItem}
                productItems={productItems}
                addToCart={addToCart}
                shopItems={shopItems}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            }
          ></Route>
          {/* <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
