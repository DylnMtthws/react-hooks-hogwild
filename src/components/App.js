import React from "react";
import Nav from "./Nav";
import DisplayContainer from './DisplayContainer'
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<DisplayContainer/>
		</div>
	);
}

export default App;
