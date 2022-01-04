import styled from "styled-components";
import { Link } from "react-router-dom";

export const Anchor = styled(Link)`
	display: flex;
	flex-direction: column;
	inline-size: 81px;
	text-align: center;
	text-decoration: none;
	user-select: none;
`;

export const Image = styled.img`
	margin-block-end: 7px;
	padding: 3px;
	block-size: 81px;
	inline-size: 81px;
	border-radius: 50%;
	border: 2px solid #1ccc5b;
	overflow: hidden;
	object-fit: cover;
`;
