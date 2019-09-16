import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";
//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
	<Provider store={store}>
		<Router>
			<Fragment>
				<Navbar />
				<Route exact path="/" component={Landing} />
				<section className="container">
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</section>
			</Fragment>
		</Router>
	</Provider>
);

export default App;
