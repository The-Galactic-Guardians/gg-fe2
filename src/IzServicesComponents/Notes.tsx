import React from "react";

type NotesProps = {
	notes: string;
};

function Notes({ notes }: NotesProps) {
	return (
		<section className=" mt-10 mb-5">
			{/* {Text Area} */}
			<div className="flex items-baseline">
				<p className="p-1 text-lg font-bold mr-2">Notes:</p>
				<p className="text-xs text-gray-500">(Optional)</p>
			</div>
			<p className="p-1 text-sm break-words">{notes}</p>
		</section>
	);
}

export default Notes;
