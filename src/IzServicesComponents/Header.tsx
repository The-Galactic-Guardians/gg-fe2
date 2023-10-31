import React, { MouseEventHandler } from "react";

type HeaderProps = {
	handlePrint: MouseEventHandler<HTMLButtonElement>;
};

function Header({ handlePrint }: HeaderProps) {
	return (
		<header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
			<div>
				<h2 className="font-bold uppercase tracking-wide text-4xl">INVOICE</h2>
			</div>
			<ul className="flex items-center justify-between flex-wrap">
				<li>
					<button
						type="button"
						onClick={handlePrint}
						className="button button-print"
					>
						Print
					</button>
				</li>
				<li>
					<button type="button" className="button button-download">
						Download
					</button>
				</li>
				<li>
					<button type="button" className="button button-send">
						Send
					</button>
				</li>
			</ul>
		</header>
	);
}

export default Header;
