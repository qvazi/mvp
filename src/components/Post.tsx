import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../api-sevice/Post";

const useGetPostById = (id: string | number) => {
  return useQuery({
    queryFn: () => getPostById(id),
    queryKey: ["getPosts", id],
    // cacheTime: 0,
  });
};

export type PostProps = {
  id: string | number;
};

export const Post = (props: PostProps) => {
  const postQuery = useGetPostById(props.id);
  if (postQuery.isLoading) return "Loading...";
  if (postQuery.isError) return "Error";
  if (postQuery.isSuccess)
    return (
      <div>
        {postQuery.isFetching && <p>Fetching...</p>}
        <h2>Post #{props.id}</h2>
        <p>{postQuery.data.body}</p>
      </div>
    );
  return null;
};
