import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgLogo = "../img/logo.png";
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}>
          <img className="imgLogo" src={imgLogo} alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

        <nav className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to={"/categoria/2"}> Computadoras </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to={"/categoria/3"}> Otros </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />
        </div>
    </header>
  )
}

export default NavBar