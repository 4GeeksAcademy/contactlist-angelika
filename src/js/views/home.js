import React from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import { Navbar } from "../component/Navbar";

export const Home = () => (
	<>
		<Navbar />
		<div className="d-flex justify-content-center">
			<ContactCard />
		</div>
	</>
	
);
