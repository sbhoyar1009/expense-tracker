const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    category: { type: String },
    date: { type: Date,default:Date.now() },
    recipient: { type: String },
    amount: { type: Number }

})

module.exports = mongoose.model('Expense', ExpenseSchema);