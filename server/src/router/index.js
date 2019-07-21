require('dotenv').config();

import express from "express";
import jwt from "express-jwt";

import createUser from "../api/createUser";
import getUserById from "../api/getUserById";
import login from "../api/login";
import updateUser from "../api/updateUser";

const ROUTER = express.Router();
const secret = process.env.JWT_SECRET;

ROUTER.get("/api/user/:id", jwt({ secret } ), getUserById);
ROUTER.post("/api/user/new", createUser);
ROUTER.post("/api/login", login);
ROUTER.put("/api/user/:id/update", jwt({ secret } ), updateUser);

ROUTER.get("*", (req, res) => {
  res.send("Router on");
});


export default ROUTER;
