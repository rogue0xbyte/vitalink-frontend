import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AssignDosage from './pages/AssignDosage';
import TodaysReport from './pages/TodaysReport';
import PatientSpecificView from './pages/PatientSpecificView';
import DenseAppBar from './component/navbar';

function App() {
  return (
    <Router>
      <div>
        
        <nav>
          <ul>
            <li>
              <Link to="/assign-dosage">Assign Dosage</Link>
            </li>
            <li>
              <Link to="/todays-report">Today's Report</Link>
            </li>
            <li>
              <Link to="/patient-specific-view">Patient Specific View</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/assign-dosage" element={<AssignDosage/>} />
          <Route path="/todays-report" element={<TodaysReport/>} />
          <Route path="/patient-specific-view" element={<PatientSpecificView/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
