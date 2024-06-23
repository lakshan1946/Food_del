import mongoose from "mongoose";

//connecting to the database
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lakshan:Lm1946130@cluster0.g7yv4dl.mongodb.net/food_del"
    )
    .then(() => console.log("DB connected"));
};
