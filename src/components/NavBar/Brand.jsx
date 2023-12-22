
import brandImage from '../../assets/Brand/brand.png';
import { Link } from 'react-router-dom';
const Brand = () => {

    return (
    <div className="d-flex align-items-center text-light" >
    <Link className="navbar-brand" to="/">
        <img src={brandImage} alt="Bootstrap" width="50" height="50"></img>
    </Link >
    <Link  className= "text-light" to="/"><h1>Delta Gamers</h1></Link >
    </div>
    )
}
export default Brand;