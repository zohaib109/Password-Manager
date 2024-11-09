import express from "express";

const staticRouter = express.Router();

staticRouter.get("/", (req, res, next) => {
  try {
    res.render("index", {
      error: req.query.error || null, // Pass the error query parameter to the template, or null if not present
    });
  } catch (err) {
    next(err);
  }
});

export default staticRouter;
