const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

//Load environment vars
dotenv.config({ path: "./config/config.env" });

//Connect to database
connectDB();

//Route files

const subjects = require("./routes/subjects");

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

const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);

//handle unhandled promise rejections
//we will listen to a specific event -- unhandledRejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close server and exit process if this happens
  server.close(() => process.exit(1)); //exit with failure (1)
});
