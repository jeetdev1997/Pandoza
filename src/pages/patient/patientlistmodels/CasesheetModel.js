import React from "react";
import Pop from "../../../components/Pop";
import Card from "../../../components/Card";
import { DatePicker } from "antd";
import { MenuItem, Select } from "@mui/material";
import FormTable from "../../../components/FormTable";
import { FaRegTrashAlt } from "react-icons/fa";
const CasesheetModel = ({ close }) => {
  const tablecolumn = [
    {
      title: "Appointment Date",
      dataIndex: "appointmentdate",
    },
    {
      title: "Appointment Time",
      dataIndex: "appointmenttime",
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorname",
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
      appointmentdate: "12-2024",
      appointmenttime: "10:11 AM",
      doctorname: "demoo doctor",
    },
    {
      key: "1",
      appointmentdate: "12-2024",
      appointmenttime: "10:11 AM",
      doctorname: "demoo doctor",
    },
    {
      key: "1",
      appointmentdate: "12-2024",
      appointmenttime: "10:11 AM",
      doctorname: "demoo doctor",
    },
  ];
  return (
    <Pop close={close} title="Casesheet">
      <div className="form-row">
        <DatePicker
          style={{ width: "100%", height: "calc(var(--unit) * 4)" }}
          className="date-field-ant"
          placeholder="Start Date"
        />
        <DatePicker
          style={{ width: "100%", height: "calc(var(--unit) * 4)" }}
          className="date-field-ant"
          placeholder="End Date"
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
          <button className="btn">Search</button>
          <button className="btn disable">Cancle</button>
        </div>
      </div>
      <FormTable data={tabledata} columns={tablecolumn} title="Pending" />
    </Pop>
  );
};

export default CasesheetModel;
