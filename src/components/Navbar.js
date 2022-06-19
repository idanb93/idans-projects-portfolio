import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className="navbar">
            <Link className="navbar-item " to={'/contact'}>Contact</Link>
            <Link className="navbar-item " to={'/cv'}>CV</Link>
        </div>
    )

}

export default Navbar;