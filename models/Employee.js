const mongoose = require('mongoose');

// Define the Employee schema
const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  leaves: {
    type: Number,
    default: 0,
  },
  paidLeaves: {
    type: Number,
    default: 0,
  },
  leaveStatus: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
});

// Create the Employee model based on the schema
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
