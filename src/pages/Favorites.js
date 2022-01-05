import React, { Fragment } from "react";
import styled from "styled-components";
import { FavoritesContainer } from "../components/FavoritesContainer";

const Favorites = () => {
	return (
		<Fragment>
			<Title>Favorites</Title>
			<FavoritesContainer />
		</Fragment>
	);
};

const Title = styled.h1`
	margin: 15px 25px 15px;
	font-size: 2.5rem;
`;
export default Favorites;
