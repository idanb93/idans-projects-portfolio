import { aboutMe } from "../constants/aboutme"

function AboutMe() {
  return (
    <div id="about-me">
      <div id="about-me-title">
        <h2
          style={{
            fontSize: "5vh",
            marginTop: "0px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          IDAN BARDUGO
        </h2>
      </div>
      <div id="about-me-role">
        <p style={{ fontSize: "2vh", fontFamily: "Inter, sans-serif" }}>
          Full-Stack Developer & Software Engineer
        </p>
      </div>

      <div style={{ width: "100%", height: "10px" }}>
        <div style={{ width: "30%" }}>
          <hr id="about-me-divider" style={{ width: "100%" }}></hr>
        </div>
      </div>

      <div id="about-me-body">
        <p style={{ fontSize: "1.8vh", fontFamily: "Inter, sans-serif" }}>
          I'm {aboutMe.intro}
          <br />
          <br />
          {aboutMe.abstract}
          <br />
          <br />
          {aboutMe.qualifications}
          {/* {aboutMe.softSkills}{" "} */}
        </p>
      </div>
      <div id="about-me-icons-container">
        <ul
          className="about-me-icons"
          style={{ listStyle: "none", padding: "0", display: "flex" }}
        >
          <li>
            <a href="https://github.com/idanb93">
              <img
                className="about-me-icon"
                src={require("../img/github.png")}
                alt="Github"
                style={{
                  height: "3.8vh",
                  width: "1.8vw",
                  margin: "0.2vh 0.3vw",
                }}
              />{" "}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/idan-bardugo/">
              <img
                className="about-me-icon"
                src={require("../img/linkedin.png")}
                alt="Linkedin"
                style={{
                  height: "4vh",
                  width: "2vw",
                  margin: "0.0vh 0.5vw",
                }}
              />{" "}
            </a>
          </li>
          <li>
            <a href="mailto:idanbar93@gmail.com">
              <img
                className="about-me-icon"
                src={require("../img/email.png")}
                alt="Email"
                style={{
                  height: "7vh",
                  width: "3vw",
                  margin: "-0.8vh -0.1vw",
                }}
              />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
