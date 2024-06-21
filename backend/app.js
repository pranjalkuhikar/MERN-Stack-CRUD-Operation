import express from "express";
import cors from "cors";
import routers from "./routes/user.route.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORE,
    Credential: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/api", routers);

export { app };
