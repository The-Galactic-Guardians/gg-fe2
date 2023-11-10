import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-4xl font-bold mb-8">INVOICE</h1>
			<Link to="/iz-services">
				<button
					type="button"
					className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
				>
					IZ Services
				</button>
			</Link>
			<Link to="/vehicle-registration">
				<button
					type="button"
					className="mt-4 p-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
				>
					Vehicle Registration
				</button>
			</Link>
		</div>
	);
}

export default Home;
