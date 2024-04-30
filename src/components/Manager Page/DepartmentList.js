import React, { useState } from 'react';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'Administrative', manager: 'John Doe', employees: ['Alice Johnson', 'Bob Smith', 'Charlie Brown'] },
    { id: 2, name: 'HR', manager: 'Jane Smith', employees: ['David Wilson', 'Emily Brown', 'Frank Miller'] },
    { id: 3, name: 'Operations/Delivery', manager: 'Michael Johnson', employees: ['Grace Thompson', 'Henry Garcia', 'Isabella Taylor'] },
    { id: 4, name: 'Product/Service Development', manager: 'Emily Brown', employees: ['Jack Anderson', 'Kelly Martinez', 'Liam Clark'] },
    { id: 5, name: 'Purchasing', manager: 'David Wilson', employees: ['Mia Lopez', 'Noah Lewis', 'Olivia Martin'] },
    { id: 6, name: 'Research and production', manager: 'Sophia Lee', employees: ['Peter White', 'Quinn Young', 'Rachel Hill'] },
    { id: 7, name: 'Sales', manager: 'Matthew Martinez', employees: ['Samuel Turner', 'Tina Hall', 'Uma Parker'] },
    { id: 8, name: 'Marketing', manager: 'Olivia Taylor', employees: ['Victor Scott', 'Wendy Adams', 'Xavier Mitchell'] },
    { id: 9, name: 'Accounting', manager: 'Daniel Anderson', employees: ['Yvonne Nelson', 'Zack Carter', 'Alice Wilson'] },
    { id: 10, name: 'Finance', manager: 'Isabella Garcia', employees: ['Bella Davis', 'Chris Evans', 'Diana Fisher'] },
    { id: 11, name: 'I.T.', manager: 'Ethan Thompson', employees: ['Eric Roberts', 'Fiona Harris', 'George Miller'] }, // Added I.T. department
  ]);

  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentClick = (id) => {
    setSelectedDepartment(id);
  };

  const handleRemoveDepartment = (id) => {
    const updatedDepartments = departments.filter(department => department.id !== id);
    setDepartments(updatedDepartments);
    setSelectedDepartment(null); // Reset selected department on removal
  };

  return (
    <div className="department-list">
      <h2 style={{ color: 'darkgrey' }}>Department List</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', backgroundColor: 'darkblue', color: 'white' }}>Department Name</th>
            <th style={{ padding: '8px', backgroundColor: 'darkblue', color: 'white' }}>Manager</th>
            <th style={{ padding: '8px', backgroundColor: 'darkblue', color: 'white' }}>No. of Employees</th>
            <th style={{ padding: '8px', backgroundColor: 'darkblue', color: 'white' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.id} onClick={() => handleDepartmentClick(department.id)} style={{ cursor: 'pointer', backgroundColor: selectedDepartment === department.id ? 'lightgrey' : 'inherit' }}>
              <td style={{ padding: '8px', borderBottom: '1px solid darkgrey' }}>{department.name}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid darkgrey' }}>{department.manager}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid darkgrey' }}>{department.employees.length}</td>
              <td style={{ padding: '8px', borderBottom: '1px solid darkgrey' }}>
                <button style={{ backgroundColor: 'darkorange', color: 'white', marginRight: '4px' }} onClick={() => handleRemoveDepartment(department.id)}>Remove</button>
                {/* Add an update button/icon and its functionality here */}
                <button style={{ backgroundColor: 'darkgreen', color: 'white' }}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDepartment !== null && (
        <div style={{ marginTop: '16px', padding: '8px', backgroundColor: 'lightgrey' }}>
          <h3>Employees in {departments.find(department => department.id === selectedDepartment)?.name}</h3>
          <ul>
            {departments.find(department => department.id === selectedDepartment)?.employees.map((employee, index) => (
              <li key={index}>{employee}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DepartmentList;