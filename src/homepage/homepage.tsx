/* eslint-disable react/no-unescaped-entities */
import "../global.css";
import React from "react";
import Footer from "../components/footer/footer";

const reload = () => {
	window.location.reload();
};


const HomePage = () => {
	return (
		<div>
			<a target="_blank" href="https://www.youtube.com/watch?v=O2mm23Ia7ho" rel="noreferrer">
				<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/JoJo%27s_Bizarre_Adventure_-_Stardust_Crusaders_logo.png" alt="logo" />
			</a>
			{/* Need to make this H1 link to home, don't know if I have routes set up yet */}
			<h1 onClick={() => reload()} > JoJo's Bizarre Adventure Randomizer </h1>
			<Footer />
		</div>
	);
};

export default HomePage;