import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, removeItem, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Carrito Vacio</h1>
                <div className="row">
                    <Link to="/" className="btn btn-Primary">Volver a Productos</Link>
                </div>
            </div>
        )
    }


    return (
        <div className="row justify-content-center">
            {cart.map(p => <CartItem key={p.id} {...p} removeItem={removeItem} />)}
            <h3>Total ${total}</h3>
            <div className="d-flex justify-content-center">
                <button onClick={() => clearCart()} className="btn btn-primary m-1">Vaciar Carrito</button>
                <Link to="/checkout" className="btn btn-primary m-1">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart;