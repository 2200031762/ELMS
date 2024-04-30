import React, { useState } from 'react';
import Dashboard from '../Dashboard.js';
import DepartmentList from './DepartmentList';
import EmployeeList from './EmployeeList';
import LeaveApplication from '../Employee Page/LeaveApplication'; // Updated import path
import '../Dashboard.css'; // Import your custom CSS file

const ManagerPage = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard" style={{ backgroundColor: '#e6e6fa' }}>
        <div className="top-right">
          <button className="logout-button">Logout</button>
        </div>
        <div className="left-panel" style={{ backgroundColor: '#d8bfd8' }}>
          <div className="dashboard-menu">
            <span className="menu-icon" role="img" aria-label="Dashboard">📊</span>
            Dashboard
          </div>
          <div className="dashboard-components">
            <div className="component purple" onClick={() => handleComponentClick('DepartmentList')}>
              <span className="menu-icon" role="img" aria-label="Department List">📂</span>
              Department List
            </div>
            <div className="component purple" onClick={() => handleComponentClick('EmployeeList')}>
              <span className="menu-icon" role="img" aria-label="Employee List">👨‍💼</span>
              Employee List
            </div>
            <div className="component purple" onClick={() => handleComponentClick('LeaveApplication')}>
              <span className="menu-icon" role="img" aria-label="Leave Application">📝</span>
              Leave Application (Manager)
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="scrollbar">
          {activeComponent === 'DepartmentList' && <DepartmentList />}
          {activeComponent === 'EmployeeList' && <EmployeeList />}
          {activeComponent === 'LeaveApplication' && <LeaveApplication />}
        </div>
      </div>
    </div>
  );
};

export default ManagerPage;
