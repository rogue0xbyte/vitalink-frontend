import React, { useState } from 'react';
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
import { useNavigate, Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { CardContent, CardActions, Button, Checkbox, FormControl, InputLabel, Select, MenuItem, TextField, FormGroup, FormControlLabel } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const rows = [
  { medicalDiagnosis: 'Flu', duration: '1 week' },
  { medicalDiagnosis: 'Migraine', duration: '2 days' },
  { medicalDiagnosis: 'Fractured leg', duration: '4 weeks' },
  { medicalDiagnosis: 'Allergic reaction', duration: '3 days' },
  { medicalDiagnosis: 'High fever', duration: '1 week' },
];

const DrugDosageForm = () => {
  const [selectedDrug, setSelectedDrug] = useState('');
  const [dosage, setDosage] = useState('');
  const [dosagesByDay, setDosagesByDay] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
    Saturday: '',
    Sunday: '',
  });

  const handleDrugChange = (event) => {
    setSelectedDrug(event.target.value);
  };

  const handleDosageByDayChange = (day) => (event) => {
    const value = event.target.value;
    // Ensure that only numeric values with decimal points are accepted for dosage
    if (/^\d*\.?\d*$/.test(value)) {
        setDosagesByDay({ ...dosagesByDay, [day]: value });
    }
};


  return (
    <React.Fragment>
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          label="Therapy"
          select
          value={selectedDrug}
          onChange={handleDrugChange}
          SelectProps={{
            native: false,
          }}
        >
          <option value="warfarin">Warfarin</option>
          <option value="acitrom">Acitrom</option>
        </TextField>
      </FormControl>
      <FormGroup>
        {Object.entries(dosagesByDay).map(([day, dosageByDay]) => (
          <FormControl fullWidth key={day} sx={{ m: 1 }}>
           <TextField
              label={dosageByDay ? `${day} (mg)` : `Dosage for ${day} (mg)`}
              placeholder={`Dosage for ${day} (mg)`}
              value={dosageByDay}
              onChange={handleDosageByDayChange(day)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        ))}
      </FormGroup>
    </React.Fragment>
  );
};

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
      <Typography variant="h6" style={{ textAlign: 'center', fontFamily: 'Roboto', fontWeight: '100' }}>Past INR Levels</Typography>
      <canvas ref={chartRef}></canvas> {/* Use ref to render the chart */}
    </div>
  );
};

function AssignDosage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <br />
      <br />
      <DenseAppBar title="Re-Assign Dosage"/>
      <br />
      <div style = {{paddingLeft: "3%"}}>
        <Paper elevation={3} style={{width : "98%"}}>
        <br />
          <div style={{ paddingLeft: "5%" }}>
            <Paper style={{ backgroundColor: '#e0dcec', padding: '10px', borderRadius: '5px', marginTop: '10px', width: "90%" }}>
            <h3 style={{fontFamily: "Roboto", fontWeight: "100", textAlign: "center"}}>Medical History</h3> 
              <TableContainer component={Paper} style={{ maxHeight: 200, width: '100%' }}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ backgroundColor: '#3f51b5', color: '#fff', position: 'sticky', top: 0, fontWeight: 1000}}>Medical Occurence</TableCell>
                      <TableCell align="right" style={{ backgroundColor: '#3f51b5', color: '#fff', position: 'sticky', top: 0, fontWeight: 1000 }}>Timeline</TableCell>
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

          <div style = {{paddingLeft: "5%"}}>
          <Paper style={{ backgroundColor: '#e0dcec', padding: '10px', borderRadius: '5px', marginTop: '10px', width: '90%'}}>
              <Graph />
            </Paper>
          </div>
          
          <div style={{textAlign: "center"}}>
          <br />
            <div></div><b>Side-Effects:</b> Severe Stomach Pain <br />
            <div><b>Lifestyle Changes:</b></div><br />
            <div><b>Other Medications:</b> Diarrhoea Tablet, Vomit Tablet, Calpol, Delcon, Levolin, Meftal</div><br />
            <div><b>Prolonged Illness:</b> nothign</div><br />
            <div><b>Contact of Patient:</b></div>
            <div><b>Patient's Kin name and contact:</b></div>
          </div><br />

          <div style={{ textAlign: "center" }}>
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <CardContent>
                  <DrugDosageForm />
                </CardContent>
              </Card>
            </Box>
          </div>

          <CardActions style={{ justifyContent: 'center' }}>
            <Button size="small" onClick={handleBack}>Update Dosage</Button>
          </CardActions>

        </Paper>
      </div>
      <br />
    </div>
  );
}

export default AssignDosage;
