import React, { useState } from "react";
import Notes from "./Notes";
import Table from "./Table";
import Header from "./Header";
import Details from "./Details";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Total from "./Total";
import PaymentMethod from "./PaymentMethod";

const services = [
	{ name: "Address Change", price: 10.0 },
	{ name: "Citation", price: 10.0 },
	{ name: "DMV Fee(s)", price: 0.0 },
	{ name: "Double Transfer", price: 85.0 },
	{ name: "Duplicate Plates", price: 40.0 },
	{ name: "Duplicate Registration", price: 40.0 },
	{ name: "Duplicate Stickers", price: 40.0 },
	{ name: "Lien Sale 30 Days", price: 70.0 },
	{ name: "Lien Sale Transfer", price: 90.0 },
	{ name: "Non Operational", price: 40.0 },
	{ name: "Non Repairable", price: 250.0 },
	{ name: "Out of State Transfer", price: 100.0 },
	{ name: "Partial Year", price: 40.0 },
	{ name: "Print Out", price: 10.0 },
	{ name: "Processing Fee", price: 17.0 },
	{ name: "Renewal", price: 40.0 },
	{ name: "Road Tax", price: 250.0 },
	{ name: "Salvage Vehicle Transfer", price: 100.0 },
	{ name: "Transfer", price: 75.0 },
	{ name: "Transfer W/ ROS", price: 250.0 },
	{ name: "Transfer W/O Title", price: 85.0 },
	{ name: "Transfer of Legal Owner", price: 75.0 },
	{ name: "Triple Transfer", price: 100.0 },
	{ name: "VIN Verification", price: 50.0 },
	{ name: "Vehicle W/ No Record", price: 250.0 },
	{ name: "YOM Plate", price: 250.0 },
];

