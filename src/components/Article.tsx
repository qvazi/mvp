import { useQuery } from "@tanstack/react-query";
import { apingwebService } from "../api-sevice/apingweb";

export const Article = ({ id }: { id: string }) => {
  const queryArticle = useQuery({
    queryFn: () => apingwebService.getArticleById({ id }),
    queryKey: ["article", id],
  });
  if (queryArticle.isError) {
    return <div>{id}# Error request</div>;
  }
  return (
    <div>
      {queryArticle.data && (
        <div>
          <h3>{queryArticle.data.result.title}</h3>
        </div>
      )}
    </div>
  );
};
