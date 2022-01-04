import React, { useEffect, useState } from "react";
import { PhotoCard } from "../PhotoCard";
import Loader from "./Loader";
import db from "../../db";

export const ListOfPhotoCards = ({ categoryId }) => {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		setTimeout(() => {
			if (categoryId !== "") {
				setPhotos(db.photos.filter((photo) => photo.categoryId === categoryId));
				setLoading(false);
			} else {
				setPhotos(db.photos);
				setLoading(false);
			}
		}, 300);
	}, [categoryId]);

	return (
		<section>
			{loading && <Loader />}
			{photos.map(({ id, src, likes }) => (
				<PhotoCard key={id} id={id} src={src} likes={likes} />
			))}
		</section>
	);
};
