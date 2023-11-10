import React from "react";

type ClientDetailsProps = {
	clientName: string;
	companyName: string;
	phoneNumber: string;
	emailAddress: string;
	vinNumber: string;
	carMake: string;
	carModel: string;
};

function ClientDetails({
	clientName,
	companyName,
	phoneNumber,
	emailAddress,
	vinNumber,
	carMake,
	carModel,
}: ClientDetailsProps) {
	return (
		<section className="my-5">
			<h2 className="text-2xl uppercase font-semibold uppercase">
				{clientName}
			</h2>
			<p>{companyName}</p>
			<p>{phoneNumber}</p>
			<p>{emailAddress}</p>
			<p>{vinNumber}</p>
			<p>{carMake}</p>
			<p>{carModel}</p>
		</section>
	);
}

export default ClientDetails;
