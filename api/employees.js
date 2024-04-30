// api/employees.js
const express = require('express');
const router = express.Router();

// Example data for employees
const employees = [
  { id: 1, name: 'John Doe', department: 'IT' },
  { id: 2, name: 'Jane Smith', department: 'HR' },
  { id: 3, name: 'Michael Johnson', department: 'Finance' },
];

// Route to get all employees
router.get('/', (req, res) => {
  res.json(employees);
});

// Route to get a specific employee by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find((emp) => emp.id === id);
  if (!employee) {
    res.status(404).json({ message: 'Employee not found' });
  } else {
    res.json(employee);
  }
});

module.exports = router;
