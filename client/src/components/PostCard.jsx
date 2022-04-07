import {
  PostCardContainer,
  CardTitle,
  UserImage,
  CardContent,
} from "../styled/PostCard.styled";
import { Typography } from "@mui/material";
import React from "react";

const PostCard = React.memo(({ post }) => {
  return (
    <PostCardContainer>
      <CardTitle>
        <UserImage src={post.img} alt="profile" />
        <Typography variant="h6">{post.username}</Typography>
      </CardTitle>
      <CardContent>
        <Typography variant="body1">{post.body}</Typography>
      </CardContent>
    </PostCardContainer>
  );
});

export default PostCard;
