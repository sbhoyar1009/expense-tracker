const express = require('express');
const { addUser, verifyUser } = require('../controllers/user');
const router = express.Router();

router.route("/").post(addUser)
router.route("/verify").post(verifyUser)

module.exports = router;