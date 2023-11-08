import React from "react";

type TotalProps = {
	selectedServices: { name: string; price: number }[];
};

function Total({ selectedServices }: TotalProps) {
	const totalPrice = selectedServices.reduce(
		(total, service) => total + service.price,
		0,
	);
	return (
		<div className="flex justify-end items-center mr-20 p-1">
			<div className="text-right">
				<h2 className="text-lg font-bold">Total:</h2>
				<p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>{" "}
				{/* Format to 2 decimal places */}
			</div>
		</div>
	);
}

export default Total;
