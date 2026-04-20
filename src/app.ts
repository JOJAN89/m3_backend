import express from "express";
import eventRoutes from "./api/v1/routes/event.routes";

const app = express();

// Middleware
app.use(express.json());

// Health route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Event routes
app.use("/api/v1", eventRoutes);

export default app;

import helmet from "helmet";
import { helmetOptions } from "./config/helmetOptions";

app.use(helmet(helmetOptions));