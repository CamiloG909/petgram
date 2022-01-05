import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 15px;
	padding: 0 20px;
`;

export const ImgWrapper = styled.article`
	inline-size: 143px;
	block-size: 143px;
	border-radius: 10px;
	overflow: hidden;
	img {
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
	}
`;
