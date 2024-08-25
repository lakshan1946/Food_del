import express from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4001;

//middleware
app.use(express.json()); //pass frontend data to backend in json format
app.use(cors()); //can access backend from frontend

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); //to access images from frontend
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

//using get method to check if server is working
app.get("/", (req, res) => {
  res.send("APT is working");
});

//to run express server
app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});
