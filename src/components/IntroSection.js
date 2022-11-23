import AboutMe from "./AboutMe"
import CardsContainer from "./Cards/CardsContainer"
import { useEffect, useState } from "react"

const IntroSection = () => {
  const [isAtPageTop, setIsAtPageTop] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsAtPageTop(window.scrollY === 0)
    })
  }, [])

  return (
    <div id="intro">
      <div id="intro-picture-container">
        <img
          id="intro-picture"
          src={require("../img/north-sydney.jpg")}
          alt="idan"
          style={{
            filter: isAtPageTop ? "brightness(100%)" : "brightness(50%)",
            transition: "filter 1s",
          }}
        />
        <div style={{ position: "absolute", top: "43vh", left: "5vw" }}>
          <AboutMe />
        </div>
        <CardsContainer />
      </div>
    </div>
  )
}

export default IntroSection
