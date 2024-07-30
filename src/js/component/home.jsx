import React from "react";
import Board from "./board";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Tic Tac Toe</h1>
			
			<Board />
		</div>
	);
};

export default Home;
