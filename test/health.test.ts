import request from "supertest";
import app from "../src/app";

describe("Health Endpoint", () => {

  it("should return 200 and health details", async () => {
    const response = await request(app).get("/health");

    const expectedStatus = 200;

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toHaveProperty("status", "OK");
    expect(response.body).toHaveProperty("timestamp");
    expect(response.body).toHaveProperty("uptime");
  });

});