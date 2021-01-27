import React, { useState } from "react";
import "./Dashboard.css";
import Card from "./Card";

function DashboardCont() {
	const [add, setAdd] = useState([]);

	const create = (e) => {
		e.preventDefault();
		setAdd([...add, { completed: false, id: Math.random() * 1000 }]);
	};

	return (
		<div className="dashboardCont">
			<input type="text" className="nameCard" />
			<div className="cardCont">
				{add.map((a) => (
					<Card add={add} setAdd={setAdd} key={a.id} a={a} />
				))}
			</div>
			<button onClick={create} className="newCard">
				<i className="fas fa-plus"></i> New Card
			</button>
		</div>
	);
}

export default DashboardCont;