function HomePageIZ() {
	const [showInvoice, setShowInvoice] = useState(false);
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

	const handlePrint = () => {
		window.print();
	};

	const handleServiceChange = (
		index: number,
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const newSelectedServices = [...selectedServices];
		const service = services.find((s) => s.name === event.target.value);
		if (service) {
			newSelectedServices[index] = service;
		} else {
			newSelectedServices[index] = { name: "", price: 0 }; // Fallback to a default service object
		}
		setSelectedServices(newSelectedServices);
	};

	const handleAddService = () => {
		setSelectedServices([...selectedServices, { name: "", price: 0 }]);
	};

	const handleRemoveService = (index: number) => {
		const newSelectedServices = [...selectedServices];
		newSelectedServices.splice(index, 1);
		setSelectedServices(newSelectedServices);
	};

	const handlePriceChange = (
		index: number,
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const newSelectedServices = selectedServices.slice();
		const newPrice = Number(event.target.value);
		newSelectedServices[index].price = newPrice;
		setSelectedServices(newSelectedServices);
	};

	return (
		<main className="m-5 p-5 md:max-w-4xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
			{showInvoice ? (
				<div className="bg-gray-50 p-6 rounded shadow-lg">
					{/* {Header} */}
					<Header handlePrint={handlePrint} />
					{/* {End of Header} */}

					{/* {Your Details} */}
					<Details />
					{/* {End of your Details} */}

					{/* {Client Details} */}
					<ClientDetails
						clientName={clientName}
						companyName={companyName}
						phoneNumber={phoneNumber}
						emailAddress={emailAddress}
						vinNumber={vinNumber}
						carMake={carMake}
						carModel={carModel}
					/>
					{/* {End of Client Details} */}

					{/* {Dates} */}
					<Dates rep={rep} />
					{/* {End of Dates} */}

					{/* {Table} */}
					<Table
						selectedServices={selectedServices}
						handlePriceChange={handlePriceChange}
					/>
					{/* {End of Table} */}

					{/* {Display Total} */}
					<Total selectedServices={selectedServices} />
					{/* {End of Display Total} */}

					{/* {Display Payment Method} */}
					<PaymentMethod paymentMethod={paymentMethod} />
					{/* {End of Display Payment Method} */}

					{/* {Notes} */}
					<Notes notes={notes} />
					{/* {End of Notes} */}
					<button
						type="button"
						onClick={() => setShowInvoice(false)}
						className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover: bg-transparent hover:text-blue-500 transition-all duration-300"
					>
						Edit Information
					</button>
				</div>
			) : (
				// { Client Name, Company Name, Phone Number, Email Adress, Vin Number, Rep, Invoice Number, Notes}
				<div className="flex flex-col justify-center">
					<label htmlFor="rep">
						Rep:
						<input
							type="text"
							name="rep"
							id="rep"
							placeholder="Name of Rep..."
							value={rep}
							onChange={(e) => setRep(e.target.value)}
						/>
					</label>

					<label htmlFor="setClientName">
						Client Name:
						<input
							type="text"
							name="clientName"
							id="clientName"
							placeholder="Name..."
							value={clientName}
							onChange={(e) => setClientName(e.target.value)}
						/>
					</label>

					<label htmlFor="companyName">
						Company Name:
						<input
							type="text"
							name="companyName"
							id="companyName"
							placeholder="Company Name..."
							value={companyName}
							onChange={(e) => setCompanyName(e.target.value)}
						/>
					</label>

					<label htmlFor="phoneNumber">
						Phone Number:
						<input
							type="text"
							name="phoneNumber"
							id="phoneNumber"
							placeholder="Phone Number..."
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</label>

					<label htmlFor="emailAddress">
						Email Address:
						<input
							type="text"
							name="emailAddress"
							id="emailAddress"
							placeholder="Email Address..."
							value={emailAddress}
							onChange={(e) => setEmailAddress(e.target.value)}
						/>
					</label>

					<label htmlFor="vinNumber">
						Vin Number:
						<input
							type="text"
							name="vinNumber"
							id="vinNumber"
							placeholder="Vin Number..."
							value={vinNumber}
							onChange={(e) => setVinNumber(e.target.value)}
						/>
					</label>

					<label htmlFor="carMake">
						Make:
						<input
							type="text"
							name="carMake"
							id="carMake"
							placeholder="Car Make..."
							value={carMake}
							onChange={(e) => setCarMake(e.target.value)}
						/>
					</label>

					<label htmlFor="carModel">
						Model:
						<input
							type="text"
							name="carModel"
							id="carModel"
							placeholder="Car Model..."
							value={carModel}
							onChange={(e) => setCarModel(e.target.value)}
						/>
					</label>

					<label htmlFor="Service(s)">
						<span className="block mr-4">Service(s)</span>
						{selectedServices.map((service, index) => (
							<div key={service.name}>
								<select
									value={service.name}
									onChange={(e) => handleServiceChange(index, e)}
									className="mr-2"
								>
									<option value="">Select a service...</option>
									{services.map((s) => (
										<option key={s.name} value={s.name}>
											{s.name}
										</option>
									))}
								</select>
								{selectedServices.length > 1 && (
									<button
										onClick={() => handleRemoveService(index)}
										type="button"
										className="bg-red-300 rounded shadow border-2 border-red-300 hover: bg-transparent hover:text-red-300 transition-all duration-300"
									>
										Remove
									</button>
								)}
							</div>
						))}
						<button
							onClick={handleAddService}
							type="button"
							className="bg-green-300 rounded shadow border-2 border-green-300 hover: bg-transparent hover:text-green-300 transition-all duration-300"
						>
							Add Service
						</button>
					</label>

					<label htmlFor="paymentMethod">
						Payment Method:
						<input
							type="text"
							name="paymentMethod"
							id="paymentMethod"
							placeholder="Payment Method..."
							value={paymentMethod}
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
					</label>

					<label htmlFor="notes">
						<span className="block mr-4">Additional Notes:</span>
						<textarea
							name="notes"
							id="notes"
							cols={30}
							rows={10}
							placeholder="Additional notes to client..."
							value={notes}
							onChange={(e) => setNotes(e.target.value)}
							className="w-full p-2 border rounded"
						/>
					</label>

					<button
						onClick={() => setShowInvoice(true)}
						type="button"
						className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover: bg-transparent hover:text-blue-500 transition-all duration-300"
					>
						Preview Invoice
					</button>
				</div>
			)}
		</main>
	);
}

export default HomePageIZ;
