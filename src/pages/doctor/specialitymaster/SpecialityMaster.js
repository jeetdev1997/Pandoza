import React from 'react'
import MainHeader from '../../../components/MainHeader'
import Card from '../../../components/Card'
import { IoMdAdd } from 'react-icons/io';
import { TextField } from '@mui/material';
import CustomToggleButton from '../../../components/CustomToggleButton';
import FormTable from '../../../components/FormTable';
import { FaRegTrashAlt } from "react-icons/fa";
import CustomToggleChip from '../../../components/CustomToggleChip';
import { FaRegSave } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import CustomInput from '../../../components/InputField/CustomInput';
const SpecialityMaster = () => {


    const tablecolumn = [
        {
            title: 'Sr. No.',
            dataIndex: 'srno',
        },
        {
            title: "Name",
            dataIndex: 'name',
        },
        {
            title: 'Code',
            dataIndex: 'code',
        },
        {
            title: 'Is Clinical',
            dataIndex: 'isclinical',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            render: (text, record) => (
                <button className='btn-4'> <span className='icon'><MdOutlineEdit /></span>Edit</button>
            ),
        },
    ];

    const tabledata = [
       {
        srno: 1,
        name: "dummy",
        code:"code",
        isclinical:'A',
        status:'I',
       },
       {
        srno: 2,
        name: "dummy",
        code:"code",
        isclinical:'A',
        status:'I',
       },
       {
        srno: 3,
        name: "dummy",
        code:"code",
        isclinical:'A',
        status:'I',
       },
       {
        srno: 4,
        name: "dummy",
        code:"code",
        isclinical:'A',
        status:'I',
       },
       {
        srno: 5,
        name: "dummy",
        code:"code",
        isclinical:'A',
        status:'I',
       },
    ];

    const CardVal = {
        header: [
            {
                icon: <LuRefreshCcw />,
                title: 'Update',
                function: "",
            },
            {
                icon: <FaRegSave />,
                title: 'Save',
                function: "",
            },
        ],
    };

    return (
        <div className="speciality-master-parent parent">
            <MainHeader
                title="Speciality Master"
                link1="#"
                link1_text="Doctors"
                link2="/specialityMaster"
                link2_text="Speciality Master"
            />

            <Card title="Primary Speciality" cardvalue={CardVal}>
                <div className="form-row">
                    {/* <CustomInput value={}/> */}
                    <TextField
                        className="mui-input"
                        id="outlined-basic"
                        required
                        label="Speciality Name"
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
                        <TextField
                            className="mui-input"
                            id="outlined-basic"
                            label="Speciality Code"
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
                    <div className="form-row-right !justify-start">
                        <CustomToggleButton label="Label" />
                        <CustomToggleButton label="Label" />
                    </div>
                </div>
                <FormTable data={tabledata} columns={tablecolumn} title="Primary Speciality List" />
            </Card>

            <Card title="Sub Speciality" cardvalue={CardVal}>
                <div className="form-row">
                    <TextField
                        className="mui-input"
                        id="outlined-basic"
                        required
                        label="Speciality Name"
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
                        <TextField
                            className="mui-input"
                            id="outlined-basic"
                            label="Sub Speciality description"
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
                    <div className="form-row-right !justify-start">
                        <CustomToggleButton label="Label" />
                        <CustomToggleButton label="Label" />
                    </div>
                </div>
                <FormTable data={tabledata} columns={tablecolumn} title="Sub Speciality List" />
            </Card>
        </div>
    )
}

export default SpecialityMaster