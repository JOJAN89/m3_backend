import express from "express";
import { validate } from "../middleware/validate.middleware";
import { createEventSchema } from "../validation/event.validation";
import * as eventController from "../controllers/event.controller";

const router = express.Router();

/**
 * CREATE EVENT
 * Must match video validation exactly
 */
router.post(
  "/events",
  validate(createEventSchema),
  eventController.createEvent
);

/**
 * GET ALL EVENTS
 */
router.get("/events", eventController.getAllEvents);

/**
 * GET EVENT BY ID
 */
router.get("/events/:id", eventController.getEventById);

/**
 * UPDATE EVENT
 */
router.put("/events/:id", eventController.updateEvent);

/**
 * DELETE EVENT
 */
router.delete("/events/:id", eventController.deleteEvent);

export default router;