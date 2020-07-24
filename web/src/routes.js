import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/product/:id" component={Product} />
    </BrowserRouter>
  );
}

export default Routes;
