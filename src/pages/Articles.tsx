import { useQuery } from "@tanstack/react-query";
import { apingwebService } from "../api-sevice/apingweb";
import { Article } from "../components/Article";

export const Articles = () => {
  const articlesQuery = useQuery({
    queryFn: apingwebService.getArticles,
    queryKey: ["articles"],
  });

  return (
    <div>
      <h2>Articles</h2>
      <Article id="1" />
      <Article id="2" />
      <Article id="3" />
      {articlesQuery.data && <p>{JSON.stringify(articlesQuery.data)}</p>}
    </div>
  );
};
