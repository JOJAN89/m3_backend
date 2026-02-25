import * as repo from "../repositories/event.repository";

export const createEventService = async (data: any) => {
  try {
    return await repo.createEventRepo(data);
  } catch (error) {
    throw new Error("Failed to create event");
  }
};

export const getAllEventsService = async () => {
  return repo.getAllEventsRepo();
};

export const getEventByIdService = async (id: string) => {
  return repo.getEventByIdRepo(id);
};

export const updateEventService = async (id: string, data: any) => {
  return repo.updateEventRepo(id, data);
};

export const deleteEventService = async (id: string) => {
  return repo.deleteEventRepo(id);
};