// api/leaves.js
const express = require('express');
const router = express.Router();

// Example data for leaves
const leaves = [
  { id: 1, type: 'Sick Leave', days: 3 },
  { id: 2, type: 'Vacation Leave', days: 5 },
  { id: 3, type: 'Maternity Leave', days: 90 },
];

// Route to get all leaves
router.get('/', (req, res) => {
  res.json(leaves);
});

// Route to get a specific leave by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const leave = leaves.find((lv) => lv.id === id);
  if (!leave) {
    res.status(404).json({ message: 'Leave not found' });
  } else {
    res.json(leave);
  }
});

module.exports = router;
