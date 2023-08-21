import React, { useState } from 'react';
import { Grid, Paper, Typography, Checkbox, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import API_BASE_URL from '../apiConfig'; 


const commonTopics = [
  'NLP',
  'Computer Vision',
  'Machine Learning',
  'Deep Learning',
  'Robotics',
  'Data Science',
  'Natural Language Processing',
  'Artificial Intelligence',
  'Reinforcement Learning',
  'Image Processing'
];

const Profile = () => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [status, setStatus] = useState(''); // For displaying status messages

  const updateSelectedTopics = async () => {
    try {
      console.log(selectedTopics)
      const response = await fetch(`${API_BASE_URL}update-topics/`, {
        method: 'POST', // This is a POST request
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies in the request
        body: JSON.stringify({selectedTopics: selectedTopics }), // Assuming selectedTopics is an array of selected topics
      });
  
      if (response.ok) {
        // Handle success if needed
        setStatus('Selected topics updated successfully');
      } else {
        setStatus(`Error updating selected topics: ${response.statusText}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px', marginLeft: '20px' }}>
            <Typography variant="h6" gutterBottom>
              List of Papers
            </Typography>
            {/* ... */}
          </Paper>
        </Grid>


        {/* Update topics */}
        <Grid item xs={6} >
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={commonTopics}
            disableCloseOnSelect
            value={selectedTopics}
            onChange={(event, newValue) => {
              setSelectedTopics(newValue);
            }}
            getOptionLabel={(option) => option}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option}
              </li>
            )}
            style={{ width: '100%', paddingRight: '20px'}}
            renderInput={(params) => (
              <TextField {...params} label="Interests Topics" placeholder="Favorites" />
            )}
          />

          <Box textAlign="center" marginTop="20px">
            <Button
              variant="contained"
              color="primary"
              onClick={updateSelectedTopics}
            >
              Update
            </Button>
          </Box>

          {status && <p style={{ color: 'green' }}>{status}</p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
