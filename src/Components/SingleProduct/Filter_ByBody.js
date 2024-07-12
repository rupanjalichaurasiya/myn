import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Filter_ByBody = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(`/${path}`);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
      <Button variant="contained" onClick={() => handleNavigation('pear_body')}>
        Pear Body
      </Button>
      <Button variant="contained" onClick={() => handleNavigation('inverted_triangle')}>
        Inverted Triangle
      </Button>
      <Button variant="contained" onClick={() => handleNavigation('rectangle_body')}>
        Rectangle Body
      </Button>
      <Button variant="contained" onClick={() => handleNavigation('tall_and_skinny')}>
        Tall and Skinny
      </Button>
      <Button variant="contained" onClick={() => handleNavigation('formals')}>
        Short Heighted
      </Button>
      <Button variant="contained" onClick={() => handleNavigation('short_heighted')}>
        Style Formals
      </Button>
    </Box>
  );
};

export default Filter_ByBody;