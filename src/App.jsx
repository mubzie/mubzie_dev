import { useState } from "react";
import Header from "./components/header/header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import "./App.css";
import Background from "./components/Background/Background";

function App() {
  return (
    <>
      <Header />
      <Background />
      <About />
      <Project />
    </>
  );
}

export default App;
