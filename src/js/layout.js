import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/home.js";
import { Single } from "./views/single.js";
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import { Carrusel } from "./component/carrusel.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Carrusel />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/detail/:type/:id" element={<Single />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Layout;
