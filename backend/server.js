import dotenv from "dotenv";
import { app } from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 4000;
dotenv.config();

// connection of mongodb
 mongoose
    .connect("mongodb://127.0.0.1:27017/protfolio", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
    });

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
