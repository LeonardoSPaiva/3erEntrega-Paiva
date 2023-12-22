import React from "react";

const CartItem = ({ id, name, img, price, quantity, removeItem }) => {
    return (
        <div className="card mb-3 border-primary m-2" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
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

