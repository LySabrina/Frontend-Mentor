import { useContext } from "react";
import { CartContext } from "src/context/CartProvider.jsx";

export default function CartItem({
  name,
  price,
  amount,
  thumbnail,
  isConfirm,
}) {
  const { removeItem } = useContext(CartContext);

  return (
    <li className="cart__item">
      {isConfirm && <img alt={name} src={thumbnail}></img>}

      <div>
        <h1 className="cart__item-name">{name}</h1>
        <div>
          <p>
            <span className="cart__item-amount">{amount}x</span>
            <span className="cart__item-price">
              @${price}
              {!isConfirm && (
                <span className="cart__item-price--total">${price}</span>
              )}
            </span>
          </p>
        </div>
      </div>
      <div>
        {isConfirm ? (
          <span className="cart__item-price--total">${price}</span>
        ) : (
          <button
            className="cart__item-btn"
            onClick={() => {
              removeItem({
                name: name,
                price: price,
                amount: amount,
                thumbnail: thumbnail,
              });
            }}
          >
            x
          </button>
        )}
      </div>
    </li>
  );
}
