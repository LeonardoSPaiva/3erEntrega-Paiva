import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock }) => {
    return (
        <div className="card m-4 text-center border-primary" style={{ width: "18rem",  borderRadius: "20px"  }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body d-flex flex-column ">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Precio: ${price}</p>
                <div className="mt-auto">
               
                <Link to={`/item/${id}`} className="btn btn-primary">Detalle</Link>
                </div>
            </div>
        </div>
    )
}

export default Item