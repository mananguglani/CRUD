const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.user_index);
router.post('/', userController.user_create_post);
router.get('/users/create', userController.user_create_get);
router.get('/users/:id', userController.user_details);
router.delete('/users/:id', userController.user_detete);

module.exports = router;