import React, { MouseEventHandler } from "react";

type HeaderProps = {
	handlePrint: MouseEventHandler<HTMLButtonElement>;
};

function Header({ handlePrint }: HeaderProps) {
	return (
		<header className="flex items-center justify-between mb-5 xl:flex-row xl:justify-between">
			<div>
				<h2 className="font-bold uppercase tracking-wide text-4xl">INVOICE</h2>
			</div>
			<ul className="flex items-center space-x-4">
				<li>
					<button
						type="button"
						onClick={handlePrint}
						className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-white hover:text-gray-500 transition-colors duration-300"
					>
						Print
					</button>
				</li>
				<li>
					<button
						type="button"
						className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-white hover:text-gray-500 transition-colors duration-300"
					>
						Download
					</button>
				</li>
				<li>
					<button
						type="button"
						className="px-2 py-1 bg-green-500 text-white rounded hover:bg-white hover:text-gray-500 transition-colors duration-300"
					>
						Send
					</button>
				</li>
			</ul>
		</header>
	);
}

export default Header;
