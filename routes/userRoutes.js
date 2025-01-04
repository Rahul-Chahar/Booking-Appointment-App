const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/add', userController.addUser);
router.post('/delete/:id', userController.deleteUser);
router.get('/edit/:id', userController.getEditForm);
router.post('/edit/:id', userController.updateUser);

module.exports = router;