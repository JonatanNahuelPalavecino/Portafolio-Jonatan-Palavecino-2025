import AboutMe from "./components/AboutMe/AboutMe"
import Contact from "./components/Contact/Contact"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import "./App.scss"


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
