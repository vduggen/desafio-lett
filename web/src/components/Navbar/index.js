import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { Container, Content, Logo, Nav } from "./styles";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Logo da Lett store" />
          </Link>
        </Logo>

        <Nav>
          <Link to="/cart">
            <span id="cart"></span>
            <FiShoppingCart color="#fff" size={32} />
          </Link>
        </Nav>
      </Content>
    </Container>
  );
}

export default Navbar;
