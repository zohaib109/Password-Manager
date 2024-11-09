import mongoose from "mongoose";

const passwordsSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true, unique: true },
  id: Number,
  url: String,
  note: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const passwordsCollection = mongoose.model("passwords", passwordsSchema);

export default passwordsCollection;
