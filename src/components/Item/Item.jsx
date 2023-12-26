import { Link } from "react-router-dom";
import React, { useState } from "react";

const Item = ({ id, name, img, price, stock }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const cardStyle = {
    width: "18rem",
    backgroundColor: `rgba(173, 216, 230, ${hovered ? 1 : 0.8})`,
    border: "none",
    transition: "background-color 0.5s",
    transform: `scale(${hovered ? 1.05 : 1})`,
    boxShadow: hovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "0 0 0 rgba(0, 0, 0, 0)",
    transitionProperty: "transform, box-shadow",
    transitionDuration: "0.5s",
    transitionTimingFunction: "ease-out",
  };

  const imageStyle = {
    width: "80%",
    maxHeight: "200px",
    objectFit: "cover",
    margin: "auto",
    marginTop: "10px",
    transition: "transform 0.5s",
  };

  return (
    <div
      className="card m-4 text-center"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} className="card-img-top" alt={name} style={imageStyle} />
      <div className="card-body d-flex flex-column">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Precio: ${price}</p>
        <div className="mt-auto">
          <Link to={`/item/${id}`} className="btn btn-primary">
            Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
