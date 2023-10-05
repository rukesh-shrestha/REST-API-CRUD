import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Done",
  });
});

app.listen(3000, () =>
  console.log(`The app is hosted on http://localhost:3000`)
);
