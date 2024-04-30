const express = require('express');
const router = express.Router();
const Leave = require('../models/Leave');

// Route to get all leave applications
router.get('/', async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a specific leave application by ID
router.get('/:id', getLeave, (req, res) => {
  res.json(res.leave);
});

// Route to create a new leave application
router.post('/', async (req, res) => {
  const leave = new Leave({
    employeeId: req.body.employeeId,
    leaveType: req.body.leaveType,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    status: req.body.status,
    // Add more fields as needed
  });

  try {
    const newLeave = await leave.save();
    res.status(201).json(newLeave);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware function to get a specific leave application by ID
async function getLeave(req, res, next) {
  let leave;
  try {
    leave = await Leave.findById(req.params.id);
    if (leave == null) {
      return res.status(404).json({ message: 'Leave application not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.leave = leave;
  next();
}

module.exports = router;
