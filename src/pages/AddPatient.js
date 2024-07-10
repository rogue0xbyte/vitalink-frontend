import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Typography } from '@mui/material';
import DenseAppBar from '../component/navbar';

const NewPatientCreation = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [targetInrFrom, setTargetInrFrom] = useState('');
  const [targetInrTo, setTargetInrTo] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [startDate, setStartDate] = useState('');
  const [medicalHistory, setMedicalHistory] = useState([{ date: '', description: '' }]);
  const [contactNumber, setContactNumber] = useState('');
  const [kinName, setKinName] = useState('');
  const [kinContactNumber, setKinContactNumber] = useState('');
  const [therapy, setTherapy] = useState('');
  const [dosages, setDosages] = useState({}); // State for dosages of each day

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to backend)
  };

  // Function to handle adding new medical history entry
  const handleAddMedicalHistory = () => {
    setMedicalHistory([...medicalHistory, { date: '', description: '' }]);
  };

  // Function to handle removing a medical history entry
  const handleRemoveMedicalHistory = (index) => {
    const updatedMedicalHistory = [...medicalHistory];
    updatedMedicalHistory.splice(index, 1);
    setMedicalHistory(updatedMedicalHistory);
  };

  // Function to handle changing medical history fields
  const handleMedicalHistoryChange = (index, field, value) => {
    const updatedMedicalHistory = [...medicalHistory];
    updatedMedicalHistory[index][field] = value;
    setMedicalHistory(updatedMedicalHistory);
  };

  // Function to handle changing dosage for a specific day
  const handleDosageChange = (day, value) => {
    setDosages({ ...dosages, [day]: value });
  };

  return (
    <div>
    <DenseAppBar title="Add Patient" />
    <br/>
    <br/>
    <form onSubmit={handleSubmit}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
      <br/>
      <br/>
      <TextField label="Target INR (from)" value={targetInrFrom} onChange={(e) => setTargetInrFrom(e.target.value)} fullWidth />
      <br/>
      <br/>
      <TextField label="Target INR (to)" value={targetInrTo} onChange={(e) => setTargetInrTo(e.target.value)} fullWidth />
      <br/>
      <br/>
      <TextField label="Age" value={age} onChange={(e) => setAge(e.target.value)} fullWidth />
      <br/>
      <br/>
      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <br/>
      <TextField label="Start Date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} fullWidth />
      {/* Medical History */}
      <br/>
      <br/>
      <Typography variant="h7" gutterBottom>
        Medical History (Date - Description)
      </Typography>
      <br/>
      <br/>
      {medicalHistory.map((entry, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <TextField
            label="Date"
            type="date"
            value={entry.date}
            onChange={(e) => handleMedicalHistoryChange(index, 'date', e.target.value)}
            fullWidth
          />
          <TextField
            label="Description"
            value={entry.description}
            onChange={(e) => handleMedicalHistoryChange(index, 'description', e.target.value)}
            fullWidth
            multiline
            rows={3}
          />
          <Button onClick={() => handleRemoveMedicalHistory(index)} variant="outlined" style={{ marginTop: '10px' }}>
            Remove
          </Button>
        </div>
      ))}
      <br/>
      <br/>
      <Button onClick={handleAddMedicalHistory} variant="outlined" style={{ marginBottom: '20px' }}>
        Add Medical History
      </Button>
      {/* Additional fields */}
      <TextField label="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} fullWidth />
      <br/>
      <br/>
      <TextField label="Kin Name" value={kinName} onChange={(e) => setKinName(e.target.value)} fullWidth />
      <br/>
      <br/>
      <TextField label="Kin Contact Number" value={kinContactNumber} onChange={(e) => setKinContactNumber(e.target.value)} fullWidth />
      <br/>
      <br/>
      <FormControl fullWidth>
        <InputLabel>Therapy</InputLabel>
        <Select value={therapy} onChange={(e) => setTherapy(e.target.value)}>
          <MenuItem value="acitrom">Acitrom</MenuItem>
          <MenuItem value="warfarin">Warfarin</MenuItem>
        </Select>
      </FormControl>
      <br/>
      <FormControl fullWidth>
        <FormControlLabel
          control={<Checkbox />}
          label="Monday"
        />
        <TextField
          label="Dosage (mg)"
          value={dosages.monday}
          onChange={(e) => handleDosageChange('monday', e.target.value)}
        />
        <br/>
        <FormControlLabel
          control={<Checkbox />}
          label="Tuesday"
        />
        <TextField
          label="Dosage (mg)"
          value={dosages.monday}
          onChange={(e) => handleDosageChange('monday', e.target.value)}
        />
        <br/>
        <FormControlLabel
          control={<Checkbox />}
          label="Wednesday"
        />
        <TextField
          label="Dosage (mg)"
          value={dosages.monday}
          onChange={(e) => handleDosageChange('monday', e.target.value)}
        />
        <br/>
        <FormControlLabel
          control={<Checkbox />}
          label="Thursday"
        />
        <TextField
          label="Dosage (mg)"
          value={dosages.monday}
          onChange={(e) => handleDosageChange('monday', e.target.value)}
        />
        <br/>
        <FormControlLabel
          control={<Checkbox />}
          label="Friday"
        />
        <TextField
          label="Dosage (mg)"
          value={dosages.monday}
          onChange={(e) => handleDosageChange('monday', e.target.value)}
        />
        <br/>
        <FormControlLabel
          control={<Checkbox />}
          label="Saturday"
        />
        <TextField
          label="Dosage (mg)"
          value={dosages.monday}
          onChange={(e) => handleDosageChange('monday', e.target.value)}
        />
        <br/>
        <FormControlLabel
          control={<Checkbox />}
          label="Sunday"
        />
        <TextField
          label="Dosage (mg)"
          value={dosages.monday}
          onChange={(e) => handleDosageChange('monday', e.target.value)}
        />
        <br/>
        <br/>
      </FormControl>
      {/* Repeat the above FormControl and TextField for each day of the week */}
      <Button type="submit" variant="contained" color="primary">
        Add Patient
      </Button>
    </form>
    </div>
  );
};

export default NewPatientCreation;
