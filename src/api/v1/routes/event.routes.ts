import express from "express";
import { validate } from "../middleware/validate.middleware"; 
import { createEventSchema } from "../validation/event.validation";
import * as eventController from "../controllers/event.controller";

const router = express.Router();

router.post(
  "/events",
  validate(createEventSchema),
  eventController.createEvent
);

export default router;