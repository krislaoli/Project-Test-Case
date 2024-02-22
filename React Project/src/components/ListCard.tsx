import { Typography, Image, Row, Col, Card } from "antd";
import { Article } from "../types/ArticlesTypes";
import useArticles from "../hooks/useArticles";
import { Link } from "react-router-dom";
// import Navbar from "./NavbarCard";
const { Text } = Typography;

function ListCard() {
  const { articlesData } = useArticles();

  return (
    <>
      <Row gutter={[16, 16]} data-testid="article-grid">
        {articlesData.map((article: Article, index: number) => (
          <Col key={article.title} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              style={{ width: "100%", backgroundColor: "white" }}
              cover={<Image alt={article.title} src={article.urlToImage} />}
            >
              <Card.Meta
                title={
                  <Link
                    style={{ color: "black", fontWeight: "bold" }}
                    to={`/detail/${index}`}
                  >
                    {article.title}
                  </Link>
                }
                description={
                  <>
                    <Text style={{ color: "black" }}>
                      {article.description}
                    </Text>
                    <br />
                    <Text type="secondary">{article.source.name}</Text>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ListCard;
