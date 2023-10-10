import express from "express";
const app = express();
import "dotenv/config";
import connectDB from "./config/dbConnector.js";
import productRouter from "./routes/productRoutes.js";

const PORT = process.env.PORT;

//Connecting Database
connectDB();

//Middleware
app.use(express.json());
app.use("/api/products", productRouter);

app.listen(PORT, () =>
  console.log(`The app is hosted on http://localhost:${PORT}`)
);
