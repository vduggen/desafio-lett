import React from "react";

import { Container, Banner, Text, Cards } from "./styles";

import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

function Home() {
  return (
    <Container>
      <Navbar />

      <Banner>
        <Text>
          <h1>
            Todos os notebooks com até 30% de <strong>desconto</strong>
          </h1>
        </Text>
      </Banner>

      <Cards>
        <Card id="1" />
        <Card id="2" />
        <Card id="3" />
      </Cards>
    </Container>
  );
}

export default Home;
