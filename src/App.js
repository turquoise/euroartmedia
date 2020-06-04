import React from "react";
import Mobile from "./Mobile";
import Ipad from "./Ipad";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Mobile />
      <Ipad />
      <p className="test" id="ipadpro">
        EUROART IPADPRO
      </p>
      <p className="test" id="laptop">
        EUROART LAPTOP
      </p>
      <p className="test" id="desktop">
        EUROART DESKTOP
      </p>
    </div>
  );
}

export default App;
