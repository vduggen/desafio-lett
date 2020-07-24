import React, { useEffect, useState } from "react";

import { Container, Banner, Text, Cards } from "./styles";

import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

import api from "../../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  console.log(products);

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
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </Cards>
    </Container>
  );
}

export default Home;
