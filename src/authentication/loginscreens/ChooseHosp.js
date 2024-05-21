import React from 'react'
import "../../styles/choosehospital.scss"
import logo from "../../assets/login/brand-logo.svg";
import { MenuItem, Select } from '@mui/material';
import { IoCallOutline } from "react-icons/io5";
const ChooseHosp = () => {
    return (
        <div className="choosehospital-parent parent">
            <div className="choose-hospital-left">
                <div className="choose-hospital">
                    <div className="choose-header">
                        <h1>Choose Desk</h1>
                        <p>select language and desk at which you would be consulting today</p>
                    </div>
                    <form action="#" className='choose-form'>
                        <div className="form-row">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Hospital"
                                className='w-[100%]'
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
                                MenuProps={{
                                    sx: {
                                        '& ul': {
                                            borderColor: 'var(--g4)', // change the menu border color
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">1</MenuItem>
                                <MenuItem value="3">1</MenuItem>
                                <MenuItem value="4">1</MenuItem>
                            </Select>
                        </div>
                        <div className="form-row">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Opd"
                                className='w-[100%]'
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
                                MenuProps={{
                                    sx: {
                                        '& ul': {
                                            borderColor: 'var(--g4)', // change the menu border color
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">1</MenuItem>
                                <MenuItem value="3">1</MenuItem>
                                <MenuItem value="4">1</MenuItem>
                            </Select>
                        </div>
                        <div className="form-row">
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Language"
                                className='w-[100%]'
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
                                MenuProps={{
                                    sx: {
                                        '& ul': {
                                            borderColor: 'var(--g4)', // change the menu border color
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">1</MenuItem>
                                <MenuItem value="3">1</MenuItem>
                                <MenuItem value="4">1</MenuItem>
                            </Select>
                        </div>

                        <div className="choose-btn-box">
                            <button className='btn w-full'>
                                Login
                            </button>
                            <button className='btn btn-sec w-full'>
                                <span>
                                <IoCallOutline />
                                </span>
                                Call For Assistance
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="choose-hospital-right bg-img-cover">

            </div>
        </div>
    )
}

export default ChooseHosp