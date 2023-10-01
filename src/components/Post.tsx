import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../api-sevice/Post";

const useGetPostById = (id: string | number) => {
  return useQuery({
    queryFn: () => getPostById(id),
    queryKey: ["getPostById", id],
    // cacheTime: 0,
  });
};

export type PostProps = {
  id: string | number;
};

export const Post = (props: PostProps) => {
  const postQuery = useGetPostById(props.id);
  return (
    <div>
      <p>isError: {String(postQuery.isError)}</p>
      <p>isLoading: {String(postQuery.isLoading)}</p>
      <p>isFetching: {String(postQuery.isFetching)}</p>
      <p>isPending: {String(postQuery.isPending)}</p>
      {postQuery.isSuccess && (
        <>
          <h2>Post #{props.id}</h2>
          <p>{postQuery.data.body}</p>
        </>
      )}
    </div>
  );
};
