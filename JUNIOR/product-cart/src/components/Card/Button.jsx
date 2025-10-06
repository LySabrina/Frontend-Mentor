import { useContext, useEffect, useState } from "react";

import { CartContext } from "src/context/CartProvider.jsx";
import cart_icon from "../../../assets/images/icon-add-to-cart.svg";

function Button({ name, price, setCardActive, image }) {
  const [isActive, setActive] = useState(false);
  const [amount, setAmount] = useState(0);
  const { items, addItem, updateItem } = useContext(CartContext);

  useEffect(() => {
    if (!items.find((element) => element.name == name)) {
      setActive(false);
      setCardActive(false);
      setAmount(0);
    }
  }, [items]);

  return (
    <>
      {!isActive ? (
        <button
          className="card__btn"
          onClick={() => {
            setActive((prevState) => !prevState);
            setAmount(1);
            setCardActive(true);
            addItem({
              name: name,
              price: price,
              amount: 1,
              thumbnail: image.thumbnail,
            });
          }}
        >
          <span>
            <img src={cart_icon} alt="Add to cart" />
          </span>
          Add to Cart
        </button>
      ) : (
        <div className="card__btn card__btn--red card__btn--activate">
          <button
            className="card__btn--red card__btn-text-white card__btn-circle-white"
            onClick={() => {
              updateItem(
                {
                  name: name,
                  price: price,
                  amount: amount,
                  thumbnail: image.thumbnail,
                },
                "decrement"
              );
              setAmount((prevAmount) => {
                if (prevAmount - 1 == 0) {
                  setActive(false);
                  setCardActive(false);
                  return 0;
                } else {
                  return prevAmount - 1;
                }
              });
            }}
          >
            -
          </button>
          <span className="card__btn-text-white">{amount}</span>
          <button
            className="card__btn--red card__btn-text-white card__btn-circle-white"
            onClick={() => {
              updateItem(
                {
                  name: name,
                  price: price,
                  amount: amount,
                  thumbnail: image.thumbnail,
                },
                "increment"
              );
              setAmount((prevAmount) => prevAmount + 1);
            }}
          >
            +
          </button>
        </div>
      )}
    </>
  );
}
export default Button;
