import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// import * as axios from "axios";
import App from "./App";

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios", () => ({
	get: async () => new Promise(() => {}),
	post: async () => new Promise(() => {}),
}));

test("renders learn react link", () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
	);
	const linkElement = screen.getByText(/INVOICE/i);
	expect(linkElement).toBeInTheDocument();
});
