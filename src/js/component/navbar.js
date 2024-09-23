import React, { useContext } from "react";
import img1 from "../../img/start2.jpeg";
import img2 from "../../img/1starts.jpg.webp";
import img3 from "../../img/starwars3.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Home } from "../views/home";


export const Navbar = () => {
	const { store, actions} = useContext(Context);

	return (
		<>
			<nav className="navbar">
				<div className="container-fluid">
					<Link to={`/`}>
					<img src={img2} alt="Descripción de la imagen" className="nav-img mx-3" />
					</Link>
					<div className="dropdown mx-3 px-5">
						<button
							className="btn-nav justify-content-center"
							type="button"
							id="favoritesDropdown"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						> Favorites ({store.favorites.length})
						</button>
						<ul className="dropdown-menu justify-content-between mx-3">
							{store.favorites.length > 0 ? (
								store.favorites.map((item, index) => (
									<li className="dropdown-item" key={index}>
										<Link to={`/detail/${item.type}/${item.uid}`}className="dropdown-item">
											{item.name}
										</Link><button className="btn-nav-x bg-danger m-2" onClick={() => actions.removeFavorite(item)}>
										x
										</button>
									</li>
								))
							) : (
								<li className="dropdown-item">No Favorites</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
