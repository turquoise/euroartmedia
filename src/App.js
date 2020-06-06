import React from "react";
import Mobile from "./Mobile";
import Ipad from "./Ipad";
import Ipadpro from "./Ipadpro";
import Laptop from "./Laptop";
import Desktop from "./Desktop";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet
        title="EuroArt"
        meta={[{ name: "EuroArt Media Ltd", content: "Documentaries" }]}
        link={[
          { rel: "icon", type: "image/png", href: "./images/tinylogo.png" },
        ]}
      />
      <Mobile />
      <Ipad />
      <Ipadpro />
      <Laptop />
      <Desktop />
    </div>
  );
}

export default App;
