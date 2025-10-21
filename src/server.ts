import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(
  cors({
    origin: ["*", "http:lo"],
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("home");
});

app.use(express.json());

export default app