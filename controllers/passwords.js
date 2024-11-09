import passwordsCollection from "../models/passwords.js";
import { handleFetchPasswordsFromDB } from "./dashboard.js";

async function handleAddNewPassword(req, res, next) {
  try {
    const { name, email, password, url, note } = req.body;
    const count = await passwordsCollection.countDocuments({});
    const nextId = count + 1;

    await passwordsCollection.create({
      id: nextId,
      name: name,
      email: email,
      password: password,
      url: url,
      note: note,
      createdBy: req.session.userId,
    });

    const userPasswords = await passwordsCollection.find({
      createdBy: req.session.userId,
    });
    res.render("dashboard", { userPasswords });
  } catch (err) {
    next(err);
  }
}

export { handleAddNewPassword };
