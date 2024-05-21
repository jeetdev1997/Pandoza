import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const CustomDropdown = ({ data, value, onChange, label, className, renderMenuItem }) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label={label}
      className="mui-input"
      value={value}
      onChange={onChange}
      sx={{
        '& label.Mui-focused': {
          color: '#00003B', // change the label color when focused
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'var(--g4)', // change the border color
          },
          '&:hover fieldset': {
            borderColor: '#FFD600', // change the border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FFD600', // change the border color when focused
          },
          '&.Mui-error fieldset': {
            borderColor: '#fff', // change the border color when in error state
          },
        },
      }}
    >
      {data && data.map((item) => renderMenuItem(item))}
    </Select>
  );
};

export default CustomDropdown;
