import * as user from "../../src/handlers/user";

describe("user handler", () => {
  it("It should create a new user", async () => {
    const req = { body: { username: "hello", password: "hi" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    await user.createUser(req, res, () => {});
  });
});
