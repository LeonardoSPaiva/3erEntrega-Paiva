import Brand from "./Brand/Brand"
import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <Brand />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav Categories">
                        <Link to={`/category/Auriculares`} className="nav-link" style={{ color: 'white', transition: 'font-size 0.2s, box-shadow 0.2s' }}>Auriculares</Link>
                        <Link to={`/category/Teclados`} className="nav-link" style={{ color: 'white', transition: 'font-size 0.2s, box-shadow 0.2s' }}>Teclados</Link>
                        <Link to={`/category/Mouses`} className="nav-link" style={{ color: 'white', transition: 'font-size 0.2s, box-shadow 0.2s' }}>Mouses</Link>
                        <Link to={`/category/Microfonos`} className="nav-link" style={{ color: 'white', transition: 'font-size 0.2s, box-shadow 0.2s' }}>Microfonos</Link>
                        <Link to={`/category/Parlantes`} className="nav-link" style={{ color: 'white', transition: 'font-size 0.2s, box-shadow 0.2s' }}>Parlantes</Link>
                    </div>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar