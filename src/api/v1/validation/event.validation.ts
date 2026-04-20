import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     CreateEventRequest:
 *       type: object
 *       required:
 *         - title
 *         - date
 *         - location
 *       properties:
 *         title:
 *           type: string
 *           example: "Hackathon"
 *         date:
 *           type: string
 *           example: "2026-07-20"
 *         location:
 *           type: string
 *           example: "Winnipeg"
 *         description:
 *           type: string
 *           example: "Student coding event"
 *     UpdateEventRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: "Updated Hackathon"
 *         date:
 *           type: string
 *           example: "2026-08-10"
 *         location:
 *           type: string
 *           example: "Brandon"
 *         description:
 *           type: string
 *           example: "Updated event details"
 */

export const createEventSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  date: Joi.string().required(),
  location: Joi.string().min(2).max(100).required(),
  description: Joi.string().allow("").optional()
});

export const updateEventSchema = Joi.object({
  title: Joi.string().min(3).max(100).optional(),
  date: Joi.string().optional(),
  location: Joi.string().min(2).max(100).optional(),
  description: Joi.string().allow("").optional()
}).min(1);
