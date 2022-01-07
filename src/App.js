import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { NavBar } from "./components/NavBar";
import Loader from "./components/ListOfPhotoCards/Loader";

const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const Favorites = lazy(() => import("./pages/Favorites"));

const App = () => {
	return (
		<Suspense fallback={<Loader />}>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/photos/:category" element={<Home />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/user/:id" element={<Profile />} />
			</Routes>
			<NavBar />
		</Suspense>
	);
};

export default App;
