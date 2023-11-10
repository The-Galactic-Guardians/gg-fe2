import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PreviewInvoice from "./IzServicesComponents/PreviewInvoice";
import EditInvoice from "./IzServicesComponents/EditInvoice";
import { MyContext } from "./MyContext";
import Search from "./IzServicesComponents/Search";

function App() {
	const [clientName, setClientName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [vinNumber, setVinNumber] = useState("");
	const [carMake, setCarMake] = useState("");
	const [carModel, setCarModel] = useState("");
	const [rep, setRep] = useState("");
	const [notes, setNotes] = useState("");
	const [selectedServices, setSelectedServices] = useState([
		{ name: "", price: 0 },
	]);
	const [paymentMethod, setPaymentMethod] = useState("");
	const [searchQuery, setSearchQuery] = useState("");

	const contextValue = useMemo(
		() => ({
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
			searchQuery,
			setSearchQuery,
		}),
		[
			clientName,
			companyName,
			phoneNumber,
			emailAddress,
			vinNumber,
			carMake,
			carModel,
			rep,
			notes,
			selectedServices,
			paymentMethod,
			searchQuery,
		],
	);

	return (
		<MyContext.Provider value={contextValue}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/iz-services/preview-invoice"
					element={<PreviewInvoice />}
				/>
				<Route path="/iz-services" element={<EditInvoice />} />
				<Route path="/iz-services/search" element={<Search />} />
			</Routes>
		</MyContext.Provider>
	);
}

export default App;
