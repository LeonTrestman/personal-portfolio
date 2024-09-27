import Bio from "./components/Bio";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="-z-50 h-dvh overflow-y-auto bg-gradient-to-br from-zinc-800 from-5% via-indigo-600 to-rose-600">
      <NavBar />
      <Bio />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
