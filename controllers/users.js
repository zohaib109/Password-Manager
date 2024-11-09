import usersCollection from "../models/users.js";
import passwordsCollection from "../models/passwords.js";

async function handleUserSignup(req, res, next) {
  try {
    const { name, email, password } = req.body;
    await usersCollection.create({
      name,
      email,
      password,
    });

    res.redirect("/");
  } catch (err) {
    next(err);
  }
}

async function handleUserLogin(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await usersCollection.findOne({ email, password });
    if (!user) {
      res.redirect("/?error=Invalid Credentials");
    } else {
      req.session.userId = user._id;
      const userPasswords = await passwordsCollection.find({
        createdBy: req.session.userId,
      });
      res.render("dashboard", { userPasswords });
    }
  } catch (err) {
    next(err);
  }
}

export { handleUserSignup, handleUserLogin };
