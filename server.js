import express from "express";
const app = express();
import "dotenv/config";
import productRouter from "./routes/productRoutes.js";

const PORT = process.env.PORT;

//Middleware
app.use("/api/products", productRouter);

app.listen(PORT, () =>
  console.log(`The app is hosted on http://localhost:${PORT}`)
);
