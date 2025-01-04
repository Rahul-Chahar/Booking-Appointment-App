const db = require("../config/db");

const User = {
    // Insert user
    insertUser: (data, callback) => {
        const query = "INSERT INTO User (username, phone_number, email) VALUES (?, ?, ?)";
        db.query(query, [data.username, data.phone_number, data.email], callback);
    },

    // Get all users
    getAllUsers: (callback) => {
        const query = "SELECT * FROM User";
        db.query(query, callback);
    },

    // Delete user
    deleteUser: (id, callback) => {
        const query = "DELETE FROM User WHERE id = ?";
        db.query(query, [id], callback);
    },

    // Update user (basic structure)
    updateUser: (id, data, callback) => {
        const query = "UPDATE User SET username = ?, phone_number = ?, email = ? WHERE id = ?";
        db.query(query, [data.username, data.phone_number, data.email, id], callback);
    },
};

module.exports = User;
