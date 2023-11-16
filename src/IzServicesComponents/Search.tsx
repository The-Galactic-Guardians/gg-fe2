import React, { useContext, useState } from "react";
import axios from "axios";
import { MyContext } from "../MyContext";

function Search() {
	const {
		clientName,
		setClientName,
		companyName,
		setCompanyName,
		phoneNumber,
		setPhoneNumber,
		emailAddress,
		setEmailAddress,
		vinNumber,
		setVinNumber,
		carMake,
		setCarMake,
		carModel,
		setCarModel,
		rep,
		setRep,
		notes,
		setNotes,
		selectedServices,
		setSelectedServices,
		paymentMethod,
		setPaymentMethod,
	} = useContext(MyContext);
	const [searchInput, setSearchInput] = useState("");
	const [hasSearched, setHasSearched] = useState(false);

	const handleInvoices = (searchedClientName: string) => {
		axios
			.get(
				`http://localhost:8000/search-invoices/clientName?clientName=${searchedClientName}`,
			)
			.then((response) => {
				const { data } = response;
				console.info("this is data:", data);
				setClientName(data.clientName);
				setCompanyName(data.companyName);
				setPhoneNumber(data.phone);
				setEmailAddress(data.email);
				setVinNumber(data.vin);
				setCarMake(data.make);
				setCarModel(data.model);
				setRep(data.rep);
				setNotes(data.notes);
				setSelectedServices(data.service);
				setPaymentMethod(data.paymentMethod);
				setHasSearched(true);
			})
			.catch((error) => {
				console.error(error);
				setHasSearched(false);
			});
	};

	const handleSearch = () => {
		if (searchInput) {
			handleInvoices(searchInput);
		}
	};
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
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button
					type="button"
					className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover: bg-transparent hover:text-gray-500 transition-all duration-300"
					onClick={handleSearch}
				>
					Search
				</button>

				{/* Invoice Display Section */}
				{hasSearched && (
					<div className="invoice-display">
						<div className="invoice-display">
							<h2>
								<strong>Invoice Details</strong>
							</h2>
							<p>Client Name: {clientName}</p>
							<p>Company Name: {companyName}</p>
							<p>Phone Number: {phoneNumber}</p>
							<p>Email Address: {emailAddress}</p>
							<p>VIN Number: {vinNumber}</p>
							<p>Car Make: {carMake}</p>
							<p>Car Model: {carModel}</p>
							<p>Representative: {rep}</p>
							<p>Notes: {notes}</p>
							<div>
								<h3>Service(s):</h3>
								{selectedServices &&
									selectedServices.map((service) => (
										<p key={service.name}>
											{service.name} - ${service.price}
										</p>
									))}
							</div>
							<p>Payment Method: {paymentMethod}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Search;
