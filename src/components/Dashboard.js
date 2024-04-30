import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Chart from 'chart.js/auto'; // Import Chart.js with automatic registration
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dashboard.css'; // Import Dashboard styles

const localizer = momentLocalizer(moment);
let myChart; // Declare a variable to store the Chart instance

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [clockInTime, setClockInTime] = useState('');
  const [clockOutTime, setClockOutTime] = useState('');
  const [upcomingHolidays, setUpcomingHolidays] = useState(['Labor Day', 'Christmas', 'New Year']);
  const [attendanceSummary, setAttendanceSummary] = useState({
    leaves: 10,
    absents: 5,
    presents: 175,
    holidays: 20,
  });
  const [leaveBalance, setLeaveBalance] = useState({
    paidLeaves: 15,
    unpaidLeaves: 5,
  });
  const [clockProgress, setClockProgress] = useState(50); // Example clock progress (0-100)

  useEffect(() => {
    const currentDate = new Date();
    const currentClockInTime = currentDate.toLocaleTimeString();
    const previousDate = new Date();
    previousDate.setDate(previousDate.getDate() - 1);
    const previousClockOutTime = previousDate.toLocaleTimeString();
    setClockInTime(currentClockInTime);
    setClockOutTime(previousClockOutTime);

    // Example logic to calculate working hours
    const dummyWorkingHours = 7.5; // Assuming 7.5 hours of work
    drawWorkingHoursChart(dummyWorkingHours); // Draw working hours chart
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Implement logic to fetch clock in/out timings for the selected date
    const dummyData = {
      clockIn: '9:00 AM',
      clockOut: '6:00 PM',
    };
    setClockInTime(dummyData.clockIn);
    setClockOutTime(dummyData.clockOut);
  };

  const handleClockOut = () => {
    // Implement clock out logic here
    console.log('Clocking out...');
  };

  const drawWorkingHoursChart = (workingHours) => {
    const ctx = document.getElementById('working-hours-chart');
    if (ctx) {
      // Check if myChart exists and destroy it
      if (myChart) {
        myChart.destroy();
      }
      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Working Hours',
            data: [workingHours, workingHours, workingHours, workingHours, workingHours, workingHours, workingHours], // Example data for working hours
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };
  

  return (
    <div className="dashboard-container" style={{ backgroundColor: '#7f7fd5' }}>
      {/* Calendar Section */}
      <div className="calendar-section" style={{ backgroundColor: '#b19cd9' }}>
        <h2 style={{ color: '#ffffff' }}>Calendar</h2>
        <div>
          <p style={{ color: '#ffffff' }}>Selected Date: {selectedDate}</p>
          {/* Calendar Component */}
          <Calendar
            localizer={localizer}
            events={[]}
            selectable
            onSelectEvent={(event, e) => handleDateClick(moment(event.start).format('YYYY-MM-DD'))}
            style={{ height: 500 }}
          />
        </div>
      </div>

      {/* Clock In/Out Section */}
      <div className="clock-section" style={{ backgroundColor: '#e0aaff' }}>
        <h3 style={{ color: '#663399' }}>Clock In/Out Timings</h3>
        <div>Date: {selectedDate}</div>
        <div>Clock In: {clockInTime}</div>
        <div>Clock Out: {clockOutTime}</div>
        <div>Total Hours: {/* Calculate total hours */}</div>
        <div className="clock-fill-bar">
          <div
            className="clock-fill"
            style={{ width: `${clockProgress}%`, backgroundColor: '#663399' }}
          ></div>
        </div>
        <button onClick={handleClockOut} style={{ backgroundColor: '#663399', color: '#ffffff' }}>
          Clock Out
        </button>
      </div>

      {/* Upcoming Holidays Section */}
      <div className="upcoming-holidays-section" style={{ backgroundColor: '#b19cd9' }}>
        <h3 style={{ color: '#ffffff' }}>Upcoming Holidays</h3>
        <ul>
          {upcomingHolidays.map((holiday, index) => (
            <li key={index} style={{ color: '#ffffff' }}>{holiday}</li>
          ))}
        </ul>
      </div>

      {/* Attendance Summary Section */}
      <div className="attendance-summary-section" style={{ backgroundColor: '#e0aaff' }}>
        <h3 style={{ color: '#663399' }}>Attendance Summary</h3>
        <table>
          <tr>
            <td>Leaves:</td>
            <td>{attendanceSummary.leaves}</td>
          </tr>
          <tr>
            <td>Absents:</td>
            <td>{attendanceSummary.absents}</td>
          </tr>
          <tr>
            <td>Presents:</td>
            <td>{attendanceSummary.presents}</td>
          </tr>
          <tr>
            <td>Holidays:</td>
            <td>{attendanceSummary.holidays}</td>
          </tr>
        </table>
      </div>

      {/* Working Hours Graph */}
      <div className="working-hours-graph" style={{ backgroundColor: '#b19cd9' }}>
        <h3 style={{ color: '#ffffff' }}>Working Hours</h3>
        <div className="working-hours-chart">
          <canvas id="working-hours-chart" width="400" height="200"></canvas>
        </div>
      </div>

      {/* Leave Balance Section */}
      <div className="leave-balance-section" style={{ backgroundColor: '#e0aaff' }}>
        <h3 style={{ color: '#663399' }}>Leave Balance</h3>
        <div>Paid Leaves: {leaveBalance.paidLeaves}</div>
        <div>Unpaid Leaves: {leaveBalance.unpaidLeaves}</div>
      </div>

      {/* Let's Get to Work Bar */}
      <div className="lets-get-to-work-bar" style={{ backgroundColor: '#b19cd9' }}>
        <h3 style={{ color: '#ffffff' }}>Let's Get to Work</h3>
        <div>Shift Timings: 9:30 AM - 6:30 PM</div>
        {/* Mood emojis selection */}
        <div>Mood Emojis: 😊😎🥳</div>
        <button onClick={handleClockOut} style={{ backgroundColor: '#663399', color: '#ffffff' }}>
          Clock Out
        </button>
      </div>

      {/* Announcements Section */}
      <div className="announcements-section" style={{ backgroundColor: '#b19cd9' }}>
        <h3 style={{ color: '#ffffff' }}>Announcements</h3>
        <div>Town Hall | Activity</div>
        <div>Product Update</div>
        <div>Meeting</div>
      </div>

      {/* Celebrations Section */}
      <div className="celebrations-section" style={{ backgroundColor: '#e0aaff' }}>
        <h3 style={{ color: '#663399' }}>Celebrations</h3>
        <div>Birthdays</div>
        <div>Anniversaries</div>
      </div>
    </div>
  );
};

export default Dashboard;
