const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "11303011",
    database: "BookingApp",
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to DB:", err);
        process.exit();
    }
    console.log("Connected to MySQL Database");
});

module.exports = db;
