import React, { useState } from "react";
import "./Dashboard.css";
import Card from "./Card";

function DashboardCont() {
	const [newArray, setNewArray] = useState([]);

	const create = (e) => {
		e.preventDefault();
		setNewArray([...newArray, { completed: false, id: Math.random() * 1000 }]);
	};

	return (
		<div className="dashboardCont">
			<input type="text" className="nameCard" />
			<div className="cardCont">
				{newArray.map((array) => (
					<Card newArray={newArray} setNewArray={setNewArray} key={array.id} array={array} />
				))}
			</div>
			<button onClick={create} className="newCard">
				<i className="fas fa-plus"></i> New Card
			</button>
		</div>
	);
}

export default DashboardCont;
