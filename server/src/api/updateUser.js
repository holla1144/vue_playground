import User from "../models/User";

export default async(req, res) => {
  const requestingUserId = req.user.userId;
  const updateId = req.params.id;
  const fieldsToUpdate = req.body;

  let retrievedUser;
  let updatedUser;

  try {
    const query = User.findById(updateId);
    retrievedUser = await query.exec();
  } catch(e) {
    console.error(e);
    res.status(500).send( {message: "Sorry, something went wrong"} );
  }

  if (retrievedUser === null) {
    res.status(404).send( {message: "User record doesn't exist"} );
    return;
  }

  if (requestingUserId !== retrievedUser.id) {
    res.status(401).send( {message: "Incorrect credentials to update this user"} );
    return;
  }

  try {
    for (let key of Object.keys(fieldsToUpdate)) {
      retrievedUser[key] = fieldsToUpdate[key];
    }

    updatedUser = await retrievedUser.save();
  } catch(e) {
    console.error(e);
    res.status(500).send( {message: "Sorry, something went wrong"} );
  }

  res.status(200).send( { message: "Update successful", user: updatedUser } );
}