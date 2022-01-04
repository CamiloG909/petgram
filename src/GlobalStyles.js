import { createGlobalStyle, css, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		font-family: 'Calibri', sans-serif;
		color: white;
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%;
	}
	body {
		block-size: 100vh;
		margin: 0 auto 50px;
		max-inline-size: 500px;
		inline-size: 100%;
		background: #111111;
		overscroll-behavior: none;
	}
	#app {
		padding-bottom: 10px;
		min-block-size: 100vh;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		overflow-x: hidden;
	}

	.fixed-top {
		position: fixed;
		top: 0;
		z-index: 10;
	}

	.fixed-bottom {
		position: fixed;
		bottom: 0;
	}
`;

// Animation
const fadeInKeyframes = keyframes`
	from {
		filter: blur(5px);
		opacity: 0;
	}

	to {
		filter: blur(0);
		opacity: 1;
	}
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) => css`
	animation: ${time} ${fadeInKeyframes} ${type};
`;
