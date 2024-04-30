import React, { useState, useEffect } from 'react';

const LeaveRequestForm = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    leaveType: '',
    leaveReason: '',
    leaveDays: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Simulating fetching employee data from an API
    const fetchEmployees = async () => {
      try {
        // Example employee data
        const data = [
          {
            id: 1001,
            firstName: 'John',
            lastName: 'Doe',
            emailAddress: 'john.doe@example.com',
            departmentID: 101,
            positionRole: 'Software Engineer',
            joiningDate: '2022-01-15',
            contactNumber: '+1 (555) 123-4567',
            address: '123 Main Street, Anytown, USA',
            supervisorID: 2001,
            birthday: '1985-06-10',
            workAnniversary: '2023-01-15',
            marriageAnniversary: '2010-09-20',
            presentDays: 160,
            absentDays: 10,
            countOfHolidays: 15,
            countOfLeavesTaken: 10,
            paidLeaves: 5,
            leaveStatus: 'Accepted',
          },
          {
            id: 1002,
            firstName: 'Jane',
            lastName: 'Smith',
            emailAddress: 'jane.smith@example.com',
            departmentID: 101,
            positionRole: 'IT Manager',
            joiningDate: '2020-05-20',
            contactNumber: '+1 (555) 987-6543',
            address: '456 Oak Avenue, Anycity, USA',
            supervisorID: null,
            birthday: '1980-09-15',
            workAnniversary: '2022-05-20',
            marriageAnniversary: '2005-12-30',
            presentDays: 180,
            absentDays: 5,
            countOfHolidays: 20,
            countOfLeavesTaken: 15,
            paidLeaves: 12,
            leaveStatus: 'Rejected',
          },
          {
            id: 1003,
            firstName: 'Emily',
            lastName: 'Johnson',
            emailAddress: 'emily.johnson@example.com',
            departmentID: 102,
            positionRole: 'HR Coordinator',
            joiningDate: '2021-03-10',
            contactNumber: '+1 (555) 234-5678',
            address: '789 Elm Street, Anysuburb, USA',
            supervisorID: 2002,
            birthday: '1990-02-25',
            workAnniversary: '2022-03-10',
            marriageAnniversary: '2015-07-08',
            presentDays: 155,
            absentDays: 15,
            countOfHolidays: 10,
            countOfLeavesTaken: 12,
            paidLeaves: 8,
            leaveStatus: 'Pending',
          },
          {
            id: 1004,
            firstName: 'Mark',
            lastName: 'Wilson',
            emailAddress: 'mark.wilson@example.com',
            departmentID: 102,
            positionRole: 'HR Manager',
            joiningDate: '2019-09-05',
            contactNumber: '+1 (555) 876-5432',
            address: '321 Maple Lane, Anyvillage, USA',
            supervisorID: null,
            birthday: '1978-12-03',
            workAnniversary: '2023-09-05',
            marriageAnniversary: '2002-10-15',
            presentDays: 180,
            absentDays: 0,
            countOfHolidays: 25,
            countOfLeavesTaken: 20,
            paidLeaves: 15,
            leaveStatus: 'Approved',
          },
          {
            id: 1005,
            firstName: 'Michael',
            lastName: 'Brown',
            emailAddress: 'michael.brown@example.com',
            departmentID: 103,
            positionRole: 'Financial Analyst',
            joiningDate: '2023-02-18',
            contactNumber: '+1 (555) 345-6789',
            address: '567 Pine Road, Anyhamlet, USA',
            supervisorID: 2004,
            birthday: '1989-07-20',
            workAnniversary: '2024-02-18',
            marriageAnniversary: '2012-05-30',
            presentDays: 100,
            absentDays: 20,
            countOfHolidays: 5,
            countOfLeavesTaken: 15,
            paidLeaves: 10,
            leaveStatus: 'Pending',
          },
          {
            id: 1006,
            firstName: 'Sarah',
            lastName: 'Clark',
            emailAddress: 'sarah.clark@example.com',
            departmentID: 103,
            positionRole: 'Finance Manager',
            joiningDate: '2020-11-30',
            contactNumber: '+1 (555) 654-3210',
            address: '890 Cedar Street, Anycity, USA',
            supervisorID: null,
            birthday: '1987-03-15',
            workAnniversary: '2022-11-30',
            marriageAnniversary: '2010-08-10',
            presentDays: 175,
            absentDays: 5,
            countOfHolidays: 15,
            countOfLeavesTaken: 10,
            paidLeaves: 7,
            leaveStatus: 'Rejected',
          },
          {
            id: 1007,
            firstName: 'David',
            lastName: 'Martinez',
            emailAddress: 'david.martinez@example.com',
            departmentID: 104,
            positionRole: 'Marketing Specialist',
            joiningDate: '2022-07-12',
            contactNumber: '+1 (555) 432-1098',
            address: '123 Oak Street, Anysuburb, USA',
            supervisorID: 2006,
            birthday: '1992-04-08',
            workAnniversary: '2023-07-12',
            marriageAnniversary: '2019-11-25',
            presentDays: 140,
            absentDays: 20,
            countOfHolidays: 10,
            countOfLeavesTaken: 15,
            paidLeaves: 8,
            leaveStatus: 'Approved',
          },
          {
            id: 1008,
            firstName: 'Jennifer',
            lastName: 'Garcia',
            emailAddress: 'jennifer.garcia@example.com',
            departmentID: 104,
            positionRole: 'Marketing Manager',
            joiningDate: '2018-12-03',
            contactNumber: '+1 (555) 321-0987',
            address: '456 Maple Avenue, Anytown, USA',
            supervisorID: null,
            birthday: '1982-10-05',
            workAnniversary: '2022-12-03',
            marriageAnniversary: '2007-08-20',
            presentDays: 180,
            absentDays: 0,
            countOfHolidays: 25,
            countOfLeavesTaken: 20,
            paidLeaves: 15,
            leaveStatus: 'Pending',
          },
          {
            id: 1009,
            firstName: 'William',
            lastName: 'Rodriguez',
            emailAddress: 'william.rodriguez@example.com',
            departmentID: 105,
            positionRole: 'Operations Coordinator',
            joiningDate: '2020-08-25',
            contactNumber: '+1 (555) 876-5432',
            address: '789 Pine Road, Anyhamlet, USA',
            supervisorID: 2008,
            birthday: '1986-11-30',
            workAnniversary: '2022-08-25',
            marriageAnniversary: '2011-06-15',
            presentDays: 170,
            absentDays: 10,
            countOfHolidays: 20,
            countOfLeavesTaken: 15,
            paidLeaves: 10,
            leaveStatus: 'Rejected',
          },
          {
            id: 1010,
            firstName: 'James',
            lastName: 'Moore',
            emailAddress: 'james.moore@example.com',
            departmentID: 105,
            positionRole: 'Operations Manager',
            joiningDate: '2019-04-17',
            contactNumber: '+1 (555) 987-6543',
            address: '890 Cedar Lane, Anyvillage, USA',
            supervisorID: null,
            birthday: '1980-04-25',
            workAnniversary: '2022-04-17',
            marriageAnniversary: '2005-10-30',
            presentDays: 180,
            absentDays: 0,
            countOfHolidays: 30,
            countOfLeavesTaken: 25,
            paidLeaves: 20,
            leaveStatus: 'Approved',
          },
          // Add more employee data as needed
        ];
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setErrorMessage('Failed to fetch employees');
      }
    };

    fetchEmployees();
  }, []);

  const handleEmployeeSelect = (employeeId) => {
    const employee = employees.find((emp) => emp.id === parseInt(employeeId));
    setSelectedEmployee(employee);
    // Reset form data when selecting a new employee
    setFormData({
      leaveType: '',
      leaveReason: '',
      leaveDays: '',
    });
  };

  return (
    <div style={{ backgroundColor: '#E6E6FA', color: '#333', padding: '20px', borderRadius: '10px' }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Leave Request Form</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#333', marginRight: '10px' }}>Select Employee:</label>
          <select
            value={selectedEmployee ? selectedEmployee.id : ''}
            onChange={(e) => handleEmployeeSelect(e.target.value)}
            style={{ backgroundColor: '#DDA0DD', color: 'white', padding: '5px' }}
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.firstName} {emp.lastName}
              </option>
            ))}
          </select>
        </div>
        {/* Display selected employee details in a table */}
        {selectedEmployee && (
          <div style={{ marginBottom: '15px' }}>
            <h3>Employee Details:</h3>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #333', padding: '5px', fontWeight: 'bold' }}>Employee Name:</td>
                  <td style={{ border: '1px solid #333', padding: '5px' }}>{selectedEmployee.firstName} {selectedEmployee.lastName}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #333', padding: '5px', fontWeight: 'bold' }}>Employee ID:</td>
                  <td style={{ border: '1px solid #333', padding: '5px' }}>{selectedEmployee.id}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #333', padding: '5px', fontWeight: 'bold' }}>Department:</td>
                  <td style={{ border: '1px solid #333', padding: '5px' }}>{selectedEmployee.departmentID}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #333', padding: '5px', fontWeight: 'bold' }}>Position:</td>
                  <td style={{ border: '1px solid #333', padding: '5px' }}>{selectedEmployee.positionRole}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #333', padding: '5px', fontWeight: 'bold' }}>Number of Leaves:</td>
                  <td style={{ border: '1px solid #333', padding: '5px' }}>{selectedEmployee.countOfLeavesTaken}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #333', padding: '5px', fontWeight: 'bold' }}>Paid Leaves:</td>
                  <td style={{ border: '1px solid #333', padding: '5px' }}>{selectedEmployee.paidLeaves}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #333', padding: '5px', fontWeight: 'bold' }}>Leave Status:</td>
                  <td style={{ border: '1px solid #333', padding: '5px' }}>{selectedEmployee.leaveStatus}</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid #333', padding: '5px', fontWeight: 'bold' }}>Email:</td>
                  <td style={{ border: '1px solid #333', padding: '5px' }}>{selectedEmployee.emailAddress}</td>
                </tr>
                {/* Add more rows for leave types, reasons, days, etc. */}
              </tbody>
            </table>
          </div>
        )}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default LeaveRequestForm;