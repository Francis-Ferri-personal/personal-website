import "./Navbar.css";
import "../../font/flaticon.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<header>
			<section className="Navbar-icons-container">
				<div className="owner">
					<Link to="/">Francis Ferri</Link>
				</div>
				<div className="icons">
					<a href="./">
						<span className="flaticon-010-linkedin"></span>
					</a>
					<a href="./">
						<span className="flaticon-003-whatsapp"></span>
					</a>
					<a href="./">
						<span className="flaticon-002-twitter"></span>
					</a>
				</div>
			</section>
			<nav>
				<section className="nav-logo-container">
					<Link to="/">
						<img src="./assets/img/home.svg" alt="Logo de mi blog" />
					</Link>
				</section>
				<section className="profile-link">
					<Link className="topic" to="/profile">
						Profile
					</Link>
					<Link className="topic" to="/knowledge">
						Knowledge
					</Link>
				</section>
			</nav>
		</header>
	);
};
/* <div>Icons made by <a href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
