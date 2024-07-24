const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = 10000;
const app = express();

const userRoute = require("./Routes/User");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log(`DB connected successfully `))
  .catch((err) => `Error in the connection ${err}`);

app.use('/api/v1/users', userRoute);

app.listen(port, () => console.log(`running on port ${port}`));
