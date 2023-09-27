import { useState } from "react";
import { PostList, PostListProps } from "./components/PostList";
import { Post } from "./components/Post";

function App() {
  const [postId, setPostId] = useState<string | number | null>(null);
  const handleClickPost: PostListProps["onClickPost"] = (postId) => {
    setPostId(postId);
  };
  return (
    <div>
      <h1>app</h1>
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
        <div style={{ flexBasis: "70%" }}>{postId && <Post id={postId} />}</div>
      </div>
    </div>
  );
}

export default App;
