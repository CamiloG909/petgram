import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { InfoProfile } from "../components/InfoProfile";
import db from "../db";

const Profile = () => {
	const [profile, setProfile] = useState({});
	const { id } = useParams();

	useEffect(() => {
		setProfile(db.users.find((user) => user.id == id));
	}, [id]);

	return (
		<Fragment>
			<InfoProfile profile={profile} />
		</Fragment>
	);
};

export default Profile;
