// eslint-disable-next-line no-unused-vars
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Animation from "./animation";
import "./content.css";

const Content = () => {
  return (
    <Row className="mainContent">
      <Col className="leftColContent">
        <Col>HOUSE OF</Col>
        <Col className="gambling" style={{ color: "rgb(71 139 249)" }}>
          GAMBLING
        </Col>
        <Col className="raiseYour" style={{ color: "#9c9fae" }}>
          Raise your ROI with direct advertiser
        </Col>
        <Col>
          <Button variant="primary" className="leftContentButton">
            BECOME A PARTNER
          </Button>{" "}
        </Col>
      </Col>
      <Col className="middleColContent">
        <Animation />
      </Col>
      <Col className="rightColContent">
        BLOG
        <Card.Body className="cardBlog">
          <Card.Body className="inTheCardBody">
            <Button
              className="firstBlogButton"
              variant="primary"
              href="http://google.com"
            >
              Google Search is a search engine provided and operated by Google.
              <div style={{ color: "gray", fontSize: "12px" }}>01.09.2023</div>
            </Button>{" "}
            <Button className="blogButton" variant="outline-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              officia.
              <div style={{ color: "gray", fontSize: "12px" }}>01.09.2023</div>
            </Button>{" "}
            <Button className="blogButton" variant="outline-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              officia.
              <div style={{ color: "gray", fontSize: "12px" }}>01.09.2023</div>
            </Button>{" "}
            <Button className="blogButton" variant="outline-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              officia.
              <div style={{ color: "gray", fontSize: "12px" }}>01.09.2023</div>
            </Button>{" "}
            <Button className="blogButton" variant="outline-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              officia.
              <div style={{ color: "gray", fontSize: "12px" }}>01.09.2023</div>
            </Button>{" "}
            <Button className="blogButton" variant="outline-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              officia.
              <div style={{ color: "gray", fontSize: "12px" }}>01.09.2023</div>
            </Button>{" "}
            <Button className="blogButton" variant="outline-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              officia.
              <div style={{ color: "gray", fontSize: "12px" }}>01.09.2023</div>
            </Button>{" "}
            <Button className="blogButton" variant="outline-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              officia.
              <div style={{ color: "gray", fontSize: "12px" }}>01.09.2023</div>
            </Button>{" "}
          </Card.Body>
        </Card.Body>
      </Col>
    </Row>
  );
};

export default Content;
