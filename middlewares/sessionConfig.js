import session from "express-session";

const sessionConfiguration = session({
  secret: "my secret key",
  resave: false,
  saveUninitialized: false,
});

export default sessionConfiguration;
