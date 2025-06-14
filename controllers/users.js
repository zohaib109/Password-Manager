import usersCollection from "../models/users.js";

async function handleUserSignup(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const user = await usersCollection.create({
      name,
      email,
      password,
    });

    req.session.userId = user._id;
    res.redirect("/dashboard");
  } catch (err) {
    next(err);
  }
}

async function handleUserLogin(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await usersCollection.findOne({ email, password });
    if (!user) {
      return res.redirect("/?error=Invalid Credentials");
    }
    req.session.userId = user._id;
    res.redirect("/dashboard");
  } catch (err) {
    next(err);
  }
}

async function handleUserLogout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
}

export { handleUserSignup, handleUserLogin, handleUserLogout };
