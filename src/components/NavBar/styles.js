import styled from "styled-components";

export const Box = styled.nav`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	position: fixed;
	bottom: 0;
	max-inline-size: 500px;
	inline-size: 100%;
	block-size: 50px;
	border-block-start: 1px solid #313131;
	background-color: #111111;
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		inline-size: 100%;
		font-size: 2.2rem;
		transition: all 0.3s ease;
	}
	a:hover {
		background-color: #181818;
	}
	a.bg-active {
		background-color: #222222;
	}
`;
