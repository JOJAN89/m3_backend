import Joi from "joi";

export const createEventSchema = Joi.object({
  name: Joi.string()
    .min(3)          // ← replace if video shows different
    .max(100)        // ← replace if video shows different
    .required()
    .messages({
      "any.required": "Name is required",
      "string.empty": "Name cannot be empty",
      "string.min": "Name must be at least 3 characters",
      "string.max": "Name must be at most 100 characters",
    }),

  capacity: Joi.number()
    .integer()
    .min(1)          // ← replace if video shows different
    .required()
    .messages({
      "number.base": "Capacity must be a number",
      "number.min": "Capacity must be at least 1",
    }),

});

