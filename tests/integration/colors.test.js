const request = require("supertest");
const app = require("../../app");

describe("GET /api/colors", () => {
  it("should return list of colors", async () => {
    const res = await request(app).get("/api/colors");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty("name");
  });
});