import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent
} from "../controllers/event.controller";
import { validate } from "../middleware/validate.middleware";
import {
  createEventSchema,
  updateEventSchema
} from "../validation/event.validation";

const router = Router();

/**
 * @openapi
 * /api/v1/events:
 *   get:
 *     tags:
 *       - Events
 *     summary: Get all events
 *     description: Returns all events.
 *     responses:
 *       200:
 *         description: Events retrieved successfully
 */
router.get("/", getAllEvents);

/**
 * @openapi
 * /api/v1/events/{id}:
 *   get:
 *     tags:
 *       - Events
 *     summary: Get event by ID
 *     description: Returns one event by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       200:
 *         description: Event retrieved successfully
 *       404:
 *         description: Event not found
 */
router.get("/:id", getEventById);

/**
 * @openapi
 * /api/v1/events:
 *   post:
 *     tags:
 *       - Events
 *     summary: Create event
 *     description: Creates a new event.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: "Hackathon"
 *             date: "2026-07-20"
 *             location: "Winnipeg"
 *             description: "Student coding event"
 *     responses:
 *       201:
 *         description: Event created successfully
 *       400:
 *         description: Validation error
 */
router.post("/", validate(createEventSchema), createEvent);

/**
 * @openapi
 * /api/v1/events/{id}:
 *   put:
 *     tags:
 *       - Events
 *     summary: Update event
 *     description: Updates an existing event.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: "Updated Event"
 *             location: "Brandon"
 *     responses:
 *       200:
 *         description: Event updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Event not found
 */
router.put("/:id", validate(updateEventSchema), updateEvent);

/**
 * @openapi
 * /api/v1/events/{id}:
 *   delete:
 *     tags:
 *       - Events
 *     summary: Delete event
 *     description: Deletes an event by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "1"
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       404:
 *         description: Event not found
 */
router.delete("/:id", deleteEvent);

export default router;