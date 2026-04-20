import cors from "cors";
import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { corsOptions } from "./config/corsOptions";
import { env } from "./config/env";
import { helmetOptions } from "./config/helmetOptions";
import { swaggerSpec } from "./config/swagger";
import eventRoutes from "./api/v1/routes/event.routes";
import healthRoutes from "./api/v1/routes/health.routes";

const app = express();

app.use(helmet(helmetOptions));
app.use(cors(corsOptions));

app.use(express.json())
;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (_req, res) => {
  res.status(200).json({
    message: `${env.appName} is running`
  });
});

app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/events", eventRoutes);

export default app;