import React from 'react';
import DenseAppBar from '../component/navbar';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import '@fontsource/roboto';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js
import Button from '@mui/material/Button';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate, Link } from 'react-router-dom';

const rows = [
  { medicalDiagnosis: 'Flu', duration: '1 week' },
  { medicalDiagnosis: 'Migraine', duration: '2 days' },
  { medicalDiagnosis: 'Fractured leg', duration: '4 weeks' },
  { medicalDiagnosis: 'Allergic reaction', duration: '3 days' },
  { medicalDiagnosis: 'High fever', duration: '1 week' },
];

const columns: GridColDef[] = [
  { field: 'Date_time', headerName: 'Date/Time', width: 150},
  { field: 'Drug', headerName: 'Drug'},
  { field: 'Intake', headerName: 'Intake Quantity (mg)'},
  { field: 'Remark', headerName: 'Remark'},
];

const missed_rows = [
  {id:1, Dates: "03/03/2024", Status: "O", Drug: "Warfarin", Intake_Quant: "25"},
  {id:2, Dates: "04/03/2024", Status: "X", Drug: "Warfarin", Intake_Quant: "16"},
  {id:3, Dates: "05/03/2024", Status: "O", Drug: "Warfarin", Intake_Quant: "20"},
  {id:4, Dates: "06/03/2024", Status: "O", Drug: "Warfarin", Intake_Quant: "10"},
  {id:5, Dates: "03/03/2024", Status: "X", Drug: "Warfarin", Intake_Quant: "15"},
]

const patRep = [
  {Date: "None", MedRep: "Diarrhoea Tablet, Vomit Tablet", Presc: ""},
  {Date: "2024-02-02", MedRep: "Calpol, Delcon, Levolin, Meftal", Presc: "/images/7390906a_PRESCRIP.JPEG"}
]

const patDose = [
  {Day: "Monday", Dosage: "12"},
  {Day: "Thursday", Dosage: "12"},
]

const missed_column_assign_2 = missed_rows.map(row => ({
  id: row.id,
  Date_time: row.Dates,
  Drug: row.Drug,
  Intake: row.Intake_Quant,
  Remark: row.Status === "O" ? "Taken" : "Missed",
}))

// Graph component
const Graph = () => {
  const chartRef = useRef(null); // Create a ref for the chart canvas
  const chartInstance = useRef(null); // Create a ref for the chart instance

  useEffect(() => {
    // Mock data for the graph
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const inrLevels = [0.2, 0.4, 0.6, 0.8, 1.0, 0.8, 0.6, 0.4, 0.2, 0.6, 0.8, 1.0];

    // Chart data
    const data = {
      labels: months,
      datasets: [
        {
          label: 'INR Levels',
          data: inrLevels,
          fill: false,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    // Chart options
    const options = {
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 1,
          ticks: {
            stepSize: 0.2,
          },
        },
      },
    };

    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Render the chart
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: data,
        options: options,
      });
    }

    // Clean up function to destroy the chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '90%', margin: '20px auto' }}>
      <Typography variant="h6" style={{ textAlign: 'center', fontFamily: 'Roboto', fontWeight: '100' }}>INR Levels Over Time</Typography>
      <canvas ref={chartRef}></canvas> {/* Use ref to render the chart */}
    </div>
  );
};



function PatientSpecificView() {
  const navigate = useNavigate();
  return (
    <div>
      <DenseAppBar title="View Patient"/>
      <br />
      <div style = {{paddingLeft: "3%"}}>
        <Paper elevation={3} style={{width : "98%"}}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <Typography variant="h6" style={{ marginRight: '10px', marginBottom: '0', fontSize: '1.5rem',  fontFamily: 'Roboto', fontWeight: "100"}}>Shreya S</Typography>
            <Typography variant="body1" style={{ marginBottom: '0', fontSize: '1rem', color: 'grey',  fontFamily: 'Roboto', fontWeight: "100"}}>20, F</Typography>
          </div>


          <div style={{ paddingLeft: "5%" }}>
            <Paper style={{ backgroundColor: '#e0dcec', padding: '10px', borderRadius: '5px', marginTop: '10px', width: "90%" }}>
              <TableContainer component={Paper} style={{ maxHeight: 200, width: '100%' }}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: '#3f51b5', color: '#fff', position: 'sticky', top: 0 }}>Medical Diagnosis</TableCell>
                      <TableCell align="right" style={{ backgroundColor: '#3f51b5', color: '#fff', position: 'sticky', top: 0 }}>Duration</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#fff' }}>
                        <TableCell component="th" scope="row" style={{ backgroundColor: '#fffff', color: '#00000', fontWeight: 'bold' }}>{row.medicalDiagnosis}</TableCell>
                        <TableCell align="right">{row.duration}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>


          <div style={{ paddingLeft: "5%" }}>
            <Paper style={{ backgroundColor: '#e0dcec', padding: '10px', borderRadius: '5px', marginTop: '10px', width: '90%'}}>
              <h3 style={{fontFamily: "Roboto", fontWeight: "100", textAlign: "center"}}>Missed Doses</h3>
              <TableContainer component={Paper} style={{ maxHeight: 200, width: '100%' }}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: '#3f51b5', color: '#fff' }}>Dates</TableCell>
                      <TableCell align="right" style={{ backgroundColor: '#3f51b5', color: '#fff' }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {missed_rows.map((row, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#fff' }}>
                        <TableCell component="th" scope="row" style={{ backgroundColor: '#fffff', color: '#00000', fontWeight: 'bold' }}>{row.Dates}</TableCell>
                        <TableCell align="right">{row.Status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>


          <div style = {{paddingLeft: "5%"}}>
          <Paper style={{ backgroundColor: '#e0dcec', padding: '10px', borderRadius: '5px', marginTop: '10px', width: '90%'}}>
              <Graph />
              <center>
                <Button variant="contained" style={{backgroundColor: "#f8edff", color: "#000000"}} onClick={() => navigate('/assign-dosage')}>View INR Reports</Button>
              </center>
            </Paper>
          </div>

          <div style={{ paddingLeft: "5%" }}>
            <Paper style={{ backgroundColor: '#e0dcec', padding: '10px', borderRadius: '5px', marginTop: '10px', width: '90%'}}>
              <h4 style={{fontFamily: "Roboto", fontWeight: "100", textAlign: "center"}}>Dosage History</h4>
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={missed_column_assign_2}
                  
                  columns={columns}
                  autoHeight // Adjusts the height based on content
                  pageSize={5} // Sets the default page size
                  checkboxSelection
                  rowId={(row) => row.id}
                  
                />
              </div>
            </Paper>
          </div>

          <div style={{textAlign: "center"}}>
          <br />
            <div></div><b>Type of Therapy:</b> Warfarin Theraphy<br />
            <div>Evenings (Around 6PM)</div><br />
            <div><b>Assigned Drug Dosage level: </b> A cumulative of 12.32mg every MON, SAT on Before Food</div><br />
          </div><br />

          <div style={{ paddingLeft: "5%" }}>
            <Paper style={{ backgroundColor: '#e0dcec', padding: '10px', borderRadius: '5px', marginTop: '10px', width: "90%" }}>
              <TableContainer component={Paper} style={{ maxHeight: 200, width: '100%' }}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: '#3f51b5', color: '#fff', position: 'sticky', top: 0 }}>Day</TableCell>
                      <TableCell align="right" style={{ backgroundColor: '#3f51b5', color: '#fff', position: 'sticky', top: 0 }}>Dosage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {patDose.map((row, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#fff' }}>
                        <TableCell component="th" scope="row" style={{ backgroundColor: '#fffff', color: '#00000', fontWeight: 'bold' }}>{row.Day}</TableCell>
                        <TableCell align="right">{row.Dosage}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
          
          <div style={{textAlign: "center"}}>
          <br />
            <div></div><b>Therapy Start Date:</b> 02 January '24 <br />
            <div><b>Current INR:</b> 1.0</div><br />
            <div><b>Target INR:</b> 2.3 - 8.9</div><br />
            <div><b>Actionable Intelligence:</b> Dose to be increased</div><br />
            <div><b>Reports Raised by Patient:</b>DiarrhoeaTablet, Vomit Tablet, Nothing, Severe Stomach Pain, Calpol, Delcon, Levolin, Meftal</div>
          </div><br />

          <div style={{ paddingLeft: "5%" }}>
            <Paper style={{ backgroundColor: '#e0dcec', padding: '10px', borderRadius: '5px', marginTop: '10px', width: "90%" }}>
              <TableContainer component={Paper} style={{ maxHeight: 200, width: '100%' }}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: '#3f51b5', color: '#fff', position: 'sticky', top: 0 }}>Date</TableCell>
                      <TableCell align="right" style={{ backgroundColor: '#3f51b5', color: '#fff', position: 'sticky', top: 0 }}>Medicine Reported</TableCell>
                      <TableCell align="right" style={{ backgroundColor: '#3f51b5', color: '#fff', position: 'sticky', top: 0 }}>Prescription</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {patRep.map((row, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: '#fff' }}>
                        <TableCell component="th" scope="row" style={{ backgroundColor: '#fffff', color: '#00000', fontWeight: 'bold' }}>{row.Date}</TableCell>
                        <TableCell align="right">{row.MedRep}</TableCell>
                        <TableCell align="right">
                          {row.Presc ? (
                            <a href={row.Presc} target="_blank" rel="noopener noreferrer">View Prescription</a>
                          ) : (
                            "No Prescription Available"
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>

          <div style={{textAlign: "center"}}>
          <br />
            <div></div><b>Contact of Patient: </b> +91 12345 67890<br />
            <div><b>Patient's Kin name and Contact: </b> Eswaran S, 1234567890</div><br />
          </div><br />

          <div style= {{textAlign: "center"}}>
          <Button variant="contained" style={{backgroundColor: "#f8edff", color: "#000000"}} onClick={() => navigate('/assign-dosage')}>Stop Medication</Button>
          <br />
          <br />
          <Button variant="contained" style={{backgroundColor: "#f8edff", color: "#000000"}} onClick={() => navigate('/assign-dosage')}>View Dosage History</Button>
          <br />
          <br />
          <Button variant="contained" style={{backgroundColor: "#f8edff", color: "#000000"}} onClick={() => navigate('/assign-dosage')}>Edit Assigned Dosage</Button>
          </div>
          <br />
          <br />

        </Paper>
      </div>
      <br />
    </div>
  );
}

export default PatientSpecificView;
