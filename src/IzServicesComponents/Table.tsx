import React from "react";

type Service = {
	name: string;
	price: number;
};

type TableProps = {
	selectedServices: Service[];
	handlePriceChange: (
		index: number,
		event: React.ChangeEvent<HTMLInputElement>,
	) => void;
};

function Table({ selectedServices, handlePriceChange }: TableProps) {
	return (
		<table width="100%">
			<thead>
				<tr className="bg-gray-100 p-1">
					<td>Description</td>
					<td>Amount</td>
				</tr>
			</thead>

			<tbody>
				{selectedServices.map((service, index) => (
					<tr key={service.name}>
						<td>{service.name}</td>
						<td>
							<input
								// {to ensure only numbers are entered}
								type="number"
								value={service.price}
								onChange={(e) => handlePriceChange(index, e)}
								className="price-input"
							/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
