const express = require("express");
const colors = require('colors')
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db')
const port = process.env.PORT;

const goalsRoutes = require("./routes/goalRoutes");

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalsRoutes);

app.use(errorHandler);

app.listen(port || 5000, () => {
  console.log(`Server listening on port ${port}...`.magenta.underline);
});
