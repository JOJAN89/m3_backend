import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validate = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      res.status(400).json({
        message: "Validation error",
        details: error.details.map((detail) => detail.message)
      });
      return;
    }

    // replace body with validated/sanitized data
    req.body = value;

    next();
  };
};