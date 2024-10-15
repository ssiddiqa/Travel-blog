require("dotenv").config();
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const cookieParser = require('cookie-parser');
const db_connection = require("./config/db_config");

// Initialize Express App
const app = express();

// Connect to the database
db_connection();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.listen(port, () =>
    console.log(`server is running on "http://localhost:${port}"`)
);