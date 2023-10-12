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

export const getParticularProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    if (!product) {
      res.status(404);
      throw new Error("Product Not Found");
    }
    res.status(200).json({
      status: "SUCCESS",
      data: {
        product,
      },
    });
  } catch (error) {
    res.json({
      status: error.message === "Product Not Found" ? `FAIL` : `ERROR`,
      data: {
        message: error.message,
      },
    });
  }
};

export const updateParticularData = async (req, res) => {
  try {
    if (Object.keys(req.body).length < 1) {
      res.status(400);
      throw new Error("Empty JSON Body");
    }
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );
    if (!product) {
      res.status(404);
      throw new Error("Product Not Found");
    }
    res.status(200).json({
      status: "SUCCESS",
      data: {
        product,
      },
    });
  } catch (error) {
    res.json({
      status: error.message === "Empty JSON Body" ? `FAIL` : `ERROR`,
      data: {
        message: error.message,
      },
    });
  }
};

export const deleteParticularProduct = async (req, res) => {
  try {
    const data = await Product.findOneAndDelete({
      _id: req.params.id,
    });
    if (data) {
      res.status(200).json({
        status: "SUCCESS",
        data: {
          message: "Deleted",
        },
      });
    } else {
      res.status(404);
      throw new Error("Data Not Found");
    }
  } catch (error) {
    res.json({
      status: error.message === "Data Not Found" ? `FAIL` : `ERROR`,
      data: {
        message: error.message,
      },
    });
  }
};
