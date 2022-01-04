import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

const App = () => {
	return (
		<Fragment>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/photos/:category" element={<Home />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/user/:id" element={<Profile />} />
			</Routes>
			<NavBar />
		</Fragment>
	);
};

export default App;
