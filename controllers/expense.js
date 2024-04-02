const Expense  = require("../models/expense")

exports.addExpenses = async (req, res, next) => {

    try {
        console.log(req.body.data)
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
      const transactions = await Expense.find();
  
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