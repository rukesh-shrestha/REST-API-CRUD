import mongoose from "mongoose";
const checkObjectID = (req, res, next, val) => {
  try {
    if (mongoose.Types.ObjectId.isValid(val)) {
      next();
    } else {
      res.status(401);
      throw new Error("Request Parameter is not Valid");
    }
  } catch (error) {
    return res.json({
      status: error.message === "Request Parameter is Valid" ? `FAIL` : `ERROR`,
      data: {
        message: error.message,
      },
    });
  }
};

export default checkObjectID;
