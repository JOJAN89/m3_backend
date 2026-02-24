import express from "express";
import eventRoutes from "./api/v1/routes/event.routes";

const app = express();

// 🔥 THIS LINE IS MANDATORY
app.use(express.json());

app.use("/api/v1", eventRoutes);

export default app;