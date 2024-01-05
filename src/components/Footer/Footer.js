import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="py-1">
        <ul className="nav justify-content-center border-bottom pb-1 mb-2">
          <li className="nav-item"><Link href="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
          <li className="nav-item"><Link href="/" className="nav-link px-2 text-body-secondary">Features</Link></li>
          <li className="nav-item"><Link href="/" className="nav-link px-2 text-body-secondary">Pricing</Link></li>
          <li className="nav-item"><Link href="/" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
          <li className="nav-item"><Link href="/" className="nav-link px-2 text-body-secondary">About</Link></li>
        </ul>
        <p className="text-center text-body-secondary" style={{ marginTop: "0", marginBottom: "0" }}>&copy; 2023 Delta-Gamer</p> 
        <p className="text-center text-body-secondary" style={{ marginTop: "0", marginBottom: "0" }}>Diseñado por Leonardo S. Paiva</p>
      </footer>
    </div>
  );
};

export default Footer;