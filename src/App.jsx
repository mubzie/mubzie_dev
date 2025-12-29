// import Header from "./components/header/header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
// import { ChevronRight } from "lucide-react";
import { SplinePointer } from "lucide-react";

// import Button from "./components/Button/Button";
import WorkCard from "./components/WorkCard/WorkCard";

function App() {
  return (
    <>
      {/* <Header /> */}
      <About />
      <WorkCard cardTitle="UI exploration" icon={SplinePointer} />
      <Project />
    </>
  );
}

export default App;
