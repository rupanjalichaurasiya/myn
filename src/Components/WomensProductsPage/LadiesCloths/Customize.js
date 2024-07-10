import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Box, Typography, Grid, CardMedia, CardContent, FormControlLabel, Checkbox } from '@mui/material';
import './Customize.css'; // Make sure to import the CSS file

const Customize = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [measurements, setMeasurements] = useState({
    neck: '',
    bust: '',
    chest: '',
    waist: '',
    hips: '',
    sleeveLength: '',
    inseam: '',
    shoulderWidth: '',
    height: '',
    weight: '',
    frontWaistLength: '',
    bustDepth: ''
  });

  const [checked, setChecked] = useState({
    noReturnPolicy: false,
    noCOD: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements({ ...measurements, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setChecked((prevChecked) => ({ ...prevChecked, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted measurements:', measurements);
    console.log('Checkboxes:', checked);
    alert("Your customization request has been submitted! Our team will confirm if customization is possible and notify you within 1-2 days. Thank you for embracing body positivity!");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Customize Your Clothing
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {product && (
            <>
              <Box
                component="div"
                className="image-container"
                sx={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden'
                }}
              >
                <CardMedia
                  component="img"
                  height="800"
                  image={product.imageURL}
                  alt={product.typography}
                  className="main-image"
                  sx={{
                    width: '100%',
                    transition: 'opacity 0.3s ease'
                  }}
                />
                <CardMedia
                  component="img"
                  height="800"
                  image="https://www.signnow.com/preview/367/569/367569207.png"
                  alt="hover image"
                  className="hover-image"
                  sx={{
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.typography}
                </Typography>
                <Typography>
                  {product.Price} <strike>{product.realPrice}</strike>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description || 'The best piece of wearing printed Kurti is that you don\'t require additional extras with them. It will go well with printed Kurtis.'}
                </Typography>
              </CardContent>
            </>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Neck (in cm)"
                variant="outlined"
                name="neck"
                value={measurements.neck}
                onChange={handleChange}
              />
              <TextField
                label="Bust (in cm)"
                variant="outlined"
                name="bust"
                value={measurements.bust}
                onChange={handleChange}
              />
              <TextField
                label="Chest (in cm)"
                variant="outlined"
                name="chest"
                value={measurements.chest}
                onChange={handleChange}
              />
              <TextField
                label="Waist (in cm)"
                variant="outlined"
                name="waist"
                value={measurements.waist}
                onChange={handleChange}
              />
              <TextField
                label="Hips (in cm)"
                variant="outlined"
                name="hips"
                value={measurements.hips}
                onChange={handleChange}
              />
              <TextField
                label="Sleeve Length (in cm)"
                variant="outlined"
                name="sleeveLength"
                value={measurements.sleeveLength}
                onChange={handleChange}
              />
              <TextField
                label="Inseam (in cm)"
                variant="outlined"
                name="inseam"
                value={measurements.inseam}
                onChange={handleChange}
              />
              <TextField
                label="Shoulder Width (in cm)"
                variant="outlined"
                name="shoulderWidth"
                value={measurements.shoulderWidth}
                onChange={handleChange}
              />
              <TextField
                label="Height (in cm)"
                variant="outlined"
                name="height"
                value={measurements.height}
                onChange={handleChange}
              />
              <TextField
                label="Weight (in kg)"
                variant="outlined"
                name="weight"
                value={measurements.weight}
                onChange={handleChange}
              />
              <TextField
                label="Front Waist Length (in cm)"
                variant="outlined"
                name="frontWaistLength"
                value={measurements.frontWaistLength}
                onChange={handleChange}
              />
              <TextField
                label="Bust Depth (in cm)"
                variant="outlined"
                name="bustDepth"
                value={measurements.bustDepth}
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox checked={checked.noReturnPolicy} onChange={handleCheckboxChange} name="noReturnPolicy" />}
                label="By customizing, you agree to our No Return Policy"
              />
              <FormControlLabel
                control={<Checkbox checked={checked.noCOD} onChange={handleCheckboxChange} name="noCOD" />}
                label="COD is not available for customized items for security purposes"
              />
              <Button variant="contained" color="primary" type="submit">
                Submit Measurements
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customize;
