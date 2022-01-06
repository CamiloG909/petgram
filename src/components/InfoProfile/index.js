import React from "react";
import { Container, Title, Img, Name, Text } from "./styles";

export const InfoProfile = ({ profile }) => {
	return (
		<Container>
			<Title>{profile.username}</Title>
			<Img src={profile.avatar} alt="Image user" />
			<Name>
				{profile.name} {profile.lastname}
			</Name>
			<Text>More info in coming...</Text>
		</Container>
	);
};
