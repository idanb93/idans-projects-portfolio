const Project = (props) => {
  return (
    <div>
      <img
        className="project-image"
        alt={props.projectInfos.projectName}
        src={props.projectInfos.projectGif}
      />
    </div>
    // <div className="project">
    //   <a href={props.projectInfos.demoUrl}>
    //     <img
    //       className="project-image"
    //       alt={props.projectInfos.projectName}
    //       src={props.projectInfos.projectGif}
    //     />
    //   </a>
    //   <div className="project-details">
    //     <p>
    //       <b>{props.projectInfos.projectName}</b>
    //     </p>
    //     <p>
    //       <b>Description:</b> {props.projectInfos.description}
    //     </p>
    //     <p>
    //       <b>Technologies:</b> {props.projectInfos.technologies}
    //     </p>
    //   </div>
    // </div>
  )
}

export default Project
