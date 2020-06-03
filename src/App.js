import React from "react";
import Mobile from "./Mobile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Mobile />
      <p className="test" id="ipad">
        EUROART IPAD
      </p>
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
