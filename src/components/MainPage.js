import BottomSection from "./BottomSection"
import Footer from "./Footer/Footer"
import IntroSection from "./IntroSection"
import ProjectsContainer from "./Projects/ProjectsContainer"
import { ProjectsTitle } from "./ProjectsTitle"

const MainPage = () => {
  return (
    <>
      <IntroSection />
      <BottomSection />
      <ProjectsTitle />
      <ProjectsContainer />
      <Footer />
    </>
  )
}

export default MainPage
