import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
