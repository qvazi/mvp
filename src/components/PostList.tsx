import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api-sevice/Post";

const useGetPosts = () => {
  return useQuery({
    queryFn: getPosts,
    queryKey: ["getPosts"],
  });
};

export type PostListProps = {
  onClickPost: (id: string | number) => void;
};

export const PostList = (props: PostListProps) => {
  const postsQuery = useGetPosts();

  if (postsQuery.isLoading) return "Loading...";
  if (postsQuery.isFetching) return "Fetching...";
  if (postsQuery.isError) return "Error";
  if (postsQuery.isSuccess) {
    return (
      <ul>
        {postsQuery.data.map((post) => (
          <li key={post.id} onClick={() => props.onClickPost(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>
    );
  }

  return null;
};
