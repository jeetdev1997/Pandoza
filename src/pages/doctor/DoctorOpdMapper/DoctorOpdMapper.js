import { TextField } from '@mui/material'
import React from 'react'
import CustomToggleButton from '../../../components/CustomToggleButton'
import CustomToggleChip from '../../../components/CustomToggleChip'
import FormTable from '../../../components/FormTable'
import  Card  from '../../../components/Card'
import MainHeader from '../../../components/MainHeader'
import { IoMdAdd } from 'react-icons/io';
import { FaRegTrashAlt } from "react-icons/fa";

const DoctorOpdMapper = () => {


    const tablecolumn = [
        {
            title: <span className="formdata-table-header ">Name</span>,
            dataIndex: 'name',

            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Mobile No',
            dataIndex: 'mobile',
        },
        {
            title: 'Fax No',
            dataIndex: 'fax',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Actions',
            render: (text, record) => (
                <button className='btn-4'> <span className='icon'><FaRegTrashAlt /></span>Delete</button>
            ),
        },
    ];

    const tabledata = [
        {
            key: '1',
            name: 'John Brown',
            address: 'New York No. 1 Lake Park',
            mobile: 123456789,
            fax: 4545454,
            email: "test@gmail.com",
        },
        {
            key: '1',
            name: 'John Brown',
            address: 'New York No. 1 Lake Park',
            mobile: 123456789,
            fax: 4545454,
            email: "test@gmail.com",
        },
        {
            key: '1',
            name: 'John Brown',
            address: 'New York No. 1 Lake Park',
            mobile: 123456789,
            fax: 4545454,
            email: "test@gmail.com",
        },
        {
            key: '1',
            name: 'John Brown',
            address: 'New York No. 1 Lake Park',
            mobile: 123456789,
            fax: 4545454,
            email: "test@gmail.com",
        },
        {
            key: '1',
            name: 'John Brown',
            address: 'New York No. 1 Lake Park',
            mobile: 123456789,
            fax: 4545454,
            email: "test@gmail.com",
        },

    ];

    const CardVal = {
        header: [
            {
                icon: <IoMdAdd />,
                title: 'title',
                function: "",
            },
        ],
   
    };
  return (
    <div className="speciality-master-parent parent">
    <MainHeader
        title="Quick Registration"
        link1="#"
        link1_text="Patient"
        link2="/specialityMaster"
        link2_text="Quick Registration"
    />

    <Card title="Doctor OPD Mapper" cardvalue={CardVal}>
        <div className="form-row">
            <TextField
                className="mui-input"
                id="outlined-basic"
                required
                label="Doctor Name"
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
                    label=" OPD Name"
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
            <div className="form-row-right-toggle">
                <CustomToggleButton label="Status" />
                <CustomToggleButton label="Default OPD" />
                {/* <CustomToggleChip/> */}
            </div>
        </div>
        <FormTable data={tabledata} columns={tablecolumn}/>
    </Card>
</div>
  )
}

export default DoctorOpdMapper
