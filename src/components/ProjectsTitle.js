import { useEffect, useState } from "react"

export function ProjectsTitle() {
  const [isOnTop, setIsOnTop] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsOnTop(window.scrollY >= 700)
    })
  }, [])

  return (
    <div
      id="projects-title"
      style={{
        filter: isOnTop ? "brightness(100%)" : "brightness(50%)",
        transition: "filter 5s",
      }}
    >
      <p id="projects-title-text">Take a look at my latest projects </p>
      <p id="projects-subtitle-text">
        You are more than welcome to take a look at my latest work.
      </p>
    </div>
  )
}
