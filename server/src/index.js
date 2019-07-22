require('dotenv').config();

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import ROUTER from "./router";
import APP from "./server";

const PORT = 3000;
const DB_URI = process.env.DB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(DB_URI, { useCreateIndex: true, useNewUrlParser: true }, (err) => {
  if (err) {
    console.error("Couldn't connect to DB:", err);
    proccess.exit(1);
  }

  APP.use(cors());
  APP.use(ROUTER);
  APP.use(express.static('../client/dist'));

  APP.listen(PORT, () => console.info(`App listening at port: ${PORT}`));
});

mongoose.set('debug', true);

