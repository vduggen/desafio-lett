import React from "react";
import { FiTrash2 } from "react-icons/fi";

import { Container, Content, Group, Photo, Controll } from "./styles";

function CartItem() {
  return (
    <Container>
      <Content>
        <Photo></Photo>

        <Group column>
          <h2>Notebook Asus Especial 2.0</h2>

          <Group>
            <span>R$ 2129,99</span>

            <Controll>
              <span>Qtd: 1</span>

              <FiTrash2 color="#ed161f" size={24} />
            </Controll>
          </Group>
        </Group>
      </Content>
    </Container>
  );
}

export default CartItem;
