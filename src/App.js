import React from "react";
import Mobile from "./Mobile";
import Ipad from "./Ipad";
import Ipadpro from "./Ipadpro";
import Laptop from "./Laptop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Mobile />
      <Ipad />
      <Ipadpro />
      <Laptop />
      <p className="test" id="desktop">
        EUROART DESKTOP
      </p>
    </div>
  );
}

export default App;
