import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()
  const openRoutes = ["/"]
  const isMainPage = openRoutes.includes(location.pathname)

  return (
    <div>
      {isMainPage && (
        <div className="navbar">
          <div className="navbar-item ">
            <Link to={"/contact"}>
              <p className="navbar-text">Contact</p>
            </Link>
          </div>
          <div className="navbar-item ">
            <a href="https://s3.amazonaws.com/www.idans-portfolio.com/Idan's+Resume.pdf">
              <p className="navbar-text">CV</p>
            </a>
          </div>
        </div>
      )}

      {!isMainPage && (
        <div className="navbar">
          <div className="navbar-item ">
            <Link to={"/"}>
              <p className="navbar-text">Main Page</p>
            </Link>
          </div>
          <div className="navbar-item ">
            <a href="https://s3.amazonaws.com/www.idans-portfolio.com/Idan's+Resume.pdf">
              <p className="navbar-text">CV</p>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
