const db = require('../config/db');

// Get all users
exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM User', (err, results) => {
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
  db.query(
    'INSERT INTO User (username, phone_number, email) VALUES (?, ?, ?)',
    [username, phone_number, email],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error');
      }
      res.redirect('/users');
    }
  );
};

// Delete a user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM User WHERE id = ?', [id], (err, results) => {
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
  db.query('SELECT * FROM User WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.render('edit', { user: results[0] });
  });
};

// Update user
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, phone_number, email } = req.body;
  db.query(
    'UPDATE User SET username = ?, phone_number = ?, email = ? WHERE id = ?',
    [username, phone_number, email, id],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Database error');
      }
      res.redirect('/users');
    }
  );
};
