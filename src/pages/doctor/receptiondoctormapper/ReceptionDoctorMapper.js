import React from "react";
import MainHeader from "../../../components/MainHeader";
import { Select, MenuItem } from "@mui/material";
import { BiSave } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";

import FormTable from "../../../components/FormTable";
import Card from "../../../components/Card";

function ReceptionDoctorMapper() {
  const tablecolumn = [
    {
      title: <span className="formdata-table-header ">Name</span>,
      dataIndex: "name",

      render: (text) => <a>{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Mobile No",
      dataIndex: "mobile",
    },
    {
      title: "Fax No",
      dataIndex: "fax",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <button className="btn-4">
          {" "}
          <span className="icon">
            <FaRegTrashAlt />
          </span>
          Delete
        </button>
      ),
    },
  ];

  const tabledata = [
    {
      key: "1",
      name: "John Brown",
      address: "New York No. 1 Lake Park",
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },
    {
      key: "1",
      name: "John Brown",
      address: "New York No. 1 Lake Park",
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },
    {
      key: "1",
      name: "John Brown",
      address: "New York No. 1 Lake Park",
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },
    {
      key: "1",
      name: "John Brown",
      address: "New York No. 1 Lake Park",
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },
    {
      key: "1",
      name: "John Brown",
      address: "New York No. 1 Lake Park",
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },
  ];

  const CardVal = {
    header: [
      {
        icon: <BiSave />,
        title: "Save",
        function: "",
      },
    ],
  };

  return (
    <>
      <div className="reception-doctor-mapper-parent parent">
        <MainHeader
          title="Reception Doctor Mapper"
          link1="#"
          link1_text="Patient"
          link2="/specialityMaster"
          link2_text="Quick Registration"
        />

        <Card title="Nurse/Reception Doctor Mapper" cardvalue={CardVal}>
         <div className="form-row">
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Nurse/Receptionist"
            className="w-[100%]"
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
            MenuProps={{
              sx: {
                "& ul": {
                  borderColor: "var(--g4)", // change the menu border color
                },
              },
            }}
          >
            <MenuItem>Select Doctor</MenuItem>
          </Select>
         </div>

          <div className="form-row">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Doctor"
            className="w-[100%]"
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
            MenuProps={{
              sx: {
                "& ul": {
                  borderColor: "var(--g4)", // change the menu border color
                },
              },
            }}
          >
            <MenuItem>Select Doctor</MenuItem>
          </Select>
          </div>

          <FormTable data={tabledata} columns={tablecolumn} />
        </Card>
      </div>
    </>
  );
}

export default ReceptionDoctorMapper;
