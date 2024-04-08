const Expense = require("../models/expense")
const path = require("path")
const fs = require("fs")

exports.addExpenses = async (req, res, next) => {
  const data = JSON.parse(req.body.data)

  const file = req.files.file;
  data.filename = file.name;
  fs.writeFileSync(path.join(process.cwd(), "uploads", file.name), file.data)

  try {

    const transaction = await Expense.create(data);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
  }
}

exports.getExpenses = async (req, res, next) => {
  try {
    const user = req.user
    const transactions = await Expense.find({ userID: user.userId });

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}