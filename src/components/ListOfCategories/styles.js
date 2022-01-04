import styled, { keyframes } from "styled-components";

export const List = styled.ul`
	display: flex;
	overflow: scroll;
	margin: 60px 0 7px 0;
	padding-block-end: 7px;
	inline-size: 100%;
	list-style: none;
	border-block-end: 1px solid #313131;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Item = styled.li`
	margin: 0 5px;
	&:first-child {
		margin-inline-start: 17px;
	}
	&:last-child {
		margin-inline-end: 17px;
	}
`;

const loaderKeyframes = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Loading = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	inline-size: 100%;
	block-size: 81px;
	> .loader-categories {
		display: inline-block;
		position: relative;
		width: 60px;
		height: 60px;
	}
	> .loader-categories div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 44px;
		height: 44px;
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
