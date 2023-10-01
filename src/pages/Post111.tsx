import { useQuery } from "@tanstack/react-query";
import { service } from "../lib/axios";

export const Post111 = () => {
  const q = useQuery({
    queryFn: () => {
      return service.get("/posts/111").then((res) => {
        console.log(res, "q");
        return res.data;
      });
    },
    queryKey: ["posts", "test"],
  });

  return (
    <div>
      {q.isPending && "Pending..."}
      {q.isFetching && "Fetching...."}
      {q.isError && `Error: ${q.error}`}
      <code>{JSON.stringify(q.data)}</code>
      <button onClick={() => q.refetch()}>Refetch</button>
      <h3>Post {q?.data?.id}</h3>
      {q?.data?.title}
    </div>
  );
};
