import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const Layout = ({ children, title, description }) => (
	<Fragment>
		<Helmet>
			{title && <title>{title} | Petgram</title>}
			{description && <meta name="description" content={description} />}
		</Helmet>
		{children}
	</Fragment>
);

Layout.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	description: PropTypes.string,
};

export default Layout;
