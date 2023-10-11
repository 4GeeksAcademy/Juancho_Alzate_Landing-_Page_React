import React from "react";

import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";

//create your first component
const Home = () => {
	const cards = [
		{title: "first-title", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In exercitationem sapiente inventore provident animi reprehenderit.", imagen: "https://picsum.photos/500/325"},
		{title: "second-title", description: "consectetur adipisicing elit. In exercitationem sapiente inventore provident animi reprehenderit Lorem ipsum dolor sit amet.", imagen: "https://picsum.photos/500/325"}, 
		{title: "third-title", description: "In exercitationem sapiente inventore provident animi reprehenderit, Lorem ipsum dolor sit amet, consectetur adipisicing elit.", imagen: "https://picsum.photos/500/325"}, 
		{title: "fourth-title", description: "ipsum dolor sit amet, consectetur adipisicing elit. In exercitationem Lorem sapiente inventore provident animi reprehenderit.", imagen: "https://picsum.photos/500/325"}
	]
	return (
		<div>
			<Navbar />		
			<Jumbotron />
			<div class="container my-5">
				<div class="cardStyle">
					<div class="row row-cols-1 row-cols-md-4 g-4">
						{cards.map((card,index) => {
							return (<Cards title={card.title} description={card.description} imagen={card.imagen} key={index}/>)
						})}
					</div>
				</div>
			</div>

			<div className="footer">
				<h4 class="text-center py-5 mb-0  text-light">
					Copyright © Your Website 2023
				</h4>
			</div>
		</div>
		
);
};

export default Home;
