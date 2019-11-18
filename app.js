const mongoose = require('mongoose');
const passport = require('passport');

const express = require("express");
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require('body-parser');
const app = express();

app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
