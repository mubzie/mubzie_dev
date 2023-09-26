import { useState } from "react";
import Header from "./components/header/header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <Project />
    </>
  );
}

export default App;
