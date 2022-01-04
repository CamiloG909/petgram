import styled from "styled-components";
import { fadeIn } from "../../GlobalStyles";

export const Article = styled.article`
	min-block-size: 200px;
	&:last-child {
		padding-block-end: 50px;
	}
`;

export const ImgWrapper = styled.div`
	position: relative;
	display: block;
	block-size: 0;
	inline-size: 100%;
	padding-top: 56.25%;
	overflow: hidden;
`;

export const Img = styled.img`
	${fadeIn()}
	position: absolute;
	top: 0;
	inline-size: 100%;
	object-fit: cover;
`;

export const Button = styled.button`
	display: flex;
	align-items: start;
	justify-content: center;
	flex-direction: column;
	gap: 5px;
	margin: 10px 0 0 8px;
	border: none;
	background-color: transparent;
`;

export const TextLikes = styled.p`
	margin: 5px 0 14px 8px;
	font-size: 13px;
	font-weight: 600;
`;
