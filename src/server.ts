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
  res.send(
    "Welcome to the API! Please refer to the documentation for usage instructions.",
  );
});

app.use("/api", protect, router);
app.post("/users", createUser);
app.post("/login", loginUser);

app.use((err, req, res) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "Unauthorized" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "Invalid Input" });
  } else {
    res
      .status(500)
      .json({ message: "Server Error - Something went wrong on our end" });
  }
});

export default app;
