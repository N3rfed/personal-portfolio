import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Projects from "./components/Projects/projects"
import Skills from "./components/Skills/skills"
import Home from "./components/Home/home";
import Contact from "./components/Contact/contact"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({children}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4, 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Section>
      <Intro/>
      </Section>
      <Section>
        <Projects/>
      </Section>
      {/* <Section>
        <Skills/>
      </Section> */}
      <Section>
        <Contact/>
      </Section>
    </div>
  );
}

export default App;
