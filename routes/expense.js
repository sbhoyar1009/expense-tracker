const express = require('express');
const { getExpenses, addExpenses } = require('../controllers/expense');
const { auth } = require('../middleware/auth');
const router = express.Router();

router.route("/").get(auth,getExpenses).post(addExpenses)

module.exports = router;