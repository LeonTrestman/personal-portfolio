import Person from "./components/Person";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="- h-dvh overflow-y-auto bg-gradient-to-br from-zinc-800 from-5% via-indigo-600 to-rose-600">
        <div className="relative z-10">
          <NavBar />
          <Person />
        </div>
      </div>
    </>
  );
}

export default App;
