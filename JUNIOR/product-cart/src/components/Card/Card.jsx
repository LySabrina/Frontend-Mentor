import { useState } from "react";
import "./Card.scss";
import Button from "src/components/Card/Button.jsx";

function Card({ image, name, category, price }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`card`}>
      <div
        className={`card__img-container ${
          isActive && "card__img-container--activate"
        }`}
      >
        <img
          src={image.thumbnail}
          alt={name}
          className="card__img"
          srcSet={`${image.thumbnail} 100w, ${image.mobile} 654w, ${image.tablet} 428w, ${image.desktop} 500w`}
        />
        <Button
          name={name}
          price={price}
          image={image}
          setCardActive={setIsActive}
        ></Button>
      </div>

      <span>{category}</span>
      <h1 className="card__name">{name}</h1>
      <h2 className="card__price">${price}</h2>
    </div>
  );
}
export default Card;
