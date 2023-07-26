import { useState } from "react";
import "./presentationCard.css";
import ShopButton from "../../UI/ShopButton/ShopButon";

const PresentationCard = ({
  name,
  onClick,
  updateCart
}) => {
  const [quantity, setQuantity] = useState(0);

  const substractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="presentation-card">
      <div className="presentation-card-content">
        <div className="name">{name}</div>
      </div>
      <div className="quantity">
        <button className="substract" onClick={substractQuantity}>
          -
        </button>
        <div className="quantity-number">{quantity}</div>
        <button className="add" onClick={addQuantity}>
          +
        </button>
      </div>
      <ShopButton onClick={() => updateCart(quantity)} />
    </div>
  );
};

export default PresentationCard;
