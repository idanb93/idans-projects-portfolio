import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaRegEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div id="icons-container">
        <p style={{ fontSize: "2vh", fontFamily: "Inter, sans-serif" }}>
          Copyrights @ 2022 Idan Bardugo. All rights reserved.
        </p>
        {/* <a href="https://github.com/idanb93">
          <div className="icon-container">
            <FaGithub className="icon" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/idan-bardugo/">
          <div className="icon-container">
            <FaLinkedinIn className="icon" />
          </div>
        </a>
        <a href="mailto:idanbar93@gmail.com?subject=SendMail&body=Description">
          <div className="icon-container">
            <FaRegEnvelope className="icon" />
          </div>
        </a> */}
      </div>
    </footer>
  )
}

export default Footer
