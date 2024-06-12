import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="container-fluid notfound">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <img src="https://github.com/AngelikaWebDev/icons/blob/main/img-projects/sadness.png?raw=true" alt="sadness error 404" />
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center">
                    <p className="h1 text-center mb-3">404</p>
                    <p className="h3 text-center mb-2">Page not found</p>
                    <p className="text-center tx-notfound mb-2">we’re sorry. the page you requested could no be found
                    Please go back to the home page</p>
                    <Link to="/home">
					    <button className="btn btn-primary">GO HOME</button>
				    </Link>
                </div>
            </div>
        </div>
	);
};

