import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DenseAppBar from '../component/navbar';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Doctor', headerName: 'Doctor', width: 130 },
  { field: 'Theraphy', headerName: 'Theraphy', width: 130 },
  { field: 'Caregiver', headerName: 'Caregiver', width: 130 },
];


const GradientBackground = styled('div')({
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(90deg, #FFD6E5, #A0C4FF)', // Gradient from baby pink to baby blue
    justifyContent: 'center',
  });

  
const GlassMorphismButton = styled(Button)({
    background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
    backdropFilter: 'blur(10px)', // Apply blur effect
    border: '1px solid rgba(255, 255, 255, 0.2)', // Add a border with semi-transparent white color
    color: 'black', // Set text color to black
    transition: 'background 0.3s, backdrop-filter 0.3s', // Smooth transition
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.4)', // Lighten the background on hover
    },
  });

const rows = [
  { id: 1, Name: 'Snow', Doctor: 'Aaditya Rengarajan', Theraphy: 'Warfarin' , Caregiver: 'Unassigned'},
  { id: 2, Name: 'Lannister', Doctor: 'Aaditya Rengarajan', Theraphy: 'Acitron' , Caregiver: 'Unassigned' },
  { id: 3, Name: 'Lannister', Doctor: 'Aaditya Rengarajan', Theraphy: 'Acitrom' , Caregiver: 'Unassigned' },
];

export function PatientTableView() {
  return (
    <GradientBackground>

      <DenseAppBar title="Today's Report" />
      <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/main-page" style={{ textDecoration: 'none' }}>
            <GlassMorphismButton variant="contained" disableElevation>
                PATIENT - WISE - VIEW
            </GlassMorphismButton>
          </Link>
        </div>
        <br/>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight // Adjusts the height based on content
          pageSize={5} // Sets the default page size
          checkboxSelection
        />
      </div>
    </GradientBackground>
  );
}
