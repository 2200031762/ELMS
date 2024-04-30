import React, { useState } from 'react';

const LeaveApplication = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [leaveStartDate, setLeaveStartDate] = useState('');
  const [leaveEndDate, setLeaveEndDate] = useState('');
  const [selectedLeaveType, setSelectedLeaveType] = useState('');
  const [reason, setReason] = useState('');
  const [numOfLeaves, setNumOfLeaves] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeName || !employeeId || !leaveStartDate || !leaveEndDate || !selectedLeaveType || !reason || !numOfLeaves) {
      setSuccessMessage('Please fill in all required fields.');
      return;
    }

    // Process leave application here

    // Reset form fields
    setEmployeeName('');
    setEmployeeId('');
    setLeaveStartDate('');
    setLeaveEndDate('');
    setSelectedLeaveType('');
    setReason('');
    setNumOfLeaves('');
    setSuccessMessage('Leave application submitted successfully.');
  };

  return (
    <div className="leave-application" style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', color: 'black', backgroundColor: '#e6d7f5' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' }}>Leave Application</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontSize: '18px', width: '150px', fontWeight: 'bold' }}>Employee Name:</label>
          <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} style={{ fontSize: '18px', flex: '1', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontSize: '18px', width: '150px', fontWeight: 'bold' }}>Employee ID:</label>
          <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} style={{ fontSize: '18px', flex: '1', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontSize: '18px', width: '150px', fontWeight: 'bold' }}>Leave Start Date:</label>
          <input type="date" value={leaveStartDate} onChange={(e) => setLeaveStartDate(e.target.value)} style={{ fontSize: '18px', flex: '1', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontSize: '18px', width: '150px', fontWeight: 'bold' }}>Leave End Date:</label>
          <input type="date" value={leaveEndDate} onChange={(e) => setLeaveEndDate(e.target.value)} style={{ fontSize: '18px', flex: '1', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontSize: '18px', width: '150px', fontWeight: 'bold' }}>Leave Type:</label>
          <select value={selectedLeaveType} onChange={(e) => setSelectedLeaveType(e.target.value)} style={{ fontSize: '18px', flex: '1', padding: '10px', borderRadius: '5px' }}>
            <option value="">Select Leave Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Vacation Leave">Vacation Leave</option>
            <option value="Personal Leave">Personal Leave</option>
            {/* Add more leave types as needed */}
          </select>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontSize: '18px', width: '150px', fontWeight: 'bold' }}>Reason for Leave:</label>
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} style={{ fontSize: '18px', flex: '1', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ fontSize: '18px', width: '150px', fontWeight: 'bold' }}>Number of Days:</label>
          <input type="number" value={numOfLeaves} onChange={(e) => setNumOfLeaves(e.target.value)} style={{ fontSize: '18px', flex: '1', padding: '10px', borderRadius: '5px' }} />
        </div>
        <div>
          <button type="submit" style={{ fontSize: '20px', padding: '12px 24px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
          <button type="reset" style={{ fontSize: '20px', padding: '12px 24px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}>Reset</button>
        </div>
        {successMessage && <p style={{ fontSize: '18px', color: 'green', fontWeight: 'bold' }}>{successMessage}</p>}
      </form>
    </div>
  );
};

export default LeaveApplication;
