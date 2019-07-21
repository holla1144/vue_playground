require('dotenv').config();

import APP from "../../../src/server";
import request from "supertest";

import router from "../../../src/router";

APP.use(router);

describe("/api/user/new", () => {
  it("Creates a new user", async(done) => {
    await request(APP)
      .post("/api/user/new")
      .send({ username: "Maxo Kreame", password: "BBanks" })
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => expect(response.body.token).not.toBe(undefined))
      .then(() => done())
  })
})