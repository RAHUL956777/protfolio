import dotenv from "dotenv";
import { app } from "./app.js";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 4000;
console.log("MONGO_URI:", process.env.MONGO_URI); // Add this line for debugging

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

const MONGO_URI = process.env.MONGO_URI;
console.log("MONGO_URI:", MONGO_URI); // Add this line for debugging

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
