import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"

export const aboutMeIcons = [
  {
    url: "https://github.com/idanb93",
    reactIconComponent: <FaGithub className={"about-me-icon"} />,
  },
  {
    url: "https://www.linkedin.com/in/idan-bardugo/",
    reactIconComponent: <FaLinkedinIn className="about-me-icon" />,
  },
  {
    url: "mailto:idanbar93@gmail.com",
    reactIconComponent: <FaRegEnvelope className="about-me-icon" />,
  },
]

export const navbarIcons = [
  {
    url: "https://github.com/idanb93",
    // about-me-icon | navbar-icon
    reactIconComponent: <FaGithub className={"navbar-icon"} />,
  },
  {
    url: "https://www.linkedin.com/in/idan-bardugo/",
    reactIconComponent: <FaLinkedinIn className="navbar-icon" />,
  },
  {
    url: "mailto:idanbar93@gmail.com",
    reactIconComponent: <FaRegEnvelope className="navbar-icon" />,
  },
]
