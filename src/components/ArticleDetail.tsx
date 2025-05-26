import type { Article } from "../types/article";
import { Card } from "antd";

interface Props {
  article: Article;
}

const ArticleDetail: React.FC<Props> = ({ article }) => (
  <Card
    title={article.title}
    cover={<img src={article.urlToImage} alt={article.title} />}
  >
    <p>
      <strong>Source:</strong> {article.source.name}
    </p>
    <p>
      <strong>Published:</strong>{" "}
      {new Date(article.publishedAt).toLocaleString()}
    </p>
    <p>{article.description}</p>
    <p>{article.content}</p>
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      Read full article
    </a>
  </Card>
);

export default ArticleDetail;

