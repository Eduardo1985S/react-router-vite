import { Link } from "react-router-dom"
import "./styles.css"
import Logo from "../../assets/logo.png"

function Header() {
    return (
        <header>
            <img src={Logo} alt="" className="logo"/>
            <div>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </div>

        </header>
    )
}
export default Header;