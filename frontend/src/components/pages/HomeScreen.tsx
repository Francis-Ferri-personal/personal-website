import { Link } from "react-router-dom";
import "./HomeScreen.css";

export const HomeScreen = () => {
	return (
		<main className="Home-main  Home-body">
			<section>
				<p className="Home-main-text">THANKS FOR YOUR VISIT TO MY WEBSITE!</p>
				<button className="Home-main-button">
					<Link className="button-text" to="/certifications">
						SEE PROFILE!
					</Link>
				</button>
			</section>
		</main>
	);
};
