const Expense  = require("../models/expense")

exports.addExpenses = async (req, res, next) => {

    try {
      const transaction = await Expense.create(req.body.data);
        
      return res.status(201).json({
        success: true,
        data: transaction
      }); 
    } catch (err) {
      if(err.name === 'ValidationError') {
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
      const transactions = await Expense.find({userID : user.userId});

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