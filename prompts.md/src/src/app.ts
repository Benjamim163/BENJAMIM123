import express from "express";
import dotenv from "dotenv";
import copilotRoutes from "./routes/copilot.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/copilot", copilotRoutes);

export default app;
