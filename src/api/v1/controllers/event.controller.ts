import { Request, Response } from "express";

// Temporary in-memory storage (replace with Firestore later)
let events: any[] = [];
let eventCounter = 1;

/**
 * CREATE EVENT
 */
export const createEvent = async (req: Request, res: Response) => {
  try {
    const id = `evt_${String(eventCounter).padStart(6, "0")}`;
    eventCounter++;

    const now = new Date().toISOString();

    const newEvent = {
      id,
      ...req.body, // use validated body
      createdAt: now,
      updatedAt: now,
    };

    events.push(newEvent);

    return res.status(201).json({
      message: "Event created successfully",
      data: newEvent,
    });
  } catch (error) {
    console.error("CREATE ERROR:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

/**
 * GET ALL EVENTS
 */
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Events fetched successfully",
      data: events,
    });
  } catch (error) {
    console.error("GET ALL ERROR:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

/**
 * GET EVENT BY ID
 */
export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const event = events.find((e) => e.id === id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    return res.status(200).json({
      message: "Event fetched successfully",
      data: event,
    });
  } catch (error) {
    console.error("GET BY ID ERROR:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

/**
 * UPDATE EVENT
 */
export const updateEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const index = events.findIndex((e) => e.id === id);

    if (index === -1) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    events[index] = {
      ...events[index],
      ...req.body,
      updatedAt: new Date().toISOString(),
    };

    return res.status(200).json({
      message: "Event updated successfully",
      data: events[index],
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

/**
 * DELETE EVENT
 */
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const index = events.findIndex((e) => e.id === id);

    if (index === -1) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    events.splice(index, 1);

    return res.status(200).json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};