import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"

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
            style={{ justifyContent: isIconsAttached ? "space-between" : "" }}
          >
            {isIconsAttached && (
              <div style={{ marginLeft: "96px" }}>
                <ul
                  className="navbar-icons"
                  style={{ listStyle: "none", padding: "0", display: "flex" }}
                >
                  <li>
                    <a href="https://github.com/idanb93">
                      <FaGithub className="navbar-icon" />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/idan-bardugo/">
                      <FaLinkedinIn className="navbar-icon" />
                    </a>
                  </li>

                  <li>
                    <a href="mailto:idanbar93@gmail.com">
                      <FaRegEnvelope className="navbar-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <div className="navbar-item ">
              <Link className="navbar-link" to={"/contact"}>
                <p
                  className="navbar-text"
                  style={{ color: isOnTop ? "" : "black" }}
                >
                  Contact
                </p>
              </Link>
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
        </>
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
