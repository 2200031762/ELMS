import React, { useState } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Software Engineer', leaves: { pending: 2, maxAllowed: 20 }, appliedLeaves: ['Sick Leave', 'Vacation'] },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', leaves: { pending: 1, maxAllowed: 25 }, appliedLeaves: ['Maternity Leave'] },
    { id: 3, name: 'Michael Johnson', position: 'UI/UX Designer', leaves: { pending: 3, maxAllowed: 18 }, appliedLeaves: ['Vacation', 'Paternity Leave'] },
    { id: 4, name: 'Emily Brown', position: 'Frontend Developer', leaves: { pending: 0, maxAllowed: 22 }, appliedLeaves: [] },
    { id: 5, name: 'David Wilson', position: 'Backend Developer', leaves: { pending: 5, maxAllowed: 15 }, appliedLeaves: ['Sick Leave', 'Vacation'] },
    { id: 6, name: 'Sophia Lee', position: 'Data Analyst', leaves: { pending: 2, maxAllowed: 20 }, appliedLeaves: ['Sick Leave'] },
    { id: 7, name: 'Matthew Martinez', position: 'Marketing Specialist', leaves: { pending: 1, maxAllowed: 25 }, appliedLeaves: ['Maternity Leave'] },
    { id: 8, name: 'Olivia Taylor', position: 'HR Manager', leaves: { pending: 2, maxAllowed: 18 }, appliedLeaves: [] },
    { id: 9, name: 'Daniel Anderson', position: 'Finance Analyst', leaves: { pending: 4, maxAllowed: 20 }, appliedLeaves: ['Vacation', 'Sick Leave'] },
    { id: 10, name: 'Isabella Garcia', position: 'Graphic Designer', leaves: { pending: 0, maxAllowed: 21 }, appliedLeaves: [] },
    { id: 11, name: 'Alex Johnson', position: 'Network Administrator', leaves: { pending: 3, maxAllowed: 19 }, appliedLeaves: ['Vacation'] },
    { id: 12, name: 'Ethan Clark', position: 'Project Manager', leaves: { pending: 1, maxAllowed: 24 }, appliedLeaves: ['Sick Leave'] },
    // Add more employees as needed
  ]);

  const [formData, setFormData] = useState({ name: '', position: '', pendingLeaves: 0, maxAllowedLeaves: 0, appliedLeaves: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addEmployee = () => {
    if (formData.name && formData.position && formData.pendingLeaves !== '' && formData.maxAllowedLeaves !== '') {
      const newEmployee = {
        id: employees.length + 1,
        name: formData.name,
        position: formData.position,
        leaves: { pending: parseInt(formData.pendingLeaves), maxAllowed: parseInt(formData.maxAllowedLeaves) },
        appliedLeaves: [],
      };
      setEmployees([...employees, newEmployee]);
      setFormData({ name: '', position: '', pendingLeaves: 0, maxAllowedLeaves: 0, appliedLeaves: [] });
    }
  };

  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="employee-list">
      <h2 style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }}>Employee List</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Position</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Pending Leaves</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Max Leaves Allowed</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Applied Leaves</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.position}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.leaves.pending}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.leaves.maxAllowed}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{employee.appliedLeaves.length > 0 ? employee.appliedLeaves.join(', ') : 'None'}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <button onClick={() => deleteEmployee(employee.id)} style={{ backgroundColor: '#8a0000', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: '#333', fontWeight: 'bold' }}>Add Employee</h3>
        <form onSubmit={(e) => { e.preventDefault(); addEmployee(); }}>
          <div style={{ marginBottom: '10px' }}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={
handleChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
<input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
<input type="number" name="pendingLeaves" placeholder="Pending Leaves" value={formData.pendingLeaves} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
<input type="number" name="maxAllowedLeaves" placeholder="Max Leaves Allowed" value={formData.maxAllowedLeaves} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px' }} />
<button type="submit" style={{ backgroundColor: '#8a0000', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>Add Employee</button>
</div>
</form>
</div>
</div>
);
};

export default EmployeeList;