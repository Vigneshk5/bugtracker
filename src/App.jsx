/** @format */

import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1 className="text-3xl font-bold underline bg-slate-400">
        Hello world!
      </h1>
      <Footer />
    </div>
  );
}

export default App;
