import User from "../../../src/models/User";

describe("User Model", () => {
  it("Saves", async () => {
    const userData = {
      username: "Catman",
      password: "Lemon"
    };

    const user = new User(userData);
    await user.save();
  });

  it("Doesn't add duplicate users", async() => {
    const userData = {
      username: "Unique",
      password: "NewYork"
    };

    const userOne = new User(userData);
    const userTwo = new User(userData);

    await userOne.save();

    await expect(userTwo.save()).rejects.toThrow()
  });

  it("Hashes passwords", async() => {
    const userData = {
      username: "Archer",
      password: "Babou"
    };

    const newUser = new User(userData);
    const savedUser = await newUser.save();

    expect(savedUser.password).not.toEqual(userData.password);
  });

  it("Compares passwords", async() => {
    const userData = {
      username: "Archer",
      password: "Babou"
    };

    const newUser = new User(userData);
    const savedUser = await newUser.save();

    const passwordTest = await savedUser.comparePasswords(userData.password);
    expect(passwordTest).toEqual(true);

    const nextPasswordTest = await savedUser.comparePasswords("marshmallow");
    expect(nextPasswordTest).toEqual(false);
  })
});
