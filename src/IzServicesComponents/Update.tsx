import React from "react";
// import axios from "axios";
// import { MyContext } from "../MyContext";

function Update() {
	return (
		<div className="flex flex-col items-center justify-start min-h-screen">
			<h2 className="mt-10 text-4xl">
				{" "}
				<strong>Update Invoice</strong>
			</h2>
			<div className="mt-10">
				<input
					type="text"
					placeholder="Update by Invoice Number"
					className="w-96 h-10 p-2 text-base border-2 border-gray-300 rounded mr-4"
				/>
				<button
					type="button"
					className="bg-green-500 text-white font-bold py-1 px-4 rounded shadow border-2 border-green-500 hover: bg-transparent hover:text-green-500 transition-all duration-300"
				>
					Update
				</button>
			</div>
		</div>
	);
}

export default Update;
