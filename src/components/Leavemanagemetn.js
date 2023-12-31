import React, { useState } from "react";
import './Leavemanagement.css'
import { useNavigate } from "react-router-dom";

const Leavemanagement = () => {
  const [leaveType, setLeaveType] = useState("casual");
  const [leaveDays, setLeaveDays] = useState("");
  const [leaveBalanceData, setLeaveBalanceData] = useState({
    casual: 5,
    medical: 5,
  });

  const handleLeaveTypeChange = (event) => {
    setLeaveType(event.target.value);
  };

  const handleLeaveDaysChange = (event) => {
    setLeaveDays(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const days = parseInt(leaveDays);
    if (days > leaveBalanceData[leaveType]) {
      alert("You don't have enough leave balance.");
      return;
    }
    setLeaveBalanceData({
      ...leaveBalanceData,
      [leaveType]: leaveBalanceData[leaveType] - days,
    });
    setLeaveDays("");
  };

  

  return (
    <div className="container">
      <h1>Leave Management System</h1>
      <div className="form-container">
        <h2>Leave Application</h2>
        <form onSubmit={handleSubmit}>
          <select value={leaveType} onChange={handleLeaveTypeChange}>
            <option value="casual">Casual Leave</option>
            <option value="medical">Medical Leave</option>
          </select>
          <input
            type="number"
            value={leaveDays}
            onChange={handleLeaveDaysChange}
            placeholder="No. of days"
            required
          />
          <button type="submit">Apply Leave</button>
        </form>
      </div>
      <div className="balance-container">
        <h2>Leave Balance</h2>
        <div className="balance">
          Available {leaveType} Leaves: {leaveBalanceData[leaveType]}
        </div>
      </div>
    </div>
  );
};

export default Leavemanagement;
