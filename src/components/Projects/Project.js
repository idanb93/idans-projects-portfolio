import { useState, useEffect } from "react"

const Project = (props) => {
  const [isProjectHovered, setIsProjectHovered] = useState(false)

  // useEffect(() => {
  //   window.addEventListener("hover", () => {
  //     console.log("Hovered")
  //     setIsProjectHovered(true)
  //   })
  // }, [])

  const handleMouseOver = () => {
    setIsProjectHovered(true)
  }

  const handleMouseOut = () => {
    setIsProjectHovered(false)
  }

  return (
    <>
      {/* <div className="project-container" onMouseOver={handleMouseOver}>
        <img
          className="project-image"
          alt={props.projectInfos.projectName}
          src={props.projectInfos.projectGif}
        />
      </div> */}

      <div
        className="project-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {isProjectHovered && (
          <div className="project-details">
            <p>
              <b>{props.projectInfos.projectName}</b>
            </p>
            <p>
              <b>Description:</b> {props.projectInfos.description}
            </p>
            <p>
              <b>Technologies:</b> {props.projectInfos.technologies}
            </p>
          </div>
        )}

        <img
          className={
            isProjectHovered ? "project-image-hovered" : "project-image"
          }
          alt={props.projectInfos.projectName}
          src={props.projectInfos.projectGif}
        />
      </div>
    </>
    // <div className="project">
    //   <a href={props.projectInfos.demoUrl}>
    //     <img
    //       className="project-image"
    //       alt={props.projectInfos.projectName}
    //       src={props.projectInfos.projectGif}
    //     />
    //   </a>
    // <div className="project-details">
    //   <p>
    //     <b>{props.projectInfos.projectName}</b>
    //   </p>
    //   <p>
    //     <b>Description:</b> {props.projectInfos.description}
    //   </p>
    //   <p>
    //     <b>Technologies:</b> {props.projectInfos.technologies}
    //   </p>
    // </div>
    // </div>
  )
}

export default Project
