import React from "react";
import Notes from "./Notes";
import Table from "./Table";
import Header from "./Header";
import Details from "./Details";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";

function HomePageIZ() {
	const handlePrint = () => {
		window.print();
	};

	return (
		<main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
			{/* {Header} */}
			<Header handlePrint={handlePrint} />
			{/* {End of Header} */}

			{/* {Your Details} */}
			<Details />
			{/* {End of your Details} */}

			{/* {Client Details} */}
			<ClientDetails />
			{/* {End of Client Details} */}

			{/* {Dates} */}
			<Dates />
			{/* {End of Dates} */}

			{/* {Table} */}
			<Table />
			{/* {End of Table} */}

			{/* {Notes} */}
			<Notes />
			{/* {End of Notes} */}
		</main>
	);
}

export default HomePageIZ;
