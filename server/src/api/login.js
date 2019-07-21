import User from "../models/User";
import jwt from "jsonwebtoken";

export default async(req, res) => {
  const { username, password } = req.body;
  let user;

  try {
    const query = User.findOne({ username });
    user = await query.exec();
  } catch(e) {
    res.status(500).send({ message: "Sorry, something went wrong."});
  }

  if (user === null) {
    return res.status(404).send({ message: "User does not exist." });
  }

  const passwordMatches = await user.comparePasswords(password);

  if (!passwordMatches) {
    return res.status(401).send({ message: "Incorrect password" });
  }

  const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET);

  res.status(200).send({token, user});
}