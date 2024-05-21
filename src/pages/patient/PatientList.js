import React, { useEffect, useState } from 'react'
import MainHeader from '../../components/MainHeader'
import "../../styles/patientlist.scss"
import { Table } from 'antd';
import { FaRegAddressCard } from "react-icons/fa6";
import { useStateValue } from '../../context/Context';
import broken from "../../assets/broken.webp"
import { Button, notification } from 'antd';
import AppointmentsModel from './patientlistmodels/AppointmentsModel';
import CasesheetModel from './patientlistmodels/CasesheetModel';
import OrderModel from './patientlistmodels/OrderModel';
import PrescriptionModel from './patientlistmodels/PrescriptionModel';
import AccountModel from './patientlistmodels/AccountModel';
const PatientList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(null);
  const { patientmaster } = useStateValue()
  const [patientlist, setPatientList] = useState([])


  // models controller
  const [modelcontroller, setModelcontroller] = useState(
    {
      appoinmentmodel: false,
      casesheetmodel: false,
      ordermodel: false,
      prescriptionmodel: false,
      accountmodel: false,

    },
  )

  const closeModel = () => {
    setModelcontroller({
      appoinmentmodel: false,
      casesheetmodel: false,
      ordermodel: false,
      prescriptionmodel: false,
    })
  }
  // use context imports
  console.log(selectedRowKeys)
  console.log(patientlist)
  useEffect(() => {
    if (patientmaster && patientmaster.patientList) {
      setPatientList(patientmaster.patientList);
    }
  }, [patientmaster]);

  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    type: 'radio', // Set selection type to radio for single row selection
    selectedRowKeys,
    onChange: onSelectChange,
  };
  // console.log(patientmaster.patientList)
  const newdata = patientlist.map((item, index) => {
    return {
      key: item.patientId,
      uhid: item.mrnNumber, // Assuming uhid is a property of each item in patientList
      photo: item.patientPhoto,
      patient: item.patientName,
      channel: item.channelName,
      dob: item.dateOfBirth,
      mobile: item.mobileNumber,
      hcard: "hh", // Assuming healthCard is a property of each item in patientList
    };
  });

  const data = [
    {
      key: '1',
      uhid: 'John Doe',
      photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1715849629~exp=1715853229~hmac=4d113c475c0c576e4499bf4372fff6e17a1790b5bcbf108e3966af8abad5eb53&w=1380',
      patient: '1234567890',
      channel: '1234567890',
      dob: '1234567890',
      mobile: '1234567890',
      hcard: '1234567890',
    },
    {
      key: '2',
      uhid: 'John Doe',
      photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1715849629~exp=1715853229~hmac=4d113c475c0c576e4499bf4372fff6e17a1790b5bcbf108e3966af8abad5eb53&w=1380',
      patient: '1234567890',
      channel: '1234567890',
      dob: '1234567890',
      mobile: '1234567890',
      hcard: '1234567890',
    },
    {
      key: '3',
      uhid: 'John Doe',
      photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1715849629~exp=1715853229~hmac=4d113c475c0c576e4499bf4372fff6e17a1790b5bcbf108e3966af8abad5eb53&w=1380',
      patient: '1234567890',
      channel: '1234567890',
      dob: '1234567890',
      mobile: '1234567890',
      hcard: '1234567890',
    },
    // Add more data objects as needed
  ];

  const columns = [
    {
      title: 'UHID',
      dataIndex: 'uhid',
      key: 'uhid',
      width: 100,
      align: 'center',
    },
    {
      title: 'Patient Photo',
      dataIndex: 'photo',
      key: 'photo',
      width: 100,
      render: (photo) => (
        <img src={photo ? photo : broken} alt="Patient" className='object-cover' style={{ height: "calc(var(--unit) * 5)", borderRadius: "100%", aspectRatio: "1" }} />
      ),
    },
    {
      title: 'Patient Name',
      dataIndex: 'patient',
      key: 'patient',
      width: 100,
      align: 'center',
    },
    {
      title: 'Channel Name',
      dataIndex: 'channel',
      key: 'channel',
      width: 100,
      align: 'center',
    },
    {
      title: 'Date Of Birth',
      dataIndex: 'dob',
      key: 'dob',
      width: 100,
      align: 'center',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobile',
      key: 'mobile',
      width: 100,
      align: 'center',
    },
    {
      title: 'Health Card',
      dataIndex: 'hcard',
      key: 'hcard',
      width: 100,
      align: 'center',
      render: (hcard) => (
        <button className='hcard_btn'><FaRegAddressCard /></button>
      ),
    },
  ];
  // notifications



  const openNotification = () => {
    notification.error({
      message: 'Please Select One Patient',
    });
  };
  return (

    <>
      {
        modelcontroller.appoinmentmodel &&
        <AppointmentsModel close={closeModel} />
      }
      {
        modelcontroller.casesheetmodel &&
        <CasesheetModel close={closeModel} />
      }
      {
        modelcontroller.ordermodel &&
        <OrderModel close={closeModel} />
      }
      {
        modelcontroller.prescriptionmodel &&
        <PrescriptionModel close={closeModel} />
      }
      {
        modelcontroller.accountmodel &&
        <AccountModel close={closeModel} />
      }
      <div className="patient-list-parent parent">
        <MainHeader title="Patient List" link1="#" link1_text="Patient" link2="/patient%20list" link2_text="Patient List" />
        <div className="patient-list-body-parent">
          <div className="patient-list-header">
            <button className={selectedRowKeys == null ? "btn disable" : "btn btn-sec"}
              onClick={() => {
                if (selectedRowKeys === null) {
                  openNotification();
                }
                else {

                  setModelcontroller({ ...modelcontroller, appoinmentmodel: true })
                }
              }}
            > Appointments</button>
            <button className={selectedRowKeys == null ? "btn disable" : "btn btn-sec"}
              onClick={() => {
                if (selectedRowKeys === null) {
                  openNotification();
                }
                else {

                  setModelcontroller({ ...modelcontroller, casesheetmodel: true })
                }
              }}
            >Casesheet</button>
            <button className={selectedRowKeys == null ? "btn disable" : "btn btn-sec"}
              onClick={() => {
                if (selectedRowKeys === null) {
                  openNotification();

                }

              }}
            >Document</button>
            <button className={selectedRowKeys == null ? "btn disable" : "btn btn-sec"}
              onClick={() => {
                if (selectedRowKeys === null) {
                  openNotification();
                }
                else {

                  setModelcontroller({ ...modelcontroller, ordermodel: true })
                }
              }}
            >Order</button>
            <button className={selectedRowKeys == null ? "btn disable" : "btn btn-sec"}
              onClick={() => {
                if (selectedRowKeys === null) {
                  openNotification();
                }
                else {

                  setModelcontroller({ ...modelcontroller, prescriptionmodel: true })
                }
              }}
            >Prescription</button>
            <button className={selectedRowKeys == null ? "btn disable" : "btn btn-sec"}
              onClick={() => {
                if (selectedRowKeys === null) {
                  openNotification();
                }
                else {

                  setModelcontroller({ ...modelcontroller, accountmodel: true })
                }
              }}
            >Account</button>
          </div>
          <div className="patient-list-body">
            <Table
              dataSource={newdata}
              columns={columns}
              rowSelection={rowSelection} // Enable row selection
              pagination={true} // Disable pagination if not required
              scroll={{ y: "calc(100svh - var(--unit) * 22)" }}
            />
          </div>
        </div>
      </div >
    </>
  )
}

export default PatientList