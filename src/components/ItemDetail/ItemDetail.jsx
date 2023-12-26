import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css"; // Importa el archivo de estilos CSS

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, name, price, img };
    addItem(item, quantity);
  };

  return (
    <div className="card m-2">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Categoría: {category}</p>
        <p className="card-text">Descripción: {description}</p>
        <p className="card-text">Precio: ${price}</p>
        <p className="card-text">Stock: ({stock})</p>
        <footer className="card-footer">
          {quantityAdded > 0 ? (
            <div className="row card-buttons">
              <Link to="/cart" className="btn btn-primary mb-2">
                Finalizar
              </Link>
              <Link to="/" className="btn btn-primary">
                Seguir comprando
              </Link>
            </div>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )}
        </footer>
      </div>
    </div>
  );
};

export default ItemDetail;
