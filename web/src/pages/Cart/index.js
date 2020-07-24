import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Container, Content, Group } from "./styles";

import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem";
import Button from "../../components/Button";

import { formatPrice } from "../../utils";

function Cart() {
  const [products, setProducts] = useState([]);
  const [size, setSize] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const list = JSON.parse(localStorage.getItem("cart"));
  const sizeLocal = localStorage.length;

  const history = useHistory();

  useEffect(() => {
    setProducts(list);
    setSize(sizeLocal);
  }, [list, sizeLocal]);

  let calculeSubTotal = 0;

  useEffect(() => {
    setSubTotal(calculeSubTotal);
  }, [calculeSubTotal, size]);

  function handleSubTotal() {
    return list
      .map((product) => {
        const price = Number(product.price);
        return price;
      })
      .reduce((total, item) => {
        return total + item;
      }, 0);
  }

  calculeSubTotal = handleSubTotal();

  function handleCart() {
    alert("Compra finalizada, obrigada pela preferência!");
    localStorage.removeItem("cart");
    history.push("/");
    setProducts([]);
    setSize(0);
  }

  return (
    <Container>
      <Navbar />

      <Content>
        <Group column>
          {sizeLocal !== 0 || sizeLocal !== null
            ? products.map((item) => <CartItem product={item} key={item.id} />)
            : "Carrinho vazio"}
        </Group>

        <Group column>
          <h3>Total: {formatPrice(subTotal)}</h3>

          <Button value="Finalizar compra" click={() => handleCart} />
        </Group>
      </Content>
    </Container>
  );
}

export default Cart;
