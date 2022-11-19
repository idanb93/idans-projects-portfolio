import Projects from "./Projects"
import Footer from "./Footer/Footer"
import Intro from "./Intro"
import ProjectsContainer from "./Projects/ProjectsContainer"
import { ProjectsTitle } from "./ProjectsTitle"

const MainPage = () => {
  return (
    <>
      <Intro />
      <Projects />
      <ProjectsTitle />
      <ProjectsContainer />
      <Footer />
    </>
  )
}

export default MainPage
