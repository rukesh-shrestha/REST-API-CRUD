import express from "express";
import { getAllProducts } from "../handler/productHandler.js";
const productRouter = express.Router();

productRouter.route("/").get(getAllProducts);

export default productRouter;
