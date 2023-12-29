import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, removeItem, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="empty">
        <h1>Carrito Vacío</h1>
        <div className="row">
          <Link to="/" className="btn btn-primary">
            Volver a Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="row justify-content-center cart-container">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} removeItem={removeItem} />
      ))}
      <h3 className="cart-total">Total ${total}</h3>
      <div className="d-flex justify-content-center">
        <button onClick={() => clearCart()} className="btn btn-primary m-1">
          Vaciar Carrito
        </button>
        <Link to="/checkout" className="btn btn-primary m-1">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
