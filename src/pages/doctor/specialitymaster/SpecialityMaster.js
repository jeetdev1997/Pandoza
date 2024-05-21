import React, { useState, useEffect } from "react";
import MainHeader from "../../../components/MainHeader";
import Card from "../../../components/Card";
import CustomToggleButton from "../../../components/CustomToggleButton";
import FormTable from "../../../components/FormTable";
import { FaRegSave } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
import { notification } from "antd";
import CustomInput from "../../../components/InputField/CustomInput"
import axios from "axios";
const SpecialityMaster = () => {
  const [department, setDepartment] = useState([])
  const [formData, setFormData] = useState({
    specialityname: "",
    specialitycode: "",
    status: false,
    isClinical: false,
  });
  const submitHandler = async (e) => {
    console.log(formData);
    
    return;
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_URLV1}departmentMaster`, formData);
      console.log(response)
    } catch (error) {
      console.log("new error" + error);
    }
  }
  // form submission handler
  const fetchData = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_URLV1}departmentMaster`, {});
      setDepartment(response.data.object.departmentList);
    } catch (error) {
      console.log("new error" + error);
    }
  };

  const CardVal = {
    header: [
      {
        icon: <LuRefreshCcw />,
        title: "Update",
        function: submitHandler,
      },
      {
        icon: <FaRegSave />,
        title: "Save",
        function: submitHandler,
      },
    ],
  };

  const tablecolumn = [
    {
      title: "Sr. No.",
      dataIndex: "srno",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Is Clinical",
      dataIndex: "isclinical",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      render: (text, record) => (
        <button className="btn-4">
          {" "}
          <span className="icon">
            <MdOutlineEdit />
          </span>
          Edit
        </button>
      ),
    },
  ];
  const tabledata = department.map((data, index) => {
    return {
      srno: index + 1,
      name: data.departmentName,
      code: data.departmentCode,
      isClinical: data.isClinical,
      status: data.status,
    };
  });
  console.log(tabledata);
 
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="speciality-master-parent parent">
      <MainHeader title="Speciality Master" link1="#" link1_text="Doctors" link2="/specialityMaster" link2_text="Speciality Master" />
      <Card title="Primary Speciality" cardvalue={CardVal}>
        <form action="#" onSubmit={submitHandler}>
          <div className="form-row">
            <CustomInput value={formData.specialityname} onChange={(e) => setFormData({ ...formData, specialityname: e.target.value })} required={true} label="Speciality Name"  />
          </div>
          <div className="form-row">
            <div className="form-row-left">
              <CustomInput value={formData.specialitycode} onChange={(e) => setFormData({ ...formData, specialitycode: e.target.value })} required={true} label="Speciality Code" />
            </div>
            <div className="form-row-right !justify-start">
              <CustomToggleButton label="Status" onSendData={(toggleState) => setFormData({ ...formData, status: toggleState ? true : false })} />
              <CustomToggleButton label="Is Clinical ?" onSendData={(toggleState) => setFormData({ ...formData, isClinical: toggleState ? true : false, })} />
            </div>
          </div>
        </form>
        <FormTable data={tabledata} columns={tablecolumn} title="Primary Speciality List" />
      </Card>
      <Card title="Sub Speciality" cardvalue={CardVal}>
        <div className="form-row">
          <CustomInput value={formData.specialityname} onChange={(e) => setFormData({ ...formData, specialityname: e.target.value })} required={true} label="Speciality Name" />
        </div>
        <div className="form-row">
          <div className="form-row-left">
            <CustomInput value={formData.specialityname} onChange={(e) => setFormData({ ...formData, specialityname: e.target.value })} required={true} label="Speciality Name" />
          </div>
          <div className="form-row-right !justify-start">
            <CustomToggleButton label="Is Clinical" onSendData={(toggleState) => setFormData({ ...formData, clinical: toggleState ? true : false, })} />
            <CustomToggleButton label="Is Clinical" onSendData={(toggleState) => setFormData({ ...formData, clinical: toggleState ? true : false, })} />
          </div>
        </div>
        <FormTable data={tabledata} columns={tablecolumn} title="Sub Speciality List" />
      </Card>
    </div>
  );
};

export default SpecialityMaster;
