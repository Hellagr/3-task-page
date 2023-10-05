// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

import { Twitter } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";
import { Tiktok } from "react-bootstrap-icons";
import { Telegram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <Row className="footerMain">
      <Col className="links">
        <a href="#">Terms&Condition</a>
        <a href="#">Coocies</a>
        <a href="#">Contacts</a>
        <a href="#">Careers</a>
        <a href="#">Brand Guide</a>
      </Col>
      <Col className="socialicons">
        <Col className="ourSocLink">Our social links:</Col>
        <Col className="iconsSocLink">
          <Twitter className="iconsSoc" size={19} />
          <Facebook className="iconsSoc" size={19} />
          <Instagram className="iconsSoc" size={19} />
          <Linkedin className="iconsSoc" size={19} />
          <Youtube className="iconsSoc" size={19} />
          <Tiktok className="iconsSoc" size={19} />
          <Telegram className="iconsSoc" size={19} />
        </Col>
      </Col>
    </Row>
  );
};

export default Footer;
