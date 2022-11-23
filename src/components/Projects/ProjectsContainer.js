import { projects } from "../../constants/projects"
import Project from "./Project"

const ProjectsContainer = () => {
  return (
    <>
      <div id="projects-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {projects.slice(0, 3).map((project) => (
            <Project
              key={project.id}
              projectInfos={{
                demoUrl: project.demoUrl,
                githubUrl: project.githubUrl,
                projectName: project.projectName,
                projectGif: project.projectGif,
                description: project.description,
                technologies: project.technologies,
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {projects.slice(3, 6).map((project, index) => {
            if (index === 1 || index === 2) {
              return (
                <div className="project" style={{ visibility: "hidden" }}></div>
              )
            }

            return (
              <Project
                key={project.id}
                projectInfos={{
                  demoUrl: project.demoUrl,
                  githubUrl: project.githubUrl,
                  projectName: project.projectName,
                  projectGif: project.projectGif,
                  description: project.description,
                  technologies: project.technologies,
                }}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProjectsContainer
