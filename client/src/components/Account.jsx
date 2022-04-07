import { Button } from "@mui/material";
import useFeed from "../hooks/useFeed";
import { AccountContainer } from "../styled/Account.styled";
import PostCard from "./PostCard";
const Account = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useFeed("my_posts");
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <AccountContainer>
      <h1>My Posts</h1>
      {data?.pages?.map((page) =>
        page.posts.map((post, i) => <PostCard post={post} key={i} />)
      )}
      {hasNextPage && !isFetchingNextPage && (
        <Button onClick={() => fetchNextPage()}>Load More</Button>
      )}
    </AccountContainer>
  );
};

export default Account;
