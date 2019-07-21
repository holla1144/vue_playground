import jwt from "jsonwebtoken";
import request from "supertest";

import APP from "../../../src/server";
import User from "../../../src/models/User";
import router from "../../../src/router";

APP.use(router);

describe("/api/user/:id/update", () => {
  const userData = {
    username: "Hank Hill",
    password: "propane",
    cards: []
  };

  it("Updates username", async(done) => {
      const newUser = new User(userData);
      const savedUser = await newUser.save();

      const token = jwt.sign({ userId: savedUser.id }, process.env.JWT_SECRET);

      const updatedUsername = "LemonJello";
      await request(APP)
        .put(`/api/user/${savedUser.id}/update`)
        .set("Authorization", `Bearer ${token}`)
        .send({ username: "LemonJello" })
        .expect(200)
        .then(response => expect(response.body.user.username).toBe(updatedUsername))
        .then(() => done())
  });

  it("Updates password", async(done) => {
    const newUser = new User(userData);
    const savedUser = await newUser.save();

    const token = jwt.sign({ userId: savedUser.id }, process.env.JWT_SECRET);

    const updatedPassword = "supercalifragalistiexpealidocious";

    await request(APP)
      .put(`/api/user/${savedUser.id}/update`)
      .set("Authorization", `Bearer ${token}`)
      .send({ password: updatedPassword })
      .expect(200)
      .then(response => expect(response.body.user.password).not.toEqual(savedUser.id))
      .then(() => done())
  });

  it("Returns 401 if you don't send a JWT", async(done) => {
    const newUser = new User(userData);
    const savedUser = await newUser.save();

    await request(APP)
      .put(`/api/user/${savedUser.id}/update`)
      .expect(401)
      .then(() => done())
  });

  it("Returns 401 if you update a different user's data", async(done) => {
    const newUser = new User(userData);
    const anotherUser = new User( { username: "anotherUser", password: "This is my password" } );

    const savedUser = await newUser.save();
    const anotherSavedUser = await anotherUser.save();

    const token = jwt.sign({ userId: anotherSavedUser.id }, process.env.JWT_SECRET);

    await request(APP)
      .put(`/api/user/${savedUser.id}/update`)
      .set("Authorization", `Bearer ${token}`)
      .expect(401)
      .expect(response => expect(response.body.message).toEqual("Incorrect credentials to update this user"))
      .then(() => done())
  })
});