import React from "react";
import Layout from "../Layout";
import { Container, Title, Img, Name, Text } from "./styles";

export const InfoProfile = ({ profile }) => {
	return (
		<Layout title={profile.name + " " + profile.lastname}>
			<Container>
				<Title>{profile.username}</Title>
				<Img src={profile.avatar} alt="Image user" />
				<Name>
					{profile.name} {profile.lastname}
				</Name>
				<Text>More info in coming...</Text>
			</Container>
		</Layout>
	);
};
