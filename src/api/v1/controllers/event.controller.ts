import { Request, Response } from "express";

// Temporary in-memory storage (replace with Firestore later)
let events: any[] = [];
let eventCounter = 1;

export const createEvent = async (req: Request, res: Response) => {
  try {
    const {
      name,
      date,
      capacity,
      registrationCount,
      status,
      category,
    } = req.body;

    // Generate ID like evt_000001
    const id = `evt_${String(eventCounter).padStart(6, "0")}`;
    eventCounter++;

    const now = new Date().toISOString();

    const newEvent = {
      id,
      name,
      date,
      capacity,
      registrationCount,
      status,
      category,
      createdAt: now,
      updatedAt: now,
    };

    events.push(newEvent);

    return res.status(201).json({
      message: "Event created",
      data: newEvent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
