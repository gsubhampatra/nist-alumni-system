import express from "express";
import { configDotenv } from "dotenv";
import logRequest from "./middlewares/logRequestMiddleware.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
configDotenv();
const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/*", logRequest);
app.get("/", (req, res) => {
  res.json({
    success: true,
    messsage: "Welcome to nist alumni API",
    info: `Hii ${req.ip}`,
  });
});

app.use("/api/user", userRouter);

export default app;
