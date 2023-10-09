import React from "react";

import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />		
			<Jumbotron />
			<Cards />

				<div className="footer">
					<h4 class="text-center py-5 mb-0  text-light">
						Copyright © Your Website 2023
					</h4>
			</div>
		</div>
		
);
};

export default Home;
