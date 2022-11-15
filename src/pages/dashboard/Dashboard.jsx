import React from "react";
import LeftPane from '../../components/left-pane/LeftPane'
import MainDashboard from "../../components/main-dashboard/MainDashboard";
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <LeftPane />
      <MainDashboard />
    </div>
  );
};

export default Dashboard;
