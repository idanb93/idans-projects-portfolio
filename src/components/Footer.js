import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Footer() {

    return (
        <footer>
            <div><p style={{ color: 'black' }}>With Great Power Comes Great Responsibility</p></div>
            <div id='icons-container'>
                <div className="icon-container">
                    <a href="https://github.com/idanb93">
                        <FaGithub className="icon" />
                    </a>
                </div>
                <div className="icon-container">
                    <a href="https://www.linkedin.com/in/idan-bardugo/">
                        <FaLinkedinIn className="icon" />
                    </a>
                </div>
                <div className="icon-container">
                    <a href="mailto:idanbar93@gmail.com?subject=SendMail&body=Description">
                        <FaRegEnvelope className="icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;