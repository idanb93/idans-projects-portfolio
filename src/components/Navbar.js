import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()
  const openRoutes = ["/"]
  const isMainPage = openRoutes.includes(location.pathname)
  const [isOnTop, setIsOnTop] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", (element) => {
      setIsOnTop(window.scrollY === 0)
    })
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "1",
        opacity: isOnTop ? "" : "70%",
        backgroundColor: isOnTop ? "" : "white",
        boxShadow: isOnTop ? "" : "rgb(140 152 164 / 25%) 0px 3px 6px 0px",
        transition: "background-color 1s",
      }}
    >
      {isMainPage && (
        <div className="navbar">
          <div className="navbar-item ">
            <Link className="navbar-link" to={"/contact"}>
              <p
                className="navbar-text"
                style={{ color: isOnTop ? "" : "black" }}
              >
                Contact
              </p>
            </Link>
          </div>
          <div className="navbar-item ">
            <a
              className="navbar-link"
              href="https://s3.amazonaws.com/www.idans-portfolio.com/Idan's+Resume.pdf"
            >
              <p
                className="navbar-text"
                style={{ color: isOnTop ? "" : "black" }}
              >
                CV
              </p>
            </a>
          </div>
        </div>
      )}

      {!isMainPage && (
        <div className="navbar">
          <div className="navbar-item ">
            <Link className="navbar-link" to={"/"}>
              <p
                className="navbar-text"
                style={{ color: isOnTop ? "" : "black" }}
              >
                Main Page
              </p>
            </Link>
          </div>
          <div className="navbar-item ">
            <a
              className="navbar-link"
              href="https://s3.amazonaws.com/www.idans-portfolio.com/Idan's+Resume.pdf"
            >
              <p
                className="navbar-text"
                style={{ color: isOnTop ? "" : "black" }}
              >
                CV
              </p>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
