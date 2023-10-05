import { GlobeAmericas } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./header.css";

const Header = () => {
  const togglerBtnOpen = () => {
    const togglerOpen = document.querySelector(".togglerOpen");
    const togglerClose = document.querySelector(".togglerClose");
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

  function changeLang() {
    const dropDownMenu1 = document.querySelector(".dropDownMenu1");
    const dropDownMenu2 = document.querySelector(".dropDownMenu2");
    const dropMenu = document.querySelector(".dropmenu");
    console.log(dropMenu.style.display);
    if (
      dropDownMenu1.classList.contains("unhideBlock") &
      !dropMenu.classList.contains("show")
    ) {
      dropDownMenu1.classList.toggle("unhideBlock");
      dropDownMenu2.classList.toggle("unhideBlock");
    } else {
      dropDownMenu1.classList.toggle("unhideBlock");
      dropDownMenu2.classList.toggle("unhideBlock");
    }
  }

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

        {/* LANGUAGE TOGGLE */}

        <Col className="NavbarColButtons">
          <Col className="dropDownMenu1 unhideBlock">
            <Dropdown>
              <Dropdown.Toggle className="ButtonEng" id="dropdown-basic">
                <GlobeAmericas className="langicon" /> EN
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropmenu">
                <Dropdown.Item
                  className="dropitem"
                  href="#"
                  onClick={changeLang}
                >
                  RU
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className="dropDownMenu2">
            <Dropdown>
              <Dropdown.Toggle className="ButtonRu" id="dropdown-basic">
                <GlobeAmericas className="langicon" /> RU
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropmenu">
                <Dropdown.Item
                  className="dropitem"
                  href="#"
                  onClick={changeLang}
                >
                  EN
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* LANGUAGE TOOGLE ICON */}

          <Col className="colForButtonLang">
            <Dropdown>
              <Dropdown.Toggle className="buttonForLang" id="dropdown-basic">
                <GlobeAmericas color="white" className="langIcon2" size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropmenu2">
                <Dropdown.Item className="dropitem" href="#">
                  EN
                </Dropdown.Item>
                <Dropdown.Item className="dropitem" href="#">
                  RU
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

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
