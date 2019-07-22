require('dotenv').config();
import request from "supertest";

import APP from "../../../src/server";
import router from "../../../src/router";
import User from "../../../src/models/User";

APP.use(router);

describe("/api/user/new", () => {
  const userData = { username: "Maxo Kreame", password: "BBanks" };

  it("Creates a new user", async(done) => {
    await request(APP)
      .post("/api/user/new")
      .send(userData)
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => expect(response.body.token).not.toBe(undefined))
      .then(() => done())
  });

  it("Doesn't create duplicate users", async(done) => {
    const newUser = new User(userData);
    await newUser.save();

    await request(APP)
      .post("/api/user/new")
      .send(userData)
      .set('Accept', 'application/json')
      .expect(403)
      .then(response => {
        expect(response.body.token).toBe(undefined);
        return response;
      })
      .then(response => expect(response.body.message).toBe("There is already a user with this username"))
      .then(() => done())
  })
});