import React, { useState } from "react";
import "./Card.css";

function Card({ array, newArray, setNewArray }) {
	const [text, setText] = useState(true);

	const remC = () => {
		setNewArray(newArray.filter((r) => r.id !== array.id));
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
