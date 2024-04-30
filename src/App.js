import React, { useState } from 'react';
import Login from './components/Login'; // Import Login component
import EmployeePage from './components/Employee Page/EmployeePage'; // Import EmployeePage component
import ManagerPage from './components/Manager Page/ManagerPage'; // Import ManagerPage component
import './index.css'; // Import main CSS file for styling
import './components/Login.css'; // Import Login.css file

const App = () => {
  const [route, setRoute] = useState('login'); // Initially set the route to login

  const handleRouteChange = (newRoute) => {
    setRoute(newRoute);
  };

  const renderComponent = () => {
    switch (route) {
      case 'employee':
        return <EmployeePage />;
      case 'manager':
        return <ManagerPage />;
      case 'login':
      default:
        return <Login onLogin={() => handleRouteChange('dashboard')} />;
    }
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => handleRouteChange('dashboard')}>Dashboard</button>
        <button onClick={() => handleRouteChange('employee')}>Employee Page</button>
        <button onClick={() => handleRouteChange('manager')}>Manager Page</button>
        {/* Add more buttons for other routes */}
      </nav>
      <main>{renderComponent()}</main>
    </div>
  );
};

export default App;
