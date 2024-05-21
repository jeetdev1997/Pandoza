import React from 'react';
import '../styles/guide.scss';
import Card from '../components/Card';
import FormCard from '../components/FormCard';
import { TextField } from '@mui/material';
import { FaPlus } from 'react-icons/fa6';
function Guide() {
  return (
    <>
      <FormCard title="General details" icons={<FaPlus />} btntext="Add New">
        <TextField />
        <TextField />
      </FormCard>
    </>
  );
}

export default Guide;
