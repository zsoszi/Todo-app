import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App(props) {
	
	const [newArray, setNewArray] = useState([]);

	const create = (e) => {
		e.preventDefault();
		setNewArray([...newArray, { completed: false, id: Math.random() * 1000 }]);
	};

	return (
		<div className="App">
			<h1 className="head">TODO APP</h1>
			<Dashboard newArray={newArray} setNewArray={setNewArray} />
			{newArray.map((array) => (
				<Dashboard newArray={newArray} setNewArray={setNewArray} key={array.id} array={array} />
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
