import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className="btn btn-primary" style={{ width: '30px' }} onClick={decrement}>-</button>
                <div style={{ width: '40px', textAlign: 'center', margin: '10px' }}>
                    <h4>{quantity}</h4>
                </div>
                <button className="btn btn-primary" style={{ width: '30px' }} onClick={increment}>+</button>
            </div>
            <div className="AgregarCarrito" style={{ marginTop: '5px' }}>
                <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Add al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount;
