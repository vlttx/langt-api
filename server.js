const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/api/v1/subjects", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all subjects" });
});

app.post("/api/v1/subjects", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new subject" });
});

app.put("/api/v1/subjects/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update subject ${req.params.id}` });
});

app.get("/api/v1/subjects/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Get subject ${req.params.id}` });
});

app.delete("/api/v1/subjects/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete subject ${req.params.id}` });
});

//in order to start a server we need to listen to a port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
