const express = require('express');
const router = new express.Router();
const { getUsers, getUser, updateUser } = require('../controllers/users.js')

router.get("/users", getUsers);

router.get("/:id", getUser);

router.post("/:id", updateUser);

module.exports = router;