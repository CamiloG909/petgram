import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { Header } from "../components/Header";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import db from "../db";

const Home = () => {
	const [categoryId, setCategoryId] = useState("");
	const { category } = useParams();

	useEffect(() => {
		if (category) {
			let categoryId = db.categories.filter(
				(categoryDb) => categoryDb.name === category
			);
			categoryId = categoryId[0].id;

			setCategoryId(categoryId);
		} else {
			setCategoryId("");
		}
	}, [category]);

	return (
		<Layout title="Home">
			<Header />
			<ListOfCategories />
			<ListOfPhotoCards categoryId={categoryId} />
		</Layout>
	);
};

export default Home;
