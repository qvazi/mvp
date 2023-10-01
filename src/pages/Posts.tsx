import { useState } from "react";
import { PostList, PostListProps } from "../components/PostList";
import { Post } from "../components/Post";
import { useQueryClient } from "@tanstack/react-query";

export const Posts = () => {
  const queryClient = useQueryClient();
  const [postId, setPostId] = useState<string | number | null>(null);
  const handleClickPost: PostListProps["onClickPost"] = (postId) => {
    setPostId(postId);
  };
  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => {
            queryClient.invalidateQueries({ queryKey: ["getPosts"] });
          }}
        >
          Invalidate getPosts
        </button>
        <button
          type="button"
          onClick={() => {
            // queryClient.invalidateQueries({ queryKey: ["getPostById"] });
            queryClient.removeQueries({ queryKey: ["getPostById"] });
          }}
        >
          Invalidate all getPostById
        </button>
      </div>
      <div>
        <Post id={80} />
        <Post id={70} />
        <Post id={60} />
        <Post id={50} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <div style={{ flexBasis: "30%" }}>
          <PostList onClickPost={handleClickPost} />
        </div>
        <div style={{ flexBasis: "70%" }}>
          {!!postId && <Post id={postId} />}
        </div>
      </div>
    </div>
  );
};
