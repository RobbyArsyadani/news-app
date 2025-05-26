import { useLocation, useParams } from "react-router";
import type { Article } from "../types/article";
import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../api/news";
import ArticleDetail from "../components/ArticleDetail";

const Detail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetchTopHeadlines().then((data) => {
      const item = data[Number(id)];
      setArticle(item);
    });
  }, [id]);

  return (
    <div>
      {article ? <ArticleDetail article={article} /> : <p>Loading...</p>}
    </div>
  );
};

export default Detail;

