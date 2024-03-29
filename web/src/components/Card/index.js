import React from "react";
import { Link } from "react-router-dom";

import { Container, Photo, Infos, Group } from "./styles";

import { formatPrice } from "../../utils";

function Card({ product }) {
  const shortDescription = product.description.split(",").slice(0, 3).join(",");

  return (
    <Container>
      <Photo>
        <img src={product.image_url} alt="" />
      </Photo>

      <Infos>
        <Group>
          <h2>{product.name}</h2>
          <p>{shortDescription}</p>
        </Group>

        <Group>
          <span>{formatPrice(product.price)}</span>

          <Link to={`/product/${product.id}`}>
            <button>Ver</button>
          </Link>
        </Group>
      </Infos>
    </Container>
  );
}

export default Card;
