import React from 'react';
import './TypesofLeaves.css';

const TypesOfLeaves = () => {
  const leaveTypes = [
    {
      name: 'Sick Leave',
      isPaid: true,
      canTake: true,
      maxDays: 5,
      icon: '😷', // Add an icon for sick leave
    },
    {
      name: 'Maternity Leave',
      isPaid: true,
      canTake: true,
      maxDays: 60,
      icon: '🤰', // Add an icon for maternity leave
    },
    {
      name: 'Paternity Leave',
      isPaid: true,
      canTake: true,
      maxDays: 5,
      icon: '👨‍👧‍👦', // Add an icon for paternity leave
    },
    {
      name: 'Unpaid Leave',
      isPaid: false,
      canTake: true,
      maxDays: 15,
      icon: '💼', // Add an icon for unpaid leave
    },
    {
      name: 'Bereavement Leave',
      isPaid: true,
      canTake: true,
      maxDays: 3,
      icon: '😢', // Add an icon for bereavement leave
    },
    {
      name: 'Vacation Leave',
      isPaid: true,
      canTake: true,
      maxDays: 20,
      icon: '🌴', // Add an icon for vacation leave
    },
  ];

  const leavePolicies = [
    {
      leaveType: 'Sick Leave',
      description: 'Paid leave for health-related issues',
      eligibility: 'All employees',
      maxDays: 5,
    },
    {
      leaveType: 'Maternity Leave',
      description: 'Paid leave for expecting mothers',
      eligibility: 'Female employees',
      maxDays: 60,
    },
    {
      leaveType: 'Paternity Leave',
      description: 'Paid leave for new fathers',
      eligibility: 'Male employees',
      maxDays: 5,
    },
    {
      leaveType: 'Unpaid Leave',
      description: 'Leave without pay',
      eligibility: 'All employees',
      maxDays: 15,
    },
    {
      leaveType: 'Bereavement Leave',
      description: 'Paid leave for bereavement',
      eligibility: 'All employees',
      maxDays: 3,
    },
    {
      leaveType: 'Vacation Leave',
      description: 'Paid leave for vacation',
      eligibility: 'All employees',
      maxDays: 20,
    },
  ];

  return (
    <div>
      <h2>Types of Leaves</h2>
      <table className="purple-table">
        {/* Table header */}
        <thead>
          <tr>
            <th>Leave Type</th>
            <th>Paid</th>
            <th>Can Take</th>
            <th>Max Days</th>
            <th>Icon</th>
          </tr>
        </thead>
        {/* Table body for leave types */}
        <tbody>
          {leaveTypes.map((leave, index) => (
            <tr key={index}>
              <td>{leave.name}</td>
              <td>{leave.isPaid ? 'Yes' : 'No'}</td>
              <td>{leave.canTake ? 'Yes' : 'No'}</td>
              <td>{leave.maxDays}</td>
              <td>{leave.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Leave Policies</h2>
      <ul>
        {leavePolicies.map((policy, index) => (
          <li key={index}>
            <strong>{policy.leaveType}:</strong> {policy.description}. Eligibility: {policy.eligibility}. Max Days: {policy.maxDays}.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypesOfLeaves;
