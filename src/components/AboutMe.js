import { aboutMe } from "../constants/aboutme"

function AboutMe() {
  return (
    <div id="about-me">
      <div id="about-me-title">
        <h2>{aboutMe.title}</h2>
      </div>

      <div id="about-me-body">
        <p>
          I'm a <b>{aboutMe.role}</b> {aboutMe.intro}
          <br />
          {aboutMe.abstract}
          <br />
          <br />
          {/* {aboutMe.softSkills}{" "} */}
        </p>
      </div>
    </div>
  )
}

export default AboutMe
