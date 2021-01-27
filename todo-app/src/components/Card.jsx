import React, { useState } from "react";
import "./Card.css";

function Card({ a, add, setAdd }) {
	const [text, setText] = useState(true);

	const remC = () => {
		setAdd(add.filter((r) => r.id !== a.id));
	};

	return (
		<div
			className="card"
			onDoubleClick={() => {
				setText(!text);
			}}
		>
			<div>
				<input type="text" className="nameCardC" />

				<textarea
					className={text ? "none" : "description"}
					name="Comment"
					rows="4"
					cols="30"
				></textarea>

				<button onClick={remC} className="removeC">
					<i className="fa fa-close"></i>
				</button>
			</div>
		</div>
	);
}

export default Card;
