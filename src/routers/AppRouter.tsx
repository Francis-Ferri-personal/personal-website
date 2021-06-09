import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { HomeScreen } from "../components/pages/HomeScreen";
import { ProfileScreen } from "../components/pages/ProfileScreen";
import { KnowledgeScreen } from "../components/pages/KnowledgeScreen";
import { useEffect } from "react";
import { startLoadingCerts } from "../actions/certificates";
import { useDispatch } from "react-redux";

export const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startLoadingCerts());
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Navbar />

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/">
						<HomeScreen />
					</Route>
					<Route exact path="/profile">
						<ProfileScreen />
					</Route>
					<Route exact path="/knowledge">
						<KnowledgeScreen />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
