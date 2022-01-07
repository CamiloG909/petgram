import React from "react";
import { Anchor, Image } from "./styles";
import PropTypes from "prop-types";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({
	cover = DEFAULT_IMAGE,
	path = "#",
	emoji = "?",
}) => (
	<Anchor to={path}>
		<Image src={cover} alt={emoji} />
		{emoji}
	</Anchor>
);

Category.propTypes = {
	cover: PropTypes.string,
	path: PropTypes.string,
	emoji: PropTypes.string,
};
