import React, { useState, useEffect } from "react";

type DatesProps = {
	rep: string;
};

function Dates({ rep }: DatesProps) {
	const [invoiceNumber, setInvoiceNumber] = useState(782);

	useEffect(() => {
		const storedInvoiceNumber = localStorage.getItem("invoiceNumber"); // Have to convert invoiceNumber into a string because localStorage only takes strings...

		if (storedInvoiceNumber) {
			const incrementInvoiceNumber = Number(storedInvoiceNumber) + 1;
			setInvoiceNumber(incrementInvoiceNumber);
		}
	}, []); // If an empty array ([]) is provided, the effect will only run once after the initial render.
	return (
		<article className="mt-5 flex items-end justify-end">
			<ul>
				<li className="p-1">
					<span className="font-bold">Rep: </span> {rep}
				</li>
				<li className="p-1">
					<span className="font-bold">Invoice Number: </span> {invoiceNumber}
				</li>
				<li className="p-1">
					<span className="font-bold">Date: </span>{" "}
					{new Date().toLocaleDateString()}
				</li>
			</ul>
		</article>
	);
}

export default Dates;
