import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

import { Container, Content, Group, Photo } from "./styles";

import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

import api from "../../services/api";

function Product() {
  const [product, setProduct] = useState({});
  const [like, setLike] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    api.get(`/product/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <Container>
      <Navbar />
      <Content>
        <Photo>
          <span>
            <FiHeart color="#fff" size={24} />
          </span>
          <img src={product.image_url} alt="" />
        </Photo>
        <Group column>
          <h2>{product.name}</h2>
          <span>{product.created_at}</span>

          <h3>Especificações:</h3>
          <ul>
            {/* <li>Intel Core i3</li>
            <li>1TB de memória interna (HD)</li>
            <li>4GB de memória RAM</li>
            <li>Placa de vídeo dedicada (GTX420s)</li>
            <li>Entradas (HDMI e USB 3.0)</li>
            <li>Wifi e Bluetooth</li> */}
            {product.description}
          </ul>
        </Group>
        <Group>
          <Group column>
            <p>R$ {product.price}</p>
            <p>em até 12x sem juros</p>
          </Group>

          <Button value="Comprar" />
        </Group>
      </Content>
    </Container>
  );
}

export default Product;
