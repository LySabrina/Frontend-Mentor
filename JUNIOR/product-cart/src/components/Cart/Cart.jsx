import "src/components/Cart/Cart.scss";
import carbon_neutral from "../../../assets/images/icon-carbon-neutral.svg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "src/context/CartProvider.jsx";
import CartItem from "./CartItem.jsx";
import cake_icon from "../../../assets/images/illustration-empty-cart.svg";
import { ConfirmContext } from "src/context/ConfirmProvider.jsx";

function Cart() {
  const { items } = useContext(CartContext);
  const { modal } = useContext(ConfirmContext);

  return (
    <div className="cart">
      <h1 className="cart__header">Your Cart ({items.length})</h1>
      {items.length == 0 ? (
        <section className="cart__empty">
          <img src={cake_icon} alt="No cart items" />
          <p>Your added items will appear here</p>
        </section>
      ) : (
        <>
          <ul className="cart__items">
            {items.map((item) => (
              <CartItem {...item} />
            ))}
          </ul>

          <div className="cart__total">
            <span>Order Total</span>
            <span>
              $
              {items.reduce(
                (accumulator, item) => (accumulator + item.price) * item.amount,
                0
              )}
            </span>
          </div>

          <p className="cart__info">
            <img src={carbon_neutral} alt="Carbon Neutral" />
            This is a <span>carbon-neutral</span> delivery
          </p>
          <button
            className="cart__btn"
            onClick={() => {
              modal.current.showModal();
            }}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
export default Cart;
