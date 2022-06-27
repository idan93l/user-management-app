require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/routes.js");

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);

mongoose.connect(uri, () => console.log("connected to mongoDB"));

app.listen(PORT, () => {
  console.log(`server runs on port ${PORT}`);
});