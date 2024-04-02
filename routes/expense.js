const express = require('express');
const { getExpenses, addExpenses } = require('../controllers/expense');
const router = express.Router();

router.route("/").get(getExpenses).post(addExpenses)

module.exports = router;