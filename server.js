// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint for handling form submissions
app.post('/submitForm', (req, res) => {
  const formData = req.body;

  // Assuming LeaveApplicationData.json is in the backend folder
  const filePath = path.join(__dirname, 'LeaveApplicationData.json');

  // Read existing data from the JSON file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading form data.');
      return;
    }

    let jsonData = [];
    try {
      // Parse existing JSON data
      jsonData = JSON.parse(data);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing form data.');
      return;
    }

    // Add new form data to the array
    jsonData.push(formData);

    // Write updated data back to the JSON file
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
        res.status(500).send('Error saving form data.');
        return;
      }
      console.log('Form data saved successfully.');
      res.status(200).send('Form data saved successfully.');
    });
  });
});

// Serve static files from the 'client/build' folder
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Catch-all route for handling React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// API routes
// Corrected import statement in server.js
const employeesRouter = require('./api/employees');
const leavesRouter = require('./api/leaves');

// Use the route handlers
app.use('/api/employees', employeesRouter);
app.use('/api/leaves', leavesRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
