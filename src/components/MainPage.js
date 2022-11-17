import Projects from "./Projects"
import CardsContainer from "./Cards/CardsContainer"
import Footer from "./Footer/Footer"
import Intro from "./Intro"
import AboutMe from "./AboutMe"
import ProjectsContainer from "./Projects/ProjectsContainer"

const MainPage = () => {
  return (
    <>
      <Intro />
      <AboutMe />
      <CardsContainer />
      <Projects />
      <ProjectsContainer />
      <Footer />
    </>
  )
}

export default MainPage
