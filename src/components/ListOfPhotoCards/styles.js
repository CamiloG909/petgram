import styled, { keyframes } from "styled-components";

const loaderKeyframes = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Loading = styled.article`
	inline-size: 100%;
	block-size: 55px;
	text-align: center;
	> .loader-categories {
		display: inline-block;
		position: relative;
		width: 46px;
		height: 46px;
	}
	> .loader-categories div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 30px;
		height: 30px;
		margin: 8px;
		border: 4px solid #fff;
		border-radius: 50%;
		animation: ${loaderKeyframes} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #1ccc5b transparent transparent transparent;
	}
	> .loader-categories div:nth-child(1) {
		animation-delay: -0.45s;
	}
	> .loader-categories div:nth-child(2) {
		animation-delay: -0.3s;
	}
	> .loader-categories div:nth-child(3) {
		animation-delay: -0.15s;
	}
`;
