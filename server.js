const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
//Route files

const subjects = require("./routes/subjects");

dotenv.config({ path: "./config/config.env" });

const app = express();
//dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//Mount routers
//add the url and connect it to subjects file that was brought in above
app.use("/api/v1/subjects", subjects);

//in order to start a server we need to listen to a port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
