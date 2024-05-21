import React, { useState } from 'react'
import FormTable from '../../../components/FormTable';
import { FaRegTrashAlt } from "react-icons/fa";
import Card from '../../../components/Card';
import { BiSave } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import MainHeader from '../../../components/MainHeader';
import { MenuItem, Select, TextField } from '@mui/material';
import Pop from '../../../components/Pop';
import "./doctorcharge.scss"
const DoctorCharge = () => {
const [DoctorChrageMaster, setDoctorChargeMaster] =  useState(false);

function formOpen (){
    setDoctorChargeMaster(true)
}
function formClose (){
    setDoctorChargeMaster(false)
}
    const CardVal = {
        header: [
          {
            icon: <IoMdAdd />,
            title: "Add New",
            function: formOpen,
          },
        ],
      };
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
            name: 'MD Zaigham',
            address: 'Pune',
            mobile: 123456789,
            fax: 4545454,
            email: "zaigham@gmail.com",
        },
        {
            key: '1',
            name: 'Sunil',
            address: 'pune',
            mobile: 123456789,
            fax: 4545454,
            email: "test@gmail.com",
        },
        {
            key: '1',
            name: 'Rishabh',
            address: 'Pune',
            mobile: 123456789,
            fax: 4545454,
            email: "test@gmail.com",
        },
        {
            key: '1',
            name: 'Harsh',
            address: 'Pune',
            mobile: 123456789,
            fax: 4545454,
            email: "test@gmail.com",
        },
        {
            key: '1',
            name: 'Ketan',
            address: 'Pune',
            mobile: 123456789,
            fax: 4545454,
            email: "test@gmail.com",
        },
    
    ];
  return (
    <div className='doctor-charge-parent parent'>
    { DoctorChrageMaster &&   <Pop close={formClose}  title="Add New Referal" className="quick-pop  doctor-charge-popup">
          <div className="quick-pop">
           
          <div className="form-row">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Choose Unit"
            className="mui-input"
            //   value={formData.prefixId}
            //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          >
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Choose Doctor"
            className="mui-input"
            //   value={formData.prefixId}
            //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          >
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
          </Select>
          </div>
          <div className="form-row">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Choose SubSpeciality"
            className="mui-input"
            //   value={formData.prefixId}
            //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          >
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Choose Visit Type"
            className="mui-input"
            //   value={formData.prefixId}
            //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          >
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
          </Select>
          </div>
          <div className="form-row">
          <TextField
            className="mui-input"
            id="outlined-basic"
            required
            label="Charges"
            variant="outlined"
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          />
             <TextField
            className="mui-input"
            id="outlined-basic"
            required
            label="Advance Charges"
            variant="outlined"
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          />
          <TextField
            className="mui-input"
            id="outlined-basic"
            required
            label="Rescheduling Charges In %"
            variant="outlined"
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          />
          </div>
          <div className="form-row">
          <TextField
            className="mui-input"
            id="outlined-basic"
            required
            label="Terms & Conditions"
            variant="outlined"
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          />
             
      
          </div>
          <div className="form-row">
          <TextField
            className="mui-input"
            id="outlined-basic"
            required
            label="Rescheduling Message"
            variant="outlined"
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          />
          
       
          </div>
          <div className="form-row">
         
          
          <TextField
            className="mui-input"
            id="outlined-basic"
            required
            label="Cancellation Message"
            variant="outlined"
            sx={{
              "& label.Mui-focused": {
                color: "#00003B", // change the label color when focused
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--g4)", // change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#FFD600", // change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FFD600", // change the border color when focused
                },
                "&.Mui-error fieldset": {
                  borderColor: "#fff", // change the border color when in error state
                },
              },
            }}
          />
          </div>
        
          
           

            {/* county */}
           
          </div>
<div className="form-row">
    
<button className="btn pop-btn">Submit</button>
          <button className="btn pop-btn">Reset</button>
</div>
        </Pop>}
   <MainHeader
        title="Quick Registration"
        link1="#"
        link1_text="Patient"
        link2="/ordersetcreation"
        link2_text="Quick Registration"
      />

      <Card title="Doctor Charge Master" cardvalue={CardVal}>
      <FormTable data={tabledata} columns={tablecolumn}/>
      </Card>
   
    </div>
  )
}

export default DoctorCharge
