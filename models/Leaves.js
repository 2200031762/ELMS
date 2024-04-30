const mongoose = require('mongoose');

// Define the Leave schema
const leaveSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  leaveType: {
    type: String,
    enum: ['Sick Leave', 'Maternity Leave', 'Paternity Leave', 'Unpaid Leave'],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  reason: {
    type: String,
    required: true,
  },
});

// Create the Leave model based on the schema
const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;
