import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, name, price, img };
    addItem(item, quantity);
  };

  return (
    <div className="card m-2 item-detail" style={{ border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
      <img src={img} className="card-img-top" alt={name} style={{ width: '60%', margin: '0.5px' }} />
      <div className="card-body" style={{ margin: '0.5px' }}>
        <h2 className="card-title">{name}</h2>
        <p className="card-text"><strong>Categoría:</strong> {category}</p>
        <p className="card-text"><strong>Descripción:</strong> {description}</p>
        <p className="card-text"><strong>Precio:</strong> ${price}</p>
        <p className="card-text"><strong>Stock:</strong> ({stock})</p>
        <footer className="card-footer">
          {quantityAdded > 0 ? (
            <div className="row card-buttons" style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Link to="/cart" className="btn btn-primary" style={{ flex: 1, marginRight: '8px' }}>
              Finalizar Compra
            </Link>
            <Link to="/" className="btn btn-primary" style={{ flex: 1 }}>
              Continuar Comprando
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
