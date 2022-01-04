import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button, TextLikes } from "./styles";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import useLocalStorage from "../../hooks/useLocalStorage";
import useNearScreen from "../../hooks/useNearScreen";

export const PhotoCard = ({
	id,
	likes = 0,
	src = "https://images.unsplash.com/photo-1553987882-91d92995e16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
}) => {
	const key = `photo-${id}`;
	const [info, setInfo] = useLocalStorage(key, { liked: false, likes });

	useEffect(() => {
		setInfo({ liked: info.liked, likes: info.likes });
	}, []);

	const Icon = info.liked ? BsHeartFill : BsHeart;

	// Animation scroll
	const [show, element] = useNearScreen();

	const handleChangeLike = () => {
		setInfo({
			liked: !info.liked,
			likes: info.liked ? info.likes - 1 : info.likes + 1,
		});
	};

	return (
		<Article ref={element}>
			{show && (
				<Fragment>
					<ImgWrapper onClick={handleChangeLike}>
						<Img src={src} alt="Image" />
					</ImgWrapper>
					<Button onClick={handleChangeLike}>
						<Icon size="20px" />
					</Button>
					<TextLikes>{info.likes} likes</TextLikes>
				</Fragment>
			)}
		</Article>
	);
};
