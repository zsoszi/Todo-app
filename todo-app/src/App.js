import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App(props) {
	
	const [add, setAdd] = useState([]);

	const create = (e) => {
		e.preventDefault();
		setAdd([...add, { completed: false, id: Math.random() * 1000 }]);
	};

	return (
		<div className="App">
			<h1 className="head">TODO APP</h1>
			<Dashboard add={add} setAdd={setAdd} />
			{add.map((a) => (
				<Dashboard add={add} setAdd={setAdd} key={a.id} a={a} />
			))}

			<div>
				<button onClick={create} className="newDas">
					<i className="fas fa-plus"></i>
				</button>
			</div>
		</div>
	);
}

export default App;
