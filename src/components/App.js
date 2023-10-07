import React, { useState } from "react";
import Nav from "./Nav";
import DisplayContainer from "./DisplayContainer";
import hogs from "../porkers_data";

function App() {
  const [hogData, setHogData] = useState(hogs);

  return (
    <div className="App">
      <Nav />
      <DisplayContainer hogData={hogData} />
    </div>
  );
}

export default App;
