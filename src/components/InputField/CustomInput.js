import React from 'react';
import TextField from '@mui/material/TextField';

const CustomInput = ({ label, value, onChange, disabled, className }) => {
  return (
    <TextField
      className="mui-input"
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      disabled={disabled}
      sx={{
        '& label.Mui-focused': {
          color: '#00003B',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'var(--g4)', 
          },
          '&:hover fieldset': {
            borderColor: '#FFD600', 
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FFD600', 
          },
          '&.Mui-error fieldset': {
            borderColor: '#fff', 
          },
        },
      }}
    />
  );
};

export default CustomInput;
