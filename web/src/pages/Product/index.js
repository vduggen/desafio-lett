import React from "react";
import { FiHeart } from "react-icons/fi";

import { Container, Content, Group, Photo } from "./styles";

import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

function Product() {
  return (
    <Container>
      <Navbar />
      <Content>
        <Photo>
          <span>
            <FiHeart color="#fff" size={24} />
          </span>
          <img
            src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80"
            alt=""
          />
        </Photo>
        <Group column>
          <h2>Notebook Asus Espacial 2.0</h2>
          <span>Linha A 101 - Básico</span>

          <h3>Especificações:</h3>
          <ul>
            <li>Intel Core i3</li>
            <li>1TB de memória interna (HD)</li>
            <li>4GB de memória RAM</li>
            <li>Placa de vídeo dedicada (GTX420s)</li>
            <li>Entradas (HDMI e USB 3.0)</li>
            <li>Wifi e Bluetooth</li>
          </ul>
        </Group>
        <Group>
          <Group column>
            <p>R$ 2129,99</p>
            <p>em até 12x sem juros</p>
          </Group>

          <Button value="Comprar" />
        </Group>
      </Content>
    </Container>
  );
}

export default Product;
