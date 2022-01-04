import React, { useState, useEffect } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";
import Loader from "./Loader";
import db from "../../db";

function useCategoriesData() {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setCategories(db.categories);
			setLoading(false);
		}, 300);
	}, []);

	return { categories, loading };
}

export const ListOfCategories = () => {
	const { categories, loading } = useCategoriesData();

	return (
		<List>
			{loading && <Loader />}
			{categories.map((category) => (
				<Item key={category.id}>
					<Category {...category} />
				</Item>
			))}
		</List>
	);
};
