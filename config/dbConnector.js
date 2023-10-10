import mongoose from "mongoose";

const connectDB = async (req, res) => {
  try {
    const connect = await mongoose.connect(
      process.env.DATABASE_CONNECTION_STRING
    );
    console.log(
      `Database Connected: ${connect.connection.host} ${connect.connection.name}`
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "ERROR",
      data: {
        message: error.message,
      },
    });
  }
};

export default connectDB;
