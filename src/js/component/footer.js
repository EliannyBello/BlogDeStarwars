import React from "react";

export const Footer = () => {
	return(
		<footer className="footer bg-dark text-white text-center py-4">
		<div className="container">
		  <h4 className="mb-3">Que la fuerza te acompañe</h4>
		  <div className="mb-4">
			<a href="https://www.starwars.com" target="_blank" rel="noreferrer" className="text-white me-3">
			  <i className="fab fa-jedi-order"></i> Página Oficial
			</a>
			<a href="https://www.instagram.com/starwars" target="_blank" rel="noreferrer" className="text-white me-3">
			  <i className="fab fa-instagram"></i> Instagram
			</a>
			<a href="https://www.facebook.com/StarWars" target="_blank" rel="noreferrer" className="text-white me-3">
			  <i className="fab fa-facebook"></i> Facebook
			</a>
			<a href="https://twitter.com/starwars" target="_blank" rel="noreferrer" className="text-white">
			  <i className="fab fa-twitter"></i> Twitter
			</a>
		  </div>
			<p className="mb-0 text-center">"El miedo es el camino hacia el lado oscuro."</p>
		  <div className="mt-4">
			<a href="https://www.starwars.com/databank" target="_blank" rel="noreferrer" className="btn btn-outline-light">
			  Explora el Universo de Star Wars
			</a>
		  </div>
		  <div className="mt-4">
			<p> Star Wars Fanpage - Todos los derechos reservados</p>
		  </div>
		</div>
	  </footer>
	);
}