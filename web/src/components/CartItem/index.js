import React from "react";

import { Container, Content, Group, Photo } from "./styles";

import { formatPrice } from "../../utils";

function CartItem({ product }) {
  const url = product.image_url;

  return (
    <Container>
      <Content>
        <Photo url={url}></Photo>

        <Group column>
          <h2>{product.name}</h2>

          <Group>
            <span>{formatPrice(product.price)}</span>

            <span>Qtd: 1</span>
          </Group>
        </Group>
      </Content>
    </Container>
  );
}

export default CartItem;
