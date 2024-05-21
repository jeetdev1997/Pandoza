
import React from "react";
import "../casesheettabconfig/casesheetconfiguration.scss";
import MainHeader from "../../../components/MainHeader";
import { MenuItem, TextField, Select } from "@mui/material";
import Card from "../../../components/Card";
import { BiSave } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import CustomToggleButton from "../../../components/CustomToggleButton";
import CustomToggleChip from "../../../components/CustomToggleChip";
import FormTable from "../../../components/FormTable";

const CasesheetConfiguration = () => {
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
    // footer: [
    //   {
    //     icon: <BiSave />,
    //     title: "title",
    //     function: "",
    //   },
    // ],
  };

  return (
    <>
      <div className="casesheet-configuration-parent parent">
        <MainHeader
          title="Casesheet Tab Configuration"
          link1="#"
          link1_text="Patient"
          link2="/casesheetConfiguration"
          link2_text="Quick Registration"
        />

        <Card title="Casesheet Tab Configuration" cardvalue={CardVal}>
          <div className="form-row">
            {/* <TextField
              className="mui-input"
              id="outlined-basic"
              required
              label="Select Doctor"
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
            /> */}
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              className="mui-input"
              label="Code"
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
              <MenuItem >Select Doctor</MenuItem>
            </Select>
          </div>
          <div className="form-row casesheet-btn-div">
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
            <CustomToggleChip label="demo"/>
          </div>

          <FormTable data={tabledata} columns={tablecolumn} />
        </Card>
      </div>
    </>
  );
};

export default CasesheetConfiguration
