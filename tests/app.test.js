const request = require("supertest");
const app = require("../server");

describe("DevOps Pipeline App", () => {
  test("GET /health debe responder con status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
  });

  test("GET / debe servir la página principal", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("DevOps Pipeline");
    expect(res.text).toContain("2023-0682");
  });
});
