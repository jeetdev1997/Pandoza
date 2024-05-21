import React, { useEffect, useState } from 'react'
import "./addnewreferral.scss"
import Pop from '../../../../components/Pop'
import Card from '../../../../components/Card'
import countrycode from "../../../../static/CountryCodes"
import { MenuItem, Select, TextField } from '@mui/material'
import { useStateValue } from '../../../../context/Context'
const AddNewReferral = ({ close }) => {
    const [phonecode, setPhonecode] = useState(countrycode && countrycode.length > 0 ? countrycode[0].dial_code : '');
    const [phoneopen, setPhoneopen] = useState(false);
    // city state country states
    const [stateid, setStateid] = useState();
    const [countryid, setCountryid] = useState();
    const [cityid, setCityid] = useState();
    // context api imports---------------------------------------[]
    const { fetchState, prefix, gender, formatDate, country, fetchCity, city, states, nhsmaster, doctorlist } = useStateValue()
    // fetch countries
    useEffect(() => {
        fetchCity(stateid)
    }, [stateid])
    // fetch states
    useEffect(() => {
        fetchState(countryid)
    }, [countryid])
    const handlePhoneChange = (event) => {
        setPhonecode(event.target.value);
        setPhoneopen(false); // Close the option tab after selection if desired
    };
    return (
        <div className="addnewreferral-parent">
            <Pop close={close} title="Add New Referral">
              
                    <div className="form-row">
                        <div className="form-row-left">
                            <TextField

                                className='mui-input'
                                id="outlined-basic"
                                label="Referral Name"
                                variant="outlined"
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

                            />
                        </div>
                        <div className="form-row-right">

                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                className='country-code'
                                label="Code"
                                open={phoneopen}
                                onClose={() => setPhoneopen(false)}
                                onOpen={() => setPhoneopen(true)}
                                value={phonecode}
                                onChange={handlePhoneChange}
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
                                {countrycode && countrycode.map((item) => {
                                    return (
                                        <MenuItem value={item.dial_code}>{phoneopen ? `${item.name} (${item.dial_code})` : item.dial_code}</MenuItem>
                                    )
                                })}



                            </Select>
                            <TextField

                                className='mui-input'
                                id="outlined-basic"
                                label="Mobile No."
                                variant="outlined"
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

                            />
                        </div>
                    </div>
                    <div className="form-row">

                        <TextField

                            className='mui-input'
                            multiline
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
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

                        />


                    </div>
                    <div className="form-row">

                        <TextField

                            className='mui-input'
                            multiline
                            id="outlined-basic"
                            label="Street Name"
                            variant="outlined"
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

                        />
                        <TextField

                            className='mui-input'
                            multiline
                            id="outlined-basic"
                            label="Town"
                            variant="outlined"
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

                        />


                    </div>
                    <div className="form-row">

                        <TextField

                            className='mui-input'
                            multiline
                            id="outlined-basic"
                            label="Post Code"
                            variant="outlined"
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

                        />
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Country"
                            className='mui-input'
                            value={countryid}
                            onChange={e => setCountryid(e.target.value)}
                        >
                            {country && country.map((data) => {
                                return (
                                    <MenuItem value={data.countryId}>{data.countryName}</MenuItem>
                                )
                            })}
                        </Select>
                    </div>
                    {/* county */}
                    <div className="form-row">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="County/State"
                            className='mui-input'
                            value={stateid}
                            onChange={e => setStateid(e.target.value)}
                        >
                            {
                                states && states.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={item.stateId}>{item.stateName}</MenuItem>
                                    )
                                })
                            }

                        </Select>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="City"
                            className='mui-input'
                            value={cityid}
                            onChange={e => setCityid(e.target.value)}
                        >
                            {
                                city && city.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={item.cityId}>{item.cityName}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </div>

                    <div className="form-row">
                        <button className='btn'>Save</button>
                    </div>
           
            </Pop>
        </div>
    )
}

export default AddNewReferral