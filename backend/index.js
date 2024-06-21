import dotenv from "dotenv";
import { app } from "./app.js";
import DBconnect from "./utils/db.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

DBconnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
