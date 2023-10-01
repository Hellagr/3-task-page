// eslint-disable-next-line no-unused-vars
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./content.css";
import Animation from "./animation";

const Content = () => {
  return (
    <Row className="mainContent">
      <Col className="leftColContent">
        <Col>HOUSE OF</Col>
        <Col style={{ color: "rgb(71 139 249)" }}>GAMBLING</Col>
      </Col>
      <Col className="middleColContent">
        <Animation />
      </Col>
      <Col className="rightColContent">
        BLOG
        <Card.Body className="cardBlog">
          <Card.Body className="inTheCardBody">
            <Button
              className="blogButton"
              variant="outline-primary"
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
