import React from "react";
import {
	BsHouseDoor,
	BsStar,
	BsPerson,
	BsHouseDoorFill,
	BsStarFill,
	BsPersonFill,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Box } from "./styles";

export const NavBar = () => {
	const handleChangeBackground = ({ isActive }) => {
		if (isActive) {
			return "bg-active";
		}
	};
	return (
		<Box>
			<NavLink className={handleChangeBackground} to="/">
				<BsHouseDoor />
			</NavLink>
			<NavLink className={handleChangeBackground} to="/favorites">
				<BsStar />
			</NavLink>
			<NavLink className={handleChangeBackground} to="/user/90">
				<BsPerson size={"27px"} />
			</NavLink>
		</Box>
	);
};
