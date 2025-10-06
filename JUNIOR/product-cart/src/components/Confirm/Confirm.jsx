import { useContext } from "react";
import { CartContext } from "src/context/CartProvider.jsx";
import CartItem from "../Cart/CartItem.jsx";
import "./Confirm.scss";
import { ConfirmContext } from "src/context/ConfirmProvider.jsx";

export default function Confirm() {
  const { items } = useContext(CartContext);
  const { modal } = useContext(ConfirmContext);
  const { clearCart } = useContext(CartContext);

  return (
    <dialog className="confirm" ref={modal}>
      <section>
        <div>
          <img src="" alt="Confirmed" />
        </div>
        <h1>Order Confirmed</h1>
        <p>We hope you enjoy your food!</p>
        <div className="confirm__list">
          <ul>
            {items.map((element) => (
              <CartItem {...element} isConfirm={true} />
            ))}
          </ul>
          <p className="confirm__total">
            Order Total:
            <span>
              $
              {items.reduce(
                (currSum, item) => (currSum += item.price) * item.amount,
                0
              )}
            </span>
          </p>
        </div>
        <button
          className="confirm__btn"
          onClick={() => {
            modal.current.close();
            clearCart();
          }}
        >
          Start new Order
        </button>
      </section>
    </dialog>
  );
}
