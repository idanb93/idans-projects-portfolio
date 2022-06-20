import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <div className="navbar">
                <Link className="navbar-item " to={'/contact'}>
                    <p className="navbar-text">Contact</p>
                </Link>
                <Link className="navbar-item " to={'/cv'}>
                    <p className="navbar-text">CV</p>
                </Link>
            </div>
        </>
    )

}

export default Navbar;