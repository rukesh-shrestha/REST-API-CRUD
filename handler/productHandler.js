export const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "SUCCESS",
    data: {
      message: "Done",
    },
  });
};
