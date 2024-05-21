import React from "react";
import MainHeader from "../../../components/MainHeader";
import Card from "../../../components/Card";
import FormTable from "../../../components/FormTable";
function EmployeeList() {
  const tablecolumn = [
    {
      title: "Employee Number",
      dataIndex: "employeenumber",
    },
    {
      title: "Employee Photo",
      dataIndex: "employeephoto",
    },
    {
      title: "Employee Name",
      dataIndex: "employeename",
    },
    {
      title: "Date Of Birth",
      dataIndex: "dob",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobilenumber",
    },
  ];

  const tabledata = [
    {
      key: "1",
      employeenumber: "1233242",
      employeephoto: "qweqew",
      dob: "01-01-01",
      mobilenumber:"134216464"
    },
    {
      key: "1",
      employeenumber: "1233242",
      employeephoto: "qweqew",
      dob: "01-01-01",
      mobilenumber:"134216464"
    },
    {
      key: "1",
      employeenumber: "1233242",
      employeephoto: "qweqew",
      dob: "01-01-01",
      mobilenumber:"134216464"
    },
  ];
  return (
    <div className="employee-list-parent parent">
      <MainHeader
        title="Employee List"
        link1="#"
        link1_text="Employee Managemnet"
        link2="/employeeRegistration"
        link2_text="Employee List"
      />

      <div className="card-controller">
        <Card title="Employee List">
        <FormTable
                data={tabledata}
                columns={tablecolumn}
              />
        </Card>
      </div>
    </div>
  );
}

export default EmployeeList;
