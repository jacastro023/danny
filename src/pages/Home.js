import React from "react";
import Model1 from "../components/3d/index"
import "../components/background/style.css";


function Home() {
  return (
    <div className="background1">
    <div>
      <Model1></Model1>
    </div>
    <Model1></Model1>
    </div>
  );
}

export default Home;
