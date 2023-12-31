import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";
import Notes from "./Notes";
import Table from "./Table";
import Header from "./Header";
import Details from "./Details";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Total from "./Total";
import PaymentMethod from "./PaymentMethod";

function PreviewInvoice() {
	const {
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
		setSelectedServices,
		paymentMethod,
	} = useContext(MyContext);

	const navigate = useNavigate();

	const handlePrint = () => {
		window.print();
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

	const handleSaveInvoice = () => {
		const invoiceData = {
			clientName,
			companyName,
			phoneNumber,
			emailAddress,
			vinNumber,
			carMake,
			carModel,
			services: selectedServices.map((service) => service.name).join(", "),
			amount: selectedServices.map((service) => ({
				name: service.name,
				price: service.price,
			})),
			total: selectedServices.reduce(
				(total, service) => total + service.price,
				0,
			),
			paymentMethod,
			notes,
			rep,
		};

		axios
			.post("http://localhost:8000/save-invoice", invoiceData)
			.then((response) => {
				console.info("Invoice was successfully saved: ", response.data);
				navigate("/iz-services");
			})
			.catch((error) => {
				console.error("Error saving Invoice: ", error);
			});
	};

	return (
		<main className="m-5 p-5 md:max-w-4xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
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
				<div className="flex justify-between items-center mt-4">
					<button
						type="button"
						onClick={() => navigate("/iz-services")}
						className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover: bg-transparent hover:text-blue-500 transition-all duration-300"
					>
						Edit Invoice
					</button>
					<button
						type="button"
						onClick={handleSaveInvoice}
						className="bg-red-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-red-500 hover: bg-transparent hover:text-red-500 transition-all duration-300 ml-auto mr-4"
					>
						Save
					</button>
				</div>
			</div>
		</main>
	);
}

export default PreviewInvoice;
