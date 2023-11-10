import React from "react";

type PaymentMethodProps = {
	paymentMethod: string;
};

function PaymentMethod({ paymentMethod }: PaymentMethodProps) {
	return (
		<div className="flex justify-end items-center mr-20 p-1">
			<ul className="p-1">
				<span className="font-bold">Payment Method: </span> {paymentMethod}
			</ul>
		</div>
	);
}

export default PaymentMethod;
