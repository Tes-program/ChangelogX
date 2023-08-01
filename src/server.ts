import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createUser, loginUser } from "./handlers/user";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Hello World!");
  res.json({ message: "Hello World!" });
});

app.use("/api", protect, router);
app.post("/users", createUser);
app.post("/login", loginUser);

export default app;
