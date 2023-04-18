import "./Navbar.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <nav>
            <NavLink to="/" className="nav-link">Search Movie</NavLink>
            <NavLink to="my-favorites" className="nav-link">Favorites</NavLink>
        </nav>
    </header>
  )
}

export default Navbar