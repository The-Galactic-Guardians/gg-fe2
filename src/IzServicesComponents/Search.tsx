import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";

function Search() {
	const { searchQuery, setSearchQuery } = useContext(MyContext);
	const navigate = useNavigate();
	return (
		<div className="search bar">
			<input
				type="text"
				placeholder="Search Name, VIN Number, or Invoice Number"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<button
				onClick={() => navigate("/iz-services/search")}
				type="button"
				className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover: bg-transparent hover:text-gray-500 transition-all duration-300"
			>
				Search
			</button>
		</div>
	);
}

export default Search;
