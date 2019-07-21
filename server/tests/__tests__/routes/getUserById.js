import jwt from "jsonwebtoken";
import request from "supertest";

import APP from "../../../src/server";
import User from "../../../src/models/User";
import router from "../../../src/router";

APP.use(router);

const userData = {
  username: "Lana",
  password: "Dangerzone"
};

describe("/api/user/:id", () => {
  it("Gets a user", async(done) => {
    const newUser = new User(userData);
    const savedUser = await newUser.save();

    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET);

    await request(APP)
      .get(`/api/user/${savedUser.id}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(() => done())
  });

  it("Returns 404 when user not found", async(done) => {
    const newUser = new User(userData);
    const savedUser = await newUser.save();

    const token = jwt.sign({ userId: savedUser._id }, process.env.JWT_SECRET);
    await User.findByIdAndDelete(savedUser.id);

    await request(APP)
      .get(`/api/user/${savedUser.id}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(404)
      .expect('Content-Type', /json/)
      .then(() => done())
  });

  it("Returns 401 when trying to access other users' info", async(done) => {
    const newUser = new User(userData);
    const anotherUser = new User({ username: "babou", password: "ocelot" });

    const savedUser = await newUser.save();
    const anotherSavedUser = await anotherUser.save();

    const token = jwt.sign({ userId: anotherSavedUser._id }, process.env.JWT_SECRET);

    await request(APP)
      .get(`/api/user/${savedUser.id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(401)
      .expect('Content-Type', /json/)
      .then(() => done())
  })
});