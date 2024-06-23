import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    //cb = callback
    return cb(null, `${Date.now()}${file.originalname}`); //rename file
  },
});

const upload = multer({ storage: storage });
//send data on the server
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood); //get list of food items

foodRouter.post("/remove", removeFood);

export default foodRouter;
