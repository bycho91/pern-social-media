import { FeedContainer } from "../styled/Feed.styled";
import useFeed from "../hooks/useFeed";
import { Button } from "@mui/material";
import PostCard from "./PostCard";

const Feed = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useFeed();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <FeedContainer>
      <h1>Recent Posts</h1>
      {data?.pages?.map((page) =>
        page.posts.map((post, i) => <PostCard post={post} key={i} />)
      )}
      {hasNextPage && !isFetchingNextPage && (
        <Button onClick={() => fetchNextPage()}>Load More</Button>
      )}
    </FeedContainer>
  );
};

export default Feed;
