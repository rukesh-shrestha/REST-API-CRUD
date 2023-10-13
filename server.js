import express from "express";
const app = express();
import "dotenv/config";
import connectDB from "./config/dbConnector.js";
import productRouter from "./routes/productRoutes.js";
import morgan from "morgan";
import swaggerui from "swagger-ui-express";
import yaml from "yamljs";
const PORT = process.env.PORT;

//Connecting Database
connectDB();

//Configuring the Swagger API Documentation
const swaggerDocument = yaml.load("./swagger/swaggerAPI.yml");

//Middleware
app.use(express.json());
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));
app.use(morgan("dev"));
app.use("/api/products", productRouter);

app.listen(PORT, () =>
  console.log(`The app is hosted on http://localhost:${PORT}`)
);
