import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DenseAppBar from '../component/navbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MainPage() {
    const [expanded, setExpanded] = React.useState([false, false, false]);
  
    const handleExpandClick = (index) => {
      setExpanded((prevExpanded) => {
        const newExpanded = [...prevExpanded];
        newExpanded[index] = !newExpanded[index];
        return newExpanded;
      });
    };
  
    return (
      <GradientBackground>
        <DenseAppBar title="Main Page" />
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/patient-table-view" style={{ textDecoration: 'none' }}>
            <GlassMorphismButton variant="contained" disableElevation>
              TABLE - VIEW
            </GlassMorphismButton>
          </Link>
        </div>
        <br/>
        <div>
          {[...Array(3)].map((_, index) => (

            <Card key={index} sx={{ maxWidth: 345, padding: '20px', marginBottom: '10px' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    S
                  </Avatar>
                }
                title={index === 0 ? "Shreya" : index === 1 ? "Renga" : "Default Title"} // Modify the title for each card
                subheader={index === 0 ? "(PID: 24PAT01304)" : index === 1?"(24PAT1234)":"default"} // Modify the subheader for each card
              />
              <CardActions disableSpacing>
                <Link to="/patient-reassign" style={{ textDecoration: 'none' }}>
                  <IconButton aria-label="Assign Caretaker">
                    <AssignmentIndIcon />
                  </IconButton>
                </Link>
                <Link to="/patient-specific-view" style={{ textDecoration: 'none' }}>
                  <IconButton aria-label="Detailed View">
                    <FullscreenIcon />
                  </IconButton>
                </Link>
                <ExpandMore
                  expand={expanded[index]}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expanded[index]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                <CardContent>
                  <CardContent>
                    <Typography variant="body3" color="text.secondary">
                      <strong>Age</strong>: 20 {/* Replace 30 with the actual age */}
                    </Typography>
                    <br />
                    <Typography variant="body3" color="text.secondary">
                      <strong>Doctor</strong>: Dr. Aaditya Rengarajan {/* Replace Dr. John Doe with the actual doctor's name */}
                    </Typography>
                    <br />
                    <Typography variant="body3" color="text.secondary">
                      <strong>Caretaker</strong>: Kumaar S {/* Replace Jane Smith with the actual caretaker's name */}
                    </Typography>
                  </CardContent>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </div>

      </GradientBackground>
    );
  }

{/*
WORK TO BE DONE ON THIS PAGE:
REDIRECT THE CARETAKER ASSIGNER PAGE
*/
}