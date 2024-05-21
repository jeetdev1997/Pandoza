import React, { useEffect, useState } from 'react'
import "../../styles/forgetpassword.scss"
import logo from "../../assets/login/brand-logo.svg";
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import countrycode from "../../static/CountryCodes"
import axios from 'axios';
const ForgetPassword = () => {
  // country select 
  const [selectedCountry, setSelectedCountry] = useState(countrycode && countrycode.length > 0 ? countrycode[0].dial_code : '');
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [formdata,setFormdata] = useState({
    email : ""
  })
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
    setIsOptionOpen(false); // Close the option tab after selection if desired
  };
  // organisation list by registered email.
  const [org, setOrg] = useState([])
  const fetchHospital = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}api/v01/getHospitalListByEmail`,{
        emailId : formdata.email
      });
      // Handle the response data here 
      setOrg(response.data.object.hospitalMasterDtoList);
      console.log(org)
    } catch (error) {
      console.error('Error fetching hospital:', error);
    }
  }

  
  return (
    <div className="forget-password-parent">
      <div className="forget-left bg-img-cover"></div>
      <div className="forget-right">
        <div className="password-reset-form">
          <img src={logo} alt="" width={"180px"} />
          <form action="" className='reset-form'>
            <div className="reset-heading">
              <h1 className='heading-h1'>New Username</h1>
              <span className='heading-description'>Enter registered details for verification</span>
            </div>
            <div className="reset-input-box-div">
              <TextField
                required
                className='mui-input'
                id="outlined-basic"
                label="Enter Registered Email"
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
                  },
                }}
                 onChange={e=>setFormdata({...formdata,email:e.target.value})}
                onBlur={()=>fetchHospital()}
              />
              {

              }
              <span className="err-msg">Email is not verified</span>
            </div>
            <div className="reset-phone-number">

              <div className="phone-box">
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  className='country-select'
                  label="Code"
                  open={isOptionOpen}
                  onClose={() => setIsOptionOpen(false)}
                  onOpen={() => setIsOptionOpen(true)}
                  value={selectedCountry}
                  onChange={handleChange}
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
                    },
                  }}

                >
                  {countrycode && countrycode.map((item) => {
                    return (
                      <MenuItem value={item.dial_code}>{isOptionOpen ? `${item.name} (${item.dial_code})` : item.dial_code}</MenuItem>
                    )
                  })}



                </Select>
                <TextField
                  required
                  className='mui-input-contact'
                  id="outlined-basic"
                  label="Phone Number"
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
                    },
                  }}
                />
              </div>
              <span className="err-msg-phone">Phone number is not valid.</span>
            </div>
            {/* organisation names */}
            <div className="reset-input-box-div">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Organisation"
                fullWidth
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
                  },
                }}
              >
                {org && org.map((data) => {
                  return (
                    <MenuItem value={data.hospitalId}>{data.hospitalName}</MenuItem>
                  )
                })}
              </Select>
            </div>
            <button className='form-button'>Send Otp</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword