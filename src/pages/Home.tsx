import { useEffect, useState } from "react";
import { fetchTopHeadlines } from "../api/news";
import type { Article } from "../types/article";
import ArticleList from "../components/ArticleList";
import { Typography, Spin } from "antd";

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopHeadlines()
      .then(setArticles)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Typography.Title>Top Headlines</Typography.Title>
      {loading ? <Spin size="large" /> : <ArticleList articles={articles} />}
    </>
  );
};

export default Home;

