import User from "../models/User";

export default async (req, res) => {
  const { userId }= req.user;

  let retrievedUser;

  try {
    retrievedUser = await User.findOne({_id: req.params.id}).exec()
  } catch(e) {
    console.error(`Something went wrong in UserById: ${e}`);
  }

  if (retrievedUser === null) {
    console.error(`User not found`);
    return res.status(404).send({message: "User not found"});
  }

  if (userId !== retrievedUser.id) {
    console.error(`Passwords don't match`);
    return res.status(401).send({message: "You don't have the correct credentials for this resource"});
  }

  res.send(retrievedUser)
};