import React from 'react'
import Pop from '../../../components/Pop'
import Card from '../../../components/Card'
import { DatePicker } from 'antd'
import { MenuItem, Select, TextField } from '@mui/material'
import FormTable from '../../../components/FormTable'
import { FaRegTrashAlt } from "react-icons/fa";
const AccountModel = ({ close }) => {
    const tablecolumn = [

        {
            title: 'Appointment Date & Time',
            dataIndex: 'appointmentdateandtime',
        },
        {
            title: 'Bill Number',
            dataIndex: 'billnumber',
        },
        {
            title: 'Bill Date',
            dataIndex: 'billdate',
        },
        {
            title: 'Total Amount',
            dataIndex: 'totalamount',
        },
        {
            title: 'Due Amount',
            dataIndex: 'dueamount',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Bill',
            dataIndex: 'bill',
        },
        {
            title: 'Receipt',
            dataIndex: 'receipt',
        },
    ];

    const tabledata = [
        {
            key: '1',
            appointmentdateandtime: '12-2024 || 10:30 AM',
            billnumber: "123445",
            billdate: "12-12-2012",
            totalamount: "1200",

        },


    ];
    return (
        <Pop close={close} title="Prescription">
       

                <div className="form-row">
                    <DatePicker style={{ width: '100%', height: 'calc(var(--unit) * 4)' }} className="date-field-ant" placeholder='Start Date' />
                    <DatePicker style={{ width: '100%', height: 'calc(var(--unit) * 4)' }} className="date-field-ant" placeholder='End Date' />
                </div>

                <div className="form-row">
                    <TextField
                        className='mui-input'
                        id="outlined-basic"
                        label="Patient Name"
                        variant="outlined"
                        disabled


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
                        disabled
                        className='mui-input'
                        id="outlined-basic"
                        label="UHID"

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
                        id="outlined-basic"
                        label="Mobile Number"
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
                    <div className="form-row-left">
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            className="mui-input"
                            label="Code"
                        >
                            <MenuItem>1</MenuItem>
                            <MenuItem>1</MenuItem>
                            <MenuItem>1</MenuItem>
                            <MenuItem>1</MenuItem>
                        </Select>
                    </div>
                    <div className="form-row-right">
                        <button className="btn">
                            Search
                        </button>
                        <button className="btn disable">
                            Cancle
                        </button>
                    </div>
                </div>


                <FormTable data={tabledata} columns={tablecolumn} title="Pending" />
     
        </Pop>
    )
}
export default AccountModel


