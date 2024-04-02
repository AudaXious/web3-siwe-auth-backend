const express = require("express");
require("dotenv").config();
const router = require("./routes");
const Session = require("express-session");
const cors = require("cors");

const port = process.env.PORT || 3000;

//Create an app

const app = express();
app.use(express.json());

//ACCESS CONTROL

// app.use(
//   cors({
//     origin: "https://www.audaxious.com",
//     methods: "GET,HEAD,POST",
//     credentials: true,
//   })
// );

const corsOptions = {
  origin: ["https://www.audaxious.com", "http://localhost:8080"],
  methods: "GET,HEAD,POST",
  credentials: true,
};

app.use(cors(corsOptions));

//Configure app
app.use(
  Session({
    name: "AudaXious",
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false, sameSite: true },
  })
);

app.use(router);

app.listen(port, console.log(`Server running on port ${port}`));
