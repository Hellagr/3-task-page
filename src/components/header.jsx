import { GlobeAmericas } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.css";

const Header = () => {
  const togglerBtnOpen = () => {
    const togglerOpen = document.querySelector(".togglerOpen");
    const togglerClose = document.querySelector(".togglerClose");
    // const togglerClose = document.querySelector(".togglerClose");
    const columnToggler = document.querySelector(".columnToggler");

    togglerOpen.classList.toggle("hide");

    if (togglerOpen.classList.contains("hide")) {
      togglerClose.classList.toggle("unhideBlock");
      columnToggler.classList.toggle("unhideBlock");
    }
  };

  const togglerBtnClose = () => {
    const togglerOpen = document.querySelector(".togglerOpen");
    const togglerClose = document.querySelector(".togglerClose");
    const columnToggler = document.querySelector(".columnToggler");
    togglerClose.classList.toggle("unhideBlock");
    if (
      togglerOpen.classList.contains("hide") &
      columnToggler.classList.contains("unhideBlock")
    ) {
      togglerOpen.classList.remove("hide");
      columnToggler.classList.remove("unhideBlock");
    }
  };

  return (
    <>
      <Row className="NavbarRow">
        <Col className="colForHide"></Col>
        <Col className="NavbarColLinks">
          <Nav.Link href="#">About us</Nav.Link>
          <Nav.Link href="#">Brands</Nav.Link>
          <Nav.Link href="#">Commissions</Nav.Link>
          <Nav.Link href="#">News</Nav.Link>
          <Nav.Link href="#">Contact us</Nav.Link>
          <Nav.Link href="#">Careers</Nav.Link>
        </Col>
        <Col className="NavbarColButtons">
          <Button className="Button1">
            <GlobeAmericas className="langicon" /> EN
          </Button>

          <GlobeAmericas className="langIconToggle" color="white" size={35} />

          <Button className="Button2">LOG IN</Button>
          <Button className="Button3">SIGN UP</Button>

          {/* //TOOGLERS */}
          <Button className="togglerOpen" onClick={togglerBtnOpen}>
            <List className="togglerList" color="white" size={30} />
          </Button>

          <Button className="togglerClose" onClick={togglerBtnClose}>
            <X className="togglerList" color="white" size={30} />
          </Button>
        </Col>

        {/* HIDE MENU */}
      </Row>
      <Col className="columnToggler">
        <Nav.Link className="linkToggler1" href="#">
          About us
        </Nav.Link>
        <Nav.Link className="linkToggler2" href="#">
          Brands
        </Nav.Link>
        <Nav.Link className="linkToggler3" href="#">
          Commissions
        </Nav.Link>
        <Nav.Link className="linkToggler4" href="#">
          News
        </Nav.Link>
        <Nav.Link className="linkToggler5" href="#">
          Contact us
        </Nav.Link>
        <Nav.Link className="linkToggler6" href="#">
          Careers
        </Nav.Link>
        <Button className="ButtonToggler1">LOG IN</Button>
        <Button className="ButtonToggler2">SIGN UP</Button>
      </Col>
    </>
  );
};

export default Header;
