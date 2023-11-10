/* eslint-disable */
import { createContext } from "react";

export const MyContext = createContext({
	clientName: "",
	companyName: "",
	phoneNumber: "",
	emailAddress: "",
	vinNumber: "",
	carMake: "",
	carModel: "",
	rep: "",
	notes: "",
	selectedServices: [{ name: "", price: 0 }],
	paymentMethod: "",
    searchQuery: "",
	setClientName: (_name: string) => {},
	setCompanyName: (_name: string) => {},
	setPhoneNumber: (_number: string) => {},
	setEmailAddress: (_email: string) => {},
	setVinNumber: (_vin: string) => {},
	setCarMake: (_make: string) => {},
	setCarModel: (_model: string) => {},
	setRep: (_rep: string) => {},
	setNotes: (_notes: string) => {},
	setSelectedServices: (_services: { name: string; price: number }[]) => {},
	setPaymentMethod: (_method: string) => {},
    setSearchQuery: (_method: string) => { },
});
