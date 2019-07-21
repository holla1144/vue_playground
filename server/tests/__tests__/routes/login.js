import request from "supertest";

import APP from "../../../src/server";
import User from "../../../src/models/User";
import router from "../../../src/router";

APP.use(router);

describe("/api/login", () => {
  const userData = {
    username: "Hank Hill",
    password: "propane"
  };

  it("Logs in an existing user", async (done) => {
    const newUser = new User(userData);
    await newUser.save();

    await request(APP)
      .post("/api/login")
      .send(userData)
      .expect(200)
      .expect(response => expect(response.body.token).not.toBe(undefined))
      .then(() => done())
  });

  it("Doesn't log in with incorrect password", async (done) => {
    const newUser = new User(userData);
    await newUser.save();

    await request(APP)
      .post("/api/login")
      .send(Object.assign(userData, { password: "charcoal" }))
      .expect(401)
      .expect(response => expect(response.body.token).toBe(undefined))
      .expect(response => expect(response.body.message).toBe("Incorrect password"))
      .then(() => done());
  });
});
