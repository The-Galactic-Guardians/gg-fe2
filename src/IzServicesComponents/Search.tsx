import React from "react";

function Search() {
	return (
		<div className="flex flex-col items-center justify-start min-h-screen">
			<h2 className="mt-10 text-4xl">
				{" "}
				<strong>Search Invoice</strong>
			</h2>
			<div className="mt-10">
				<input
					type="text"
					placeholder="Search Name, VIN Number, or Invoice Number"
					className="w-96 h-10 p-2 text-base border-2 border-gray-300 rounded mr-4"
				/>
				<button
					type="button"
					className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover: bg-transparent hover:text-gray-500 transition-all duration-300"
				>
					Search
				</button>
			</div>
		</div>
	);
}

export default Search;
