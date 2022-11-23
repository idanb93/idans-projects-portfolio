import { FaCode } from "react-icons/fa"
import { FaVideo } from "react-icons/fa"

const Project = (props) => {
  return (
    <>
      <div className="project-container">
        <img
          className={"project-image"}
          alt={props.projectInfos.projectName}
          src={props.projectInfos.projectGif}
        />

        <div className="project-details">
          <div className="content">
            <p>
              <b>{props.projectInfos.projectName}</b>
            </p>
            <p>{props.projectInfos.description}</p>

            <div id="project-technologies">
              {props.projectInfos.technologies.map((technology) => (
                <div className="project-technology">
                  <p>{technology}</p>
                </div>
              ))}
            </div>

            <div id="project-links">
              <div className="project-link">
                <a href={props.projectInfos.demoUrl}>
                  <div style={{ display: "flex", width: "3vw" }}>
                    <div>
                      <FaVideo
                        style={{
                          height: "2vh",
                          width: "2vw",
                          marginTop: "1vh",
                        }}
                      />
                    </div>
                    <div style={{ width: "1vw" }}>
                      <p style={{ width: "100%", margin: "1vh 1vw" }}>Demo</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="project-link">
                <a href={props.projectInfos.githubUrl}>
                  <div style={{ display: "flex", width: "8vw" }}>
                    <div>
                      <FaCode
                        style={{
                          height: "2vh",
                          width: "2vw",
                          marginTop: "1vh",
                        }}
                      />
                    </div>
                    <div style={{ width: "6vw" }}>
                      <p style={{ width: "100%", margin: "1.2vh -0.3vw" }}>
                        Source Code
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              {props.projectInfos.websiteUrl && (
                <div className="project-link">
                  <a href={props.projectInfos.websiteUrl}>
                    <p>Website</p>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
