import swaggerJSDoc from "swagger-jsdoc";
import { env } from "./env";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: env.appName,
      version: "1.0.0",
      description:
        "API documentation for the Events API with Joi validation, Helmet, CORS, and dotenv."
    },
    servers: [
      {
        url: env.apiBaseUrl,
        description: "Local development server"
      }
    ]
  },
  apis: [
    "src/api/v1/routes/*.ts",
    "src/api/v1/validation/*.ts"
  ]
};

export const swaggerSpec = swaggerJSDoc(options);