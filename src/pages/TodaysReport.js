import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DenseAppBar from '../component/navbar';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'Patient', headerName: 'Patient', width: 130 },
  { field: 'INR_Level', headerName: 'INR Level', width: 130 },
  { field: 'Lab', headerName: 'Lab', width: 130 },
  { field: 'Attachment', headerName: 'Attachment', width: 130 },
];

const rows = [
  { id: 1, Patient: 'Snow', INR_Level: '12', Lab: 'CBE' },
  { id: 2, Patient: 'Lannister', INR_Level: '12', Lab: 'CBE' },
  { id: 3, Patient: 'Lannister', INR_Level: '12', Lab: 'CBE' },
];

export default function DataTable() {
  return (
    <div>
      <DenseAppBar title="Today's Report" />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight // Adjusts the height based on content
          pageSize={5} // Sets the default page size
          checkboxSelection
        />
      </div>
    </div>
  );
}
