import React from "react";
import styled from "styled-components";
import { FavoritesContainer } from "../components/FavoritesContainer";
import Layout from "../components/Layout";

const Favorites = () => {
	return (
		<Layout title="Favorites">
			<Title>Favorites</Title>
			<FavoritesContainer />
		</Layout>
	);
};

const Title = styled.h1`
	margin: 15px 25px 15px;
	font-size: 2.5rem;
`;
export default Favorites;
