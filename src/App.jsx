import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// MUI imports
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

function App() {
  const [value, setValue] = useState(0);

  const handleSubmit = () => {
    if (value <= 3) {
      window.location.href = "https://docs.google.com/forms/d/11SJ3feaudPUiN730cvh8ptYnU3uA0-GaSufHOd8lzU4/preview";
    } else {
      window.location.href =
        "https://g.page/r/Cc-tpEpi_9P0EBI/review";
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} sx={{ mt: 10, p: 4, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Please Rate Us
        </Typography>
        <Box sx={{ my: 3 }}>
          <Rating
            name="user-rating"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            size="large"
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={value === 0}
        >
          Submit
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
