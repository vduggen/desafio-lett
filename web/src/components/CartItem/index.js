import React, { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

import { Container, Content, Group, Photo, Controll } from "./styles";

import { formatPrice, handleActive } from "../../utils";

function CartItem({ product }) {
  const [products, setProducts] = useState([]);

  const url = product.image_url;

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("cart"));
    setProducts(list);
  }, []);

  function removeProduct() {
    const newList = products.filter((item) => item.id !== product.id);
    if (newList.length === 0) {
      localStorage.removeItem("cart");
      handleActive(false);
      alert("Produto deletado!");
      return;
    }
    localStorage.setItem("cart", JSON.stringify(newList));
    handleActive(false);
    alert("Produto deletado!");
  }

  return (
    <Container>
      <Content>
        <Photo url={url}></Photo>

        <Group column>
          <h2>{product.name}</h2>

          <Group>
            <span>{formatPrice(product.price)}</span>

            <Controll>
              <span>Qtd: 1</span>
              <button onClick={removeProduct}>
                <FiTrash2 color="#ed161f" size={24} />
              </button>
            </Controll>
          </Group>
        </Group>
      </Content>
    </Container>
  );
}

export default CartItem;
