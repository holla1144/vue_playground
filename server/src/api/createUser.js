import User from "../models/User";
import jwt from "jsonwebtoken";

export default async(req, res) => {
  const {username, password} = req.body;
  const newUser = new User({username, password});
  let savedUser;

  try {
    savedUser = await newUser.save();
  } catch(e) {
    res.status(500).send({message: "Sorry, something went wrong"});
    return;
  }

  const token = jwt.sign({ userId: savedUser.id }, process.env.JWT_SECRET);

  res.status(200).send({
    token,
    user: savedUser
  });
};
