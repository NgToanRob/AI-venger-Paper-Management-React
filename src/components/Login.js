import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Tabs,
  Tab,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import API_BASE_URL from '../apiConfig';

const Login = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleLogin = async () => {
    const data = {
      'email': email,
      'password': password,
      'remember_me': rememberMe,
    };
    console.log(data)

    try {
      const response = await fetch(`${API_BASE_URL}auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include', // Send cookies with the request
      });

      const responseData = await response.json();
      console.log(responseData)

      if (response.ok) {
        // Login successful
        console.log(response.cookies)
        history.push('/home'); // Navigate to /home
      } else {
        // Login failed
        setStatus('Invalid email or password'); // Display error message
      }
    } catch (error) {
      setStatus('An error occurred'); // Display error message
    }
  };


  const handleRegister = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(`${API_BASE_URL}auth/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Registration successful
        console.log('Registration successful:', responseData.message);
        history.push('/home'); // Navigate to /home
      } else {
        // Registration failed
        setStatus(responseData.message);
      }
    } catch (error) {
      setStatus('An error occurred'); // Display error message
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        marginTop: '100px'
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation={3}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          <Box sx={{ p: 2 }}>
            {currentTab === 0 && (
              <Box>
                <Typography variant="h6" align="center" gutterBottom>
                  Login
                </Typography>
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  fullWidth
                  margin="normal"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />
                {status && <p style={{ color: 'red' }}>{status}</p>} {/* Display error message */}
                <Button
                  sx={{
                    marginTop: '10px'
                  }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Box>
            )}
            {currentTab === 1 && (
              <Box>
                <Typography variant="h6" align="center" gutterBottom>
                  Register
                </Typography>
                <TextField
                  label="Name"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {status && <p style={{ color: 'red' }}>{status}</p>} {/* Display error message */}
                <TextField
                  label="Password"
                  fullWidth
                  margin="normal"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  sx={{
                    marginTop: '10px'
                  }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
