import User from "../model/userSchema";
var md5 = require("md5");

export const userLogin = (req, res) => {
  req.body.password = md5(req.body.password);
  User.findOne({
    $and: [{ email: req.body.email }, { password: req.body.password }],
  }).exec((error, result) => {
    if (error || result == null) {
      res.send("Incorrect username or password." + error);
    } else {
      res.send("User login successful");
    }
  });
};

export const userSignup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, result) => {
    if (error === null) {
      req.body.password = md5(req.body.password);
      const user = new User(req.body);
      user.save((error, result) => {
        if (error) res.send("Error in saving User :" + error);
        else res.send("User registered" + result);
      });
    } else {
      res.send("User already registered");
    }
  });
};

export const updatePassword = (req, res) => {
  req.body.password = md5(req.body.password);
  User.updateOne(
    { email: req.body.email },
    { $set: { password: req.body.password } }
  ).exec((error, result) => {
    if (error) {
      res.send("Error in updating user password:" + error);
    } else {
      res.send("User password updated");
    }
  });
};

export const updateUser = (req, res) => {
  User.updateOne(
    { email: req.body.email },
    { $set: { name: req.body.name, password: req.body.password } }
  ).exec((error, result) => {
    if (error) {
      res.send("Error in updating User:" + error);
    } else {
      res.send("User updated");
    }
  });
};

export const updateUserStatus = (req, res) => {
  User.updateOne(
    { email: req.body.email },
    { $set: { status: req.body.status } }
  ).exec((error, result) => {
    if (error) {
      res.send("Error in updating User Status:" + error);
    } else {
      res.send("User Status updated");
    }
  });
};

export const deactivateUser = (req, res) => {
  User.updateOne(
    { email: req.body.email },
    { $set: { status: "Deactive" } }
  ).exec((error, result) => {
    if (error) {
      res.send("Error in deactivating User" + error);
    } else {
      res.send("User deactivated");
    }
  });
};
