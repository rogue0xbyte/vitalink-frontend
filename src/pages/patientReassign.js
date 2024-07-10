import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import DenseAppBar from '../component/navbar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export default function PatientReassign() {
  return (
    <div>
      <DenseAppBar title="Main Page" />
      <br/>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card sx={{ width: 200, margin: '0 10px'}}>
            <CardContent>
              <CardMedia
                sx={{
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: '50%',
                }}
              >
                <Avatar sx={{ width: 64, height: 64 }}>
                  <PersonIcon />
                </Avatar>
              </CardMedia>
              <Typography>
                Aaditya Rengarajan
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Reassign</Button>
            </CardActions>
          </Card>

        {/* Repeat the above Grid item for the second card */}
        
          <Card sx={{ width: 200, margin: '0 10px' }}>
            <CardContent>
              <CardMedia
                sx={{
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                }}
              >
                <Avatar sx={{ width: 64, height: 64 }}>
                  <PersonIcon />
                </Avatar>
              </CardMedia>
              <Typography>
                Kumaar S
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Reassign</Button>
            </CardActions>
          </Card>
          </div>
          <br/>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Card sx={{ width: 200, margin: '0 10px'}}>
            <CardContent>
              <CardMedia
                sx={{
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: '50%',
                }}
              >
                <Avatar sx={{ width: 64, height: 64 }}>
                  <PersonIcon />
                </Avatar>
              </CardMedia>
              <Typography>
                Vikhash K
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Reassign</Button>
            </CardActions>
          </Card>

        {/* Repeat the above Grid item for the second card */}
        
          <Card sx={{ width: 200, margin: '0 10px' }}>
            <CardContent>
              <CardMedia
                sx={{
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                }}
              >
                <Avatar sx={{ width: 64, height: 64 }}>
                  <PersonIcon />
                </Avatar>
              </CardMedia>
              <Typography>
                Subhashri
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Reassign</Button>
            </CardActions>
          </Card>
          </div>
    </div>
  );
}
