import React, { useState } from 'react';
import LeaveApplication from './LeaveApplication';
import LeaveBalance from './LeaveBalance';
import Leavelist from './Leavelist';
import LeaveRequestForm from './LeaveRequestForm';
import Notifications from './Notifications';
import TypesofLeaves from './TypesofLeaves';
import './EmployeePage.css'; // Import your custom CSS file

const EmployeePage = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="employee-page">
      <div className="top-right">
        <button className="logout-button">Logout</button>
      </div>
      <div className="left-panel">
        <div className="dashboard-menu">
          <span className="menu-icon">📊</span>
          Dashboard
        </div>
        <div className="dashboard-components">
          <div className="component purple" onClick={() => handleComponentClick('LeaveApplication')}>
            <span className="menu-icon">📝</span>
            Leave Application
          </div>
          <div className="component purple" onClick={() => handleComponentClick('LeaveBalance')}>
            <span className="menu-icon">💰</span>
            Leave Balance
          </div>
          <div className="component purple" onClick={() => handleComponentClick('Leavelist')}>
            <span className="menu-icon">📋</span>
            Leave List
          </div>
          <div className="component purple" onClick={() => handleComponentClick('LeaveRequestForm')}>
            <span className="menu-icon">📝</span>
            Leave Request Form
          </div>
          <div className="component purple" onClick={() => handleComponentClick('Notifications')}>
            <span className="menu-icon">🔔</span>
            Notifications
          </div>
          <div className="component purple" onClick={() => handleComponentClick('TypesofLeaves')}>
            <span className="menu-icon">📑</span>
            Types of Leaves
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="scrollbar">
          {activeComponent === 'LeaveApplication' && <LeaveApplication />}
          {activeComponent === 'LeaveBalance' && <LeaveBalance />}
          {activeComponent === 'Leavelist' && <Leavelist />}
          {activeComponent === 'LeaveRequestForm' && <LeaveRequestForm />}
          {activeComponent === 'Notifications' && <Notifications />}
          {activeComponent === 'TypesofLeaves' && <TypesofLeaves />}
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
