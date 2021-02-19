import React from "react";

import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch_multi";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <P5Wrapper sketch={sketch} />
      </header>
    </div>
  );
}

export default App;
