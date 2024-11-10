import passwordsCollection from "../models/passwords.js";

async function handleAddNewPassword(req, res, next) {
  try {
    const { name, email, password, url, note } = req.body;

    await passwordsCollection.create({
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

async function handleEditPassword(req, res, next) {
  try {
    const passwordId = req.params.id;
    const { name, email, password, url, note } = req.body;
    await passwordsCollection.updateOne({ _id: passwordId }, { $set: { name, email, password, url, note } });
    res.redirect("/dashboard");
  } catch (err) {
    next(err);
  }
}

async function handleDeletePassword(req, res, next) {
  try {
    const { _id } = req.body;
    await passwordsCollection.deleteOne({ _id });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}

export { handleAddNewPassword, handleDeletePassword, handleEditPassword };
