const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Route to get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a specific employee by ID
router.get('/:id', getEmployee, (req, res) => {
  res.json(res.employee);
});

// Route to create a new employee
router.post('/', async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    department: req.body.department,
    position: req.body.position,
    // Add more fields as needed
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware function to get a specific employee by ID
async function getEmployee(req, res, next) {
  let employee;
  try {
    employee = await Employee.findById(req.params.id);
    if (employee == null) {
      return res.status(404).json({ message: 'Employee not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.employee = employee;
  next();
}

module.exports = router;
