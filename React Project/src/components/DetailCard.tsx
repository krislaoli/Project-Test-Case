import React, { useEffect } from "react";
import useArticles from "../hooks/useArticles";
import { useParams } from "react-router-dom";
import { Col, Image, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

function DetailCard() {
  const { articlesData } = useArticles();
  const { id } = useParams();

  useEffect(() => {
    const filteredData = articlesData?.filter((item, index) => {
      return index === Number(id) ? item : null;
    });

    console.log(filteredData);
  }, [articlesData, id]);

  const article = articlesData && articlesData[Number(id)];

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      {article && (
        <Col span={12}>
          <Title level={2} style={{ textAlign: "center" }}>
            {article.title}
          </Title>
          <Row justify="center">
            <Col span={20}>
              <Image
                style={{
                  width: "100%",
                  marginBottom: 16,
                  justifyContent: "center",
                  alignContent: "center",
                  margin: "0 auto",
                }}
                alt={article.title}
                src={article.urlToImage}
              />
            </Col>
          </Row>
          <Paragraph strong style={{ textAlign: "center" }}>
            Published At: {article.publishedAt}
          </Paragraph>
          <Title style={{ textAlign: "center", fontSize: 20 }}>{article.description}</Title>
          {/* Add additional details here if needed */}
        </Col>
      )}
    </Row>
  );
}

export default DetailCard;
