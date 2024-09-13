import Bio from "./components/Bio";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="- h-dvh snap-y snap-mandatory overflow-y-auto bg-gradient-to-br from-zinc-800 from-5% via-indigo-600 to-rose-600">
        <div className="relative z-10">
          <NavBar />
          <Bio />
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
