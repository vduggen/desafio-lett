import React from "react";
import { FiShoppingCart } from "react-icons/fi";

import { Container, Content, Logo, Nav } from "./styles";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="Logo da Lett store" />
        </Logo>

        <Nav>
          <FiShoppingCart color="#fff" size={32} />
        </Nav>
      </Content>
    </Container>
  );
}

export default Navbar;
