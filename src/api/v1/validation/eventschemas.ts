import Joi from "joi";

// ...existing code...
create: {
  body: Joi.object({
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
      .messages({
        "any.required": "Exact message from video",
        "string.empty": "Exact message",
        "string.min": "Exact message",
        "string.max": "Exact message",
      }),

    capacity: Joi.number()
      .integer()
      .min(1)
      .required()
      .messages({
        "number.base": "Exact message",
// ...existing code...