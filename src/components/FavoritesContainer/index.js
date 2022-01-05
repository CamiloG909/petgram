import React, { useState } from "react";
import { Section, ImgWrapper } from "./styles";
import db from "../../db";

export const FavoritesContainer = () => {
	return (
		<Section>
			{db.photos.map((photo) => {
				const photoLS = JSON.parse(
					window.localStorage.getItem(`photo-${photo.id}`)
				);

				if (photoLS.liked) {
					return (
						<ImgWrapper key={photo.id}>
							<img src={photo.src} alt="Favorite image" />
						</ImgWrapper>
					);
				}
			})}
		</Section>
	);
};
