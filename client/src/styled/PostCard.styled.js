import styled from "styled-components";
import { Avatar } from "@mui/material";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: ${(props) => props.theme.elevation_2};
  width: 95%;
  padding: 1em;
  border-radius: 10px;
  margin: 0 auto;
`;

export const CardTitle = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

export const UserImage = styled(Avatar)``;

export const CardContent = styled.div`
  padding: 0 0.5em;
`;
