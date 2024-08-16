import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Projects from "./components/Projects/projects"
import Skills from "./components/Skills/skills"
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Intro/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
