/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Footer = () => {
	return(
		<div className="footer">
			<ul>
				{/* color this first line to be white */}
				<li><a href="https://vaporjawn.github.io/" target = "_blank" rel="noreferrer"> &copy; Victor Williams</a></li> 
				<li><a href="https://twitter.com/Vaporjawn">Twitter</a></li>
				<li><a href="mailto:vrwilliams719@gmail.com">Email</a></li>
				<li><a href="https://instagram.com/Vaporjawn">Instagram</a></li>
				<li><a href="https://github.com/Vaporjawn">Github</a></li>
			</ul> 
			<p>Copyright © 2020 JoJo's Bizarre Adventure Randomizer</p>
		</div>
	);
};

export default Footer;