import React from "react";
import { Link } from "react-router-dom";

import { Container, Photo, Infos, Group } from "./styles";

import Button from "../Button";

function Card({ id }) {
  return (
    <Container>
      <Photo>
        <img
          src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80"
          alt=""
        />
      </Photo>

      <Infos>
        <Group>
          <h2>Notebook Asus</h2>
          <p>Intel core i3, 1Tb de HD, 4Gb de RAM e placa de video dedicada.</p>
        </Group>

        <Group>
          <span>R$ 2129,99</span>

          <Link to={`/product/${id}`}>
            <Button value="Ver" />
          </Link>
        </Group>
      </Infos>
    </Container>
  );
}

export default Card;
