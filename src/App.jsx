// import Header from "./components/header/header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import { ChevronRight } from "lucide-react";

import Button from "./components/Button/Button";
function App() {
  return (
    <>
      {/* <Header /> */}
      <About />
      <Button variant="primary" icon={ChevronRight}>
        View my resume
      </Button>
      <Button variant="secondary" size="small" icon={ChevronRight}>
        instantfind.me
      </Button>
      <Button variant="secondary" size="big" icon={ChevronRight}>
        instantfind.me
      </Button>
      <Project />
    </>
  );
}

export default App;
