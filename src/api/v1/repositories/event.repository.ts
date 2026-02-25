import { db } from "../../../config/firebaseConfig";

interface Event {
  id?: string; // Optional for creation
  title: string;
  description: string;
  date: string; // Or Date if using timestamps
  // Add other fields as per your schema
}

const collection = db.collection("events");

export const createEventRepo = async (data: Omit<Event, 'id'>) => {
  const docRef = await collection.add(data);
  return { id: docRef.id, ...data } as Event;
};

export const getAllEventsRepo = async (): Promise<Event[]> => {
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  } as Event));
};

export const getEventByIdRepo = async (id: string): Promise<Event | null> => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Event;
};

export const updateEventRepo = async (id: string, data: Partial<Event>): Promise<Event | null> => {
  await collection.doc(id).update(data);
  return getEventByIdRepo(id);
};

export const deleteEventRepo = async (id: string) => {
  await collection.doc(id).delete();
};