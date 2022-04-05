const express = require("express");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const app = express();

// MIDDLEWARES
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    cookie: {
      secure: process.env.NODE_ENV === "production" ? "true" : "auto",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER STARTED ON ${PORT}`));
