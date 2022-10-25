import { projects } from "../../constants/projects"
import Project from "./Project"

const ProjectsContainer = () => {
  return (
    <>
      <div id="projects-container">
        {projects.map((project) => (
          <Project
            key={project.id}
            projectInfos={{
              demoUrl: project.demoUrl,
              projectName: project.projectName,
              projectGif: project.projectGif,
              description: project.description,
              technologies: project.technologies,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectsContainer
