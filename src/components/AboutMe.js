import { aboutMe } from "../constants/aboutme"
import { aboutMeIcons } from "../constants/icons"

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
          {aboutMeIcons.map((icon) => (
            <li>
              <a href={icon.url}>{icon.reactIconComponent}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
