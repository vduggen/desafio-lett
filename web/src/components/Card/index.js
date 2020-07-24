import React from "react";
import { Link } from "react-router-dom";

import { Container, Photo, Infos, Group } from "./styles";

import Button from "../Button";

function Card({ product }) {
  return (
    <Container>
      <Photo>
        <img src={product.image_url} alt="" />
      </Photo>

      <Infos>
        <Group>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </Group>

        <Group>
          <span>R$ {product.price}</span>

          <Link to={`/product/${product.id}`}>
            <Button value="Ver" />
          </Link>
        </Group>
      </Infos>
    </Container>
  );
}

export default Card;
