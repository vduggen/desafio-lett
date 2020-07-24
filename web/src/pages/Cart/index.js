import React from "react";

import { Container, Content, Group } from "./styles";

import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem";
import Button from "../../components/Button";

function Cart() {
  return (
    <Container>
      <Navbar />

      <Content>
        <Group column>
          <CartItem />
          <CartItem />
        </Group>

        <Group column>
          <h3>Subtotal: R$ 2129,99</h3>

          <p>Calcular frete:</p>
          <form action="">
            <input type="text" id="shipping" name="shipping" />
            <Button value="OK" />
          </form>

          <Group column>
            <h3>Total: R$ 2129,99</h3>

            <Button value="Finalizar compra" />
          </Group>
        </Group>
      </Content>
    </Container>
  );
}

export default Cart;
