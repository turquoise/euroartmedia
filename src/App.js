import React from "react";
import Mobile from "./Mobile";
import Ipad from "./Ipad";
import Ipadpro from "./Ipadpro";
import Laptop from "./Laptop";
import Desktop from "./Desktop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Mobile />
      <Ipad />
      <Ipadpro />
      <Laptop />
      <Desktop />
    </div>
  );
}

export default App;
