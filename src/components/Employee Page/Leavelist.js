import React from 'react';

const LeaveList = () => {
  const employees = [
    {
      employeeId: 1003,
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emily.johnson@example.com',
      departmentId: 102,
      position: 'HR Coordinator',
      countOfLeavesTaken: 12,
      leaveType: 'Vacation Leave',
      leaveReason: 'Family vacation',
      leaveDuration: '5 days',
      isPaidLeave: true,
    },
    {
      employeeId: 1004,
      firstName: 'Mark',
      lastName: 'Wilson',
      email: 'mark.wilson@example.com',
      departmentId: 102,
      position: 'HR Manager',
      countOfLeavesTaken: 20,
      leaveType: 'Maternity Leave',
      leaveReason: 'Childbirth',
      leaveDuration: '3 months',
      isPaidLeave: false,
    },
    {
      employeeId: 1005,
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@example.com',
      departmentId: 103,
      position: 'Financial Analyst',
      countOfLeavesTaken: 15,
      leaveType: 'Annual Leave',
      leaveReason: 'Vacation',
      leaveDuration: '2 weeks',
      isPaidLeave: true,
    },
    {
      employeeId: 1006,
      firstName: 'Sarah',
      lastName: 'Clark',
      email: 'sarah.clark@example.com',
      departmentId: 103,
      position: 'Finance Manager',
      countOfLeavesTaken: 10,
      leaveType: 'Personal Leave',
      leaveReason: 'Personal reasons',
      leaveDuration: '1 week',
      isPaidLeave: true,
    },
    {
      employeeId: 1007,
      firstName: 'David',
      lastName: 'Martinez',
      email: 'david.martinez@example.com',
      departmentId: 104,
      position: 'Marketing Specialist',
      countOfLeavesTaken: 15,
      leaveType: 'Sick Leave',
      leaveReason: 'Flu',
      leaveDuration: '1 week',
      isPaidLeave: true,
    },
    {
      employeeId: 1008,
      firstName: 'Jennifer',
      lastName: 'Garcia',
      email: 'jennifer.garcia@example.com',
      departmentId: 104,
      position: 'Marketing Manager',
      countOfLeavesTaken: 20,
      leaveType: 'Annual Leave',
      leaveReason: 'Vacation',
      leaveDuration: '2 weeks',
      isPaidLeave: true,
    },
    {
      employeeId: 1009,
      firstName: 'William',
      lastName: 'Rodriguez',
      email: 'william.rodriguez@example.com',
      departmentId: 105,
      position: 'Operations Coordinator',
      countOfLeavesTaken: 15,
      leaveType: 'Family Leave',
      leaveReason: 'Family emergency',
      leaveDuration: '1 week',
      isPaidLeave: false,
    },
    {
      employeeId: 1010,
      firstName: 'James',
      lastName: 'Moore',
      email: 'james.moore@example.com',
      departmentId: 105,
      position: 'Operations Manager',
      countOfLeavesTaken: 25,
      leaveType: 'Maternity Leave',
      leaveReason: 'Childbirth',
      leaveDuration: '3 months',
      isPaidLeave: false,
    },
  ];
  return (
    <div style={{ backgroundColor: '##E6E6FA', padding: '20px' }}>
      <h2 style={{ color: 'purple' }}>Employee Leave List</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '2px solid #E6E6FA', backgroundColor: '#E6E6FA' }}>
        <thead style={{ backgroundColor: '#FFB6C1' }}>
          <tr>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Employee ID</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>First Name</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Last Name</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Email Address</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Department ID</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Position/Role</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Count of Leaves Taken</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Leave Type</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Leave Reason</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Leave Duration</th>
            <th style={{ padding: '10px', borderRight: '1px solid black' }}>Paid Leave</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId} style={{ borderBottom: '1px solid black' }}>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.employeeId}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.firstName}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.lastName}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.email}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.departmentId}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.position}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.countOfLeavesTaken}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.leaveType}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.leaveReason}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.leaveDuration}</td>
              <td style={{ padding: '10px', borderRight: '1px solid black' }}>{employee.isPaidLeave ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveList;