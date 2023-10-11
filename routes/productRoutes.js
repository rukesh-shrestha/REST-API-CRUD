import express from "express";
import checkObjectID from "../middleware/paramsMiddleware.js";
import {
  getAllProducts,
  addNewProducts,
  getParticularProduct,
  updateParticularData,
} from "../handler/productHandler.js";
const productRouter = express.Router();

//middleware
productRouter.param("id", checkObjectID);
productRouter.route("/").get(getAllProducts).post(addNewProducts);
productRouter
  .route("/:id")
  .get(getParticularProduct)
  .patch(updateParticularData);

export default productRouter;
