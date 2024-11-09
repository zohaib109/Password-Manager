import passwordsCollection from "../models/passwords.js";

async function handleFetchPasswordsFromDB(req, res, next) {
  if (!req.session.userId) return res.redirect("/?error=Please log in to access your account");
  try {
    const userPasswords = await passwordsCollection.find({
      createdBy: req.session.userId,
    });
    res.render("dashboard", { userPasswords });
  } catch (err) {
    next(err);
  }
}

export { handleFetchPasswordsFromDB };
