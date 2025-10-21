import express, { Application } from "express";
import cors from "cors";
import dbConnection from "./utils/db";

const app: Application = express();

app.use(
  cors({
    origin: ["*", "http:lo"],
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);

dbConnection()
app.get("/", (req, res) => {
  res.send("home");
});

app.use(express.json());

export default app