const User = require('../models/userModel'); // Import your User model

// Get all users
exports.getAllUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.render('users', { users: results });
  });
};

// Add a user
exports.addUser = (req, res) => {
  const { username, phone_number, email } = req.body;
  const newUser = { username, phone_number, email };

  User.insertUser(newUser, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.redirect('/users');
  });
};

// Delete a user
exports.deleteUser = (req, res) => {
  const { id } = req.params;

  User.deleteUser(id, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.redirect('/users');
  });
};

// Get edit form
exports.getEditForm = (req, res) => {
  const { id } = req.params;

  User.getAllUsers((err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    const user = results.find((u) => u.id == id); // Assuming `results` contains all users
    res.render('edit', { user });
  });
};

// Update user
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, phone_number, email } = req.body;

  const updatedData = { username, phone_number, email };

  User.updateUser(id, updatedData, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.redirect('/users');
  });
};
