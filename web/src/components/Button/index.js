import React from "react";

import { Container } from "./styles";

function Button({ value, click }) {
  return <Container onClick={click()}>{value}</Container>;
}

export default Button;
