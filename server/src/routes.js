import express from "express";

const routes = express.Router();

routes.get("/", ProductController.index);
routes.get("/product/:id", ProductController.show);

export default routes;
