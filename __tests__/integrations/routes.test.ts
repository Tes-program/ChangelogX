import app from "../../src/server";
import request from "supertest";

describe("GET /", () => {
  it("it should send some data", async () => {
    const res = await request(app).get("/");
    expect(res.body.message).toBe("hello");
  });
});
