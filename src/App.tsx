import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Articles } from "./pages/Articles";
import { Login } from "./pages/Login";
import { Post111 } from "./pages/Post111";
import { Posts } from "./pages/Posts";
import { TestPromise } from "./pages/TestPromise";
import { Register } from "./pages/Register";

export type Page =
  | "home"
  | "posts"
  | "login"
  | "register"
  | "articles"
  | "post111";

function App() {
  const [page, setPage] = useState<Page>("home");
  return (
    <div>
      <h1>app</h1>
      <TestPromise />
      <Navigation setPage={setPage} />
      {page === "posts" && <Posts />}
      {page === "login" && <Login />}
      {page === "register" && <Register />}
      {page === "articles" && <Articles />}
      {page === "post111" && <Post111 />}
    </div>
  );
}

export default App;
