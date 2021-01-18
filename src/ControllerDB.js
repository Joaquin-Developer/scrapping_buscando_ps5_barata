
require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

connection.connect(function(error) {
    if (error) throw error;
    console.log("MySQL Database connected!");
});

module.exports = connection;
