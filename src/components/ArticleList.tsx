import { List, Card } from "antd";
import type { Article } from "../types/article";
import { useNavigate } from "react-router";

interface Props {
  articles: Article[];
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  const navigate = useNavigate();

  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={articles}
      renderItem={(item, idx) => (
        <List.Item>
          <Card
            hoverable
            cover={<img alt={item.title} src={item.urlToImage} />}
            onClick={() => navigate(`/detail/${idx}`)}
          >
            <Card.Meta title={item.title} description={item.source.name} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default ArticleList;

