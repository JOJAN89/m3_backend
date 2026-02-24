import { createEventSchema } from "../src/api/v1/validation/event.validation";

describe("Create Event Validation", () => {

  it("should fail if name is missing", () => {
    // Arrange
    const payload = {
      date: "2030-12-01T10:00:00.000Z",
      capacity: 50,
    };

    // Act
    const { error } = createEventSchema.validate(payload);

    // Assert
    expect(error).toBeDefined();
  });

  it("should fail if capacity is less than minimum", () => {
    // Arrange
    const payload = {
      name: "Tech Conference",
      date: "2030-12-01T10:00:00.000Z",
      capacity: 0,
    };

    // Act
    const { error } = createEventSchema.validate(payload);

    // Assert
    expect(error).toBeDefined();
  });

  it("should fail if date is invalid format", () => {
    // Arrange
    const payload = {
      name: "Tech Conference",
      date: "invalid-date",
      capacity: 50,
    };

    // Act
    const { error } = createEventSchema.validate(payload);

    // Assert
    expect(error).toBeDefined();
  });

  it("should pass with valid payload", () => {
    // Arrange
    const payload = {
      name: "Tech Conference",
      date: "2030-12-01T10:00:00.000Z",
      capacity: 50,
    };

    // Act
    const { error, value } = createEventSchema.validate(payload);

    // Assert
    expect(error).toBeUndefined();
    expect(value.name).toBe("Tech Conference");
  });

});