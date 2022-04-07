import { FeedContainer } from "../styled/Feed.styled";
import useFeed from "../hooks/useFeed";

const Feed = () => {
  const { data } = useFeed();
  return (
    <FeedContainer>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </FeedContainer>
  );
};

export default Feed;
