import express from "express";
import {
  UserRegister,
  GetUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/user.controllers.js";

const routers = express.Router();

routers.post("/create", UserRegister);
routers.get("/read", GetUser);
routers.put("/update/:id", UpdateUser);
routers.delete("/delete/:id", DeleteUser);

export default routers;
