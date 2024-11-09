import passwordsCollection from "../models/passwords.js";

async function handleFetchPasswordsFromDB(req, res, next) {
  if (!req.session.userId) res.redirect("/");
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
