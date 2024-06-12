import React from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";

export const Home = () => (
	<>
		<Navbar />
		<div className="d-flex justify-content-center">
			<ContactCard />
		</div>
	</>
	
);
