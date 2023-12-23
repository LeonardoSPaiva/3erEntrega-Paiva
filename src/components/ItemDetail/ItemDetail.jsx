import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {id, name, price, img }

        addItem(item, quantity)
    }

    return (

        <div className="card m-2 border-primary" style={{ width: "18rem", borderRadius: "5px" }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Categoría: {category}</p>
                <p className="card-text">Descripción: {description}</p>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">Stock: ({stock})</p>
                <footer className="">
                    {
                        quantityAdded > 0 ? (
                            <div className="row">
                                <Link to="/cart" className="btn btn-primary mb-2">Finalizar</Link>
                                <Link to="/" className="btn btn-primary">Seguir comprando</Link>
                            </div>) : ( <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                
                </footer>
            </div>
        </div>

    )
}

export default ItemDetail