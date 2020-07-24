import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import crypto from "crypto";

import { Container, Content, Group, Photo } from "./styles";

import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import List from "../../components/List";

import api from "../../services/api";
import { formatPrice } from "../../utils";

function Product() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const hash = crypto.randomBytes(6).toString("hex");

  useEffect(() => {
    api.get(`/product/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  function handleCart() {
    const list = JSON.parse(localStorage.getItem("cart"));

    if (list === null) {
      localStorage.setItem(
        "cart",
        JSON.stringify([{ ...product, cart_id: hash }])
      );

      alert("O produto foi adicionado ao carrinho.");
    } else {
      list.push({ ...product, cart_id: hash });
      localStorage.setItem("cart", JSON.stringify(list));

      alert("O produto foi adicionado ao carrinho.");
    }
  }

  return (
    <Container>
      <Navbar />
      <Content>
        <Photo>
          <img src={product.image_url} alt="" />
        </Photo>
        <Group column>
          <h2>{product.name}</h2>
          <span>by Lett Store</span>

          <h3>Especificações:</h3>
          <List text={product.description} />
        </Group>
        <Group>
          <Group column>
            <p>{formatPrice(product.price)}</p>
            <p>em até 12x sem juros</p>
          </Group>

          <Button value="Comprar" click={() => handleCart} />
        </Group>
      </Content>
    </Container>
  );
}

export default Product;
