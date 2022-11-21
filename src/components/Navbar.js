import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { navbarIcons } from "../constants/icons"

function Navbar() {
  const location = useLocation()
  const openRoutes = ["/"]
  const isMainPage = openRoutes.includes(location.pathname)
  const [isOnTop, setIsOnTop] = useState(true)
  const [isIconsAttached, setIsIconsAttached] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsOnTop(window.scrollY === 0)
      setIsIconsAttached(window.scrollY >= 680)
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
        <>
          <div
            className="navbar"
            style={{
              justifyContent: isIconsAttached ? "space-between" : "",
              height: "7vh",
            }}
          >
            {isIconsAttached && (
              <div style={{ marginLeft: "96px" }}>
                <ul
                  className="navbar-icons"
                  style={{ listStyle: "none", padding: "0", display: "flex" }}
                >
                  {navbarIcons.map((icon) => (
                    <li>
                      <a href={icon.url}>{icon.reactIconComponent}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="navbar-item">
              <div className="navbar-button">
                <Link className="navbar-link" to={"/contact"}>
                  <p className={isOnTop ? "navbar-text" : "scroll-navbar-text"}>
                    Contact
                  </p>
                </Link>
              </div>
              <div className="navbar-button">
                <a
                  className="navbar-link"
                  href="https://s3.amazonaws.com/www.idans-portfolio.com/Idan's+Resume.pdf"
                >
                  <p className={isOnTop ? "navbar-text" : "scroll-navbar-text"}>
                    CV
                  </p>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {!isMainPage && (
        <div className="navbar">
          <div className="navbar-item ">
            <Link className="navbar-link" to={"/"}>
              <p className={isOnTop ? "navbar-text" : "scroll-navbar-text"}>
                Main Page
              </p>
            </Link>
          </div>
          <div className="navbar-item ">
            <a
              className="navbar-link"
              href="https://s3.amazonaws.com/www.idans-portfolio.com/Idan's+Resume.pdf"
            >
              <p className={isOnTop ? "navbar-text" : "scroll-navbar-text"}>
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
