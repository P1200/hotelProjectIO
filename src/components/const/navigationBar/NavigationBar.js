import { Link } from "react-router-dom";
import './NavigationBar.css';

export default function NavigationBar() {
  return (
    <div>
      <nav id="nav">
      <div id="logo"> logo </div>
        <ul>
            <li><p><Link className="link" style={{textDecoration: "none", color:"black"}} to="/hotel">Hotel</Link></p> </li>
            <li><p><Link className="link" style={{textDecoration: "none", color:"black"}} to="/salary">Cennik</Link></p></li>
            <li><p><Link className="link" style={{textDecoration: "none", color:"black"}} to="/restaurant">Restauracja</Link></p></li>
            <li><p><Link className="link" style={{textDecoration: "none", color:"black"}} to="/spa">Strefa Relaksu</Link></p></li>
            <li><p><Link className="link" style={{textDecoration: "none", color:"black"}} to="/attractions">Atrakcje</Link></p></li>
            <li><p><Link className="link" style={{textDecoration: "none", color:"black"}} to="/contact">Kontakt</Link></p></li>
        </ul>
      </nav>
    </div>
  );
  }
