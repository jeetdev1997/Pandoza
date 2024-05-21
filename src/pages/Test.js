import React from 'react'
import MainHeader from '../components/MainHeader'
import Card from '../components/Card'
import { MdOutlineSave } from "react-icons/md";
import Steps from '../components/Steps';
import FormTable from '../components/FormTable';
import { TextField } from '@mui/material';
const Test = () => {

  const CardVal =
  {
    "header": [
      {
        "icon": <MdOutlineSave />,
        "title": "Save"
      },
      {
        "icon": <MdOutlineSave />,
        "title": "Save"
      },
    ],
    "footer": [
      {
        "icon": <MdOutlineSave />,
        "title": "Save"
      },
      {
        "icon": <MdOutlineSave />,
        "title": "Save"
      },
      {
        "icon": <MdOutlineSave />,
        "title": "Save"
      },
    ]
  }
  return (
    <div>

      <MainHeader title="New patient Registration" link1="/test" link1_text="Home" link2="/test" link2_text="Home" link3="/test" link3_text="Home" link4="/test" link4_text="Home" />



      <Steps title="Personal details" steps={6} >
        <MainHeader />
        <Card title="General details" cardvalue={CardVal}>
          <div className="flex items-center justify-center gap-[var(--unit)] py-[var(--unit)]">
            <TextField
              required
              className='mui-input w-full'
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              sx={{
                '& label.Mui-focused': {
                  color: '#00003B', // change the label color when focused
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00003B', // change the border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#FFD600', // change the border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFD600', // change the border color when focused
                  },
                  '&.Mui-error': {
                    borderColor: '#fff', // change the border color when in error state
                  },
                },
              }}

            />
            <TextField
              required
              className='mui-input w-full'
              id="outlined-basic"
              label="Membership Number"
              variant="outlined"
              sx={{
                '& label.Mui-focused': {
                  color: '#00003B', // change the label color when focused
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00003B', // change the border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#FFD600', // change the border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#FFD600', // change the border color when focused
                  },
                  '&.Mui-error': {
                    borderColor: '#fff', // change the border color when in error state
                  },
                },
              }}

            />
          </div>
          <FormTable />

        </Card>
      </Steps>
    </div>
  )
}

export default Test