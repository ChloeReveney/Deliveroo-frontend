import { FaStar } from "react-icons/fa";
import { useState } from "react";

const Meal = ({ title, description, price, popular, picture }) => {
  const [cart, onToCart] = useState([]);
  return (
    <article
      onClick={() => {
        const copy = [...cart];
        copy.push(title, price);
        onToCart(copy);
        console.log(copy);
      }}
    >
      <div>
        <h3>{title}</h3>
        <p>{description && description.slice(0, 65) + "..."}</p>
        <div className="price-and-pop">
          <p className="price">{price} €</p>
          {popular && (
            <p className="popular">
              <FaStar /> Populaire
            </p>
          )}
        </div>
      </div>
      {picture && <img src={picture} alt="image du plat" />}
    </article>
  );
};

export default Meal;
