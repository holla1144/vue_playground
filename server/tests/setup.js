import User from "../src/models/User";

require('dotenv').config();
import mongoose from "mongoose";

const DB_URI = process.env.DB_TEST;

beforeAll(async() => {
  try {
    await mongoose.connect(DB_URI, { useCreateIndex: true, useNewUrlParser: true });
  } catch(e) {
    console.error(`DB problems: ${e}`)
  }
});

beforeEach(async() => await User.deleteMany());

afterAll(() => {mongoose.disconnect()});