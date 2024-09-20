import React, { useContext } from "react";
import img1 from "../../img/start2.jpeg";
import img2 from "../../img/1starts.jpg.webp";
import img3 from "../../img/starwars3.jpg";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context);
	
	return (
		<>
			<nav className="navbar bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand">Star Wars</a>
					<button className="btn btn-outline-success" type="button">
						Favorites ({store.favorites.length})
					</button>
				</div>
			</nav>
			<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={img1} className="d-block w-100 carousel-img" alt="Star Wars 1" />
					</div>
					<div className="carousel-item">
						<img src={img2} className="d-block w-100 carousel-img" alt="Star Wars 2" />
					</div>
					<div className="carousel-item">
						<img src={img3} className="d-block w-100 carousel-img" alt="Star Wars 3" />
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
}
