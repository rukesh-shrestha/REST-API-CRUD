import express from "express";
import { getAllProducts, addNewProducts } from "../handler/productHandler.js";
const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(addNewProducts);

export default productRouter;
