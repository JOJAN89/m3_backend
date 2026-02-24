import express from "express";
import eventRoutes from "./api/v1/routes/event.routes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1", eventRoutes);

// Health check (optional but helpful)
app.get("/", (req, res) => {
  res.send("Event Registration API is running");
});

export default app;