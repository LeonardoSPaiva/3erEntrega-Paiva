import React from "react";
import "./CartItem.css";

const CartItem = ({ id, name, img, price, quantity, removeItem }) => {
    return (
        <div className="card mb-3 m-2 cart-item-container" style={{ maxWidth: '540px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="Product" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${price}</p>
                        <p className="card-text">Cantidad: {quantity}</p>
                        <button className="btn btn-primary" onClick={() => removeItem(id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
