import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "SUCCESS",
      totalproduct: products.length,
      data: {
        products,
      },
    });
  } catch (error) {
    res.json({
      status: "ERROR",
      data: {
        message: error.message,
      },
    });
  }
};

export const addNewProducts = async (req, res) => {
  try {
    const { name, brand, description, price } = req.body;
    if (!name || !brand || !description || !price) {
      res.status(400);
      throw new Error("missing required field");
    }

    const products = await Product.find({ name: name, brand: brand });

    if (products.length > 0) {
      res.status(401);
      throw new Error("Product Already Exist");
    } else {
      const products = await Product.create(req.body);
      res.status(200).json({
        status: "SUCCESS",
        message: "created",
        data: {
          products,
        },
      });
    }
  } catch (error) {
    res.json({
      status: error.message === "Product Already Exist" ? `FAIL` : `ERROR`,
      data: {
        message: error.message,
      },
    });
  }
};
