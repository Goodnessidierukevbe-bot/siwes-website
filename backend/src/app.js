import express from "express";
import transctionRoutes from "./routes/transactionRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my site");
});

app.use("/api/transactions", transctionRoutes);
app.use(cors({ origin: "http://127.0.0.1:5500" }));

app.use((error, req, res, next) => {
  const status =
    error.name === "ValidationError" ||
    error.name === "CastError" ||
    error.status === 400
      ? 400
      : 500;

  res.status(status).json({
    message: error.message,
  });
});
export default app;
