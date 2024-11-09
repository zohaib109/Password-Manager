import passwordsCollection from "../models/passwords.js";

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

    res.redirect("/dashboard");
  } catch (err) {
    next(err);
  }
}

export { handleAddNewPassword };
