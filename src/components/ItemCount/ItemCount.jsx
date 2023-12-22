
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="container">
            <div className="Buttons">
                <div>
                    <button className="btn btn-primary" onClick={decrement}>-</button>
                </div>
                <div>
                    <h4>{quantity}</h4>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={increment}>+</button>
                </div>
            </div>
            <div className="AgregarCarrito">
                <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Add al carrito
                </button>
            </div>

        </div>

    )
}


export default ItemCount