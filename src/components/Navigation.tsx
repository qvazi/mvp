import { Page } from "../App";

type NavigationProps = {
  setPage: React.Dispatch<React.SetStateAction<Page>>;
};
export const Navigation = ({ setPage }: NavigationProps) => {
  return (
    <div>
      <button type="button" onClick={() => setPage("home")}>
        Home
      </button>
      <button type="button" onClick={() => setPage("posts")}>
        Posts
      </button>
      <button type="button" onClick={() => setPage("login")}>
        Login
      </button>
      <button type="button" onClick={() => setPage("register")}>
        Register
      </button>
      <button type="button" onClick={() => setPage("articles")}>
        Articles
      </button>
      <button type="button" onClick={() => setPage("post111")}>
        post111
      </button>
    </div>
  );
};
