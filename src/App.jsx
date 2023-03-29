/** @format */

import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import DndFold from "./components/DndFold";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <DndFold />
      <Footer />
    </div>
  );
}

export default App;
