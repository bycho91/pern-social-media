import { useInfiniteQuery } from "react-query";

const useFeed = () => {
  return useInfiniteQuery(
    "feed",
    async ({ pageParam = 0 }) => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/feed?cursor=${pageParam}`,
        {
          credentials: "include",
        }
      );
      if (!res.ok) {
        throw new Error("something went wrong server side...");
      }
      return res.json();
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.posts.length >= 5 ? lastPage.cursor : undefined;
      },
    }
  );
};

export default useFeed;
