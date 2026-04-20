import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || "3000",
  nodeEnv: process.env.NODE_ENV || "development",
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  apiBaseUrl: process.env.API_BASE_URL || "http://localhost:3000",
  appName: process.env.APP_NAME || "Events API"
};