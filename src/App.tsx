import React, { useState } from "react";
import "./App.css";
import HomePageIZ from "./IzServicesComponents/HomePage";

function App() {
	const [showIzServices, setShowIzServies] = useState(false);
	// const [showVehicleRegistration, setShowVehicleRegistration] = useState(false);

	const izServicesOnClick = () => {
		setShowIzServies(true);
		// setShowVehicleRegistration(false);
	};

	// const vehicleRegistrationOnClick = () => {
	// 	setShowVehicleRegistration(true);
	// 	setShowIzServies(false);
	// };

	return (
		<div>
			<h1>INVOICE</h1>
			<button type="button" onClick={izServicesOnClick}>
				IZ Services
			</button>
			{/* <button onClick={vehicleRegistrationOnClick}>Vehicle Registration</button> */}

			{showIzServices && <HomePageIZ />}
		</div>
	);
}

export default App;
