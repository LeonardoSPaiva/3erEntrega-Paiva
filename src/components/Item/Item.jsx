import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className="card m-4 text-center" style={{ width: "18rem", border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
            <img
                src={img}
                className="card-img-top"
                alt={name}
                style={{ width: "80%", maxHeight: "200px", objectFit: "cover", margin: "auto", marginTop: "10px", transition: "transform 0.3s" }}
            />
            <div className="card-body d-flex flex-column">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Precio: ${price}</p>
                <div className="mt-auto">
                    <Link to={`/item/${id}`} className="btn btn-primary">Detalle</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;