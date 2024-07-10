import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AssignDosage from './pages/AssignDosage';
import TodaysReport from './pages/TodaysReport';
import PatientSpecificView from './pages/PatientSpecificView';
import MainPage from './pages/mainPage';
import PatientReassign from './pages/patientReassign';
import { PatientTableView } from './pages/table';
import NewPatientCreation from './pages/AddPatient';
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
            <li>
              <Link to="/main-page">Main Page</Link>
            </li>
            <li>
              <Link to="/patient-reassign">Patient Reassign</Link>
            </li>
            <li>
              <Link to="/patient-table-view">Patient Table View</Link>
            </li>
            <li>
              <Link to="/add-patient">Patient Table View</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/assign-dosage" element={<AssignDosage/>} />
          <Route path="/todays-report" element={<TodaysReport/>} />
          <Route path="/patient-specific-view" element={<PatientSpecificView/>} />
          <Route path="/patient-reassign" element={<PatientReassign/>} />
          <Route path="/main-page" element={<MainPage/>} />
          <Route path="/patient-table-view" element={<PatientTableView/>} />
          <Route path="/add-patient" element={<NewPatientCreation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
