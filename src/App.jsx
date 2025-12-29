// import Header from "./components/header/header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
// import chevronIcon from "./assets/icons/chevron-right.svg";
import { ChevronRight } from "lucide-react";

import Button from "./components/Button/Button";
function App() {
  return (
    <>
      {/* <Header /> */}
      <About />
      <Button size="default" icon={ChevronRight}>
        View my resume
      </Button>
      <Project />
    </>
  );
}

export default App;
