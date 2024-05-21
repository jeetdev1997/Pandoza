import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import Pop from '../../../components/Pop'
import "./appointments.scss"
import Card from '../../../components/Card'
import FormTable from "../../../components/FormTable"
const AppointmentsModel = ({ close }) => {
    const [headercontroller, setHeadercontroller] = useState({
        pending: true,
        completed: false,
        cancelled: false,
    })
    const handleToggle = (key) => {
        setHeadercontroller({
            pending: false,
            completed: false,
            cancelled: false,
            [key]: true,
        })
    }

    // table content 
    const tablecolumn = [

        {
            title: 'Appointment Date',
            dataIndex: 'appointmentdate',
        },
        {
            title: 'Appointment Time',
            dataIndex: 'appointmenttime',
        },
        {
            title: 'Doctor Name',
            dataIndex: 'doctorname',
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
            appointmentdate: '12-2024',
            appointmenttime: '10:11 AM',
            doctorname: "demoo doctor",
        },
        {
            key: '1',
            appointmentdate: '12-2024',
            appointmenttime: '10:11 AM',
            doctorname: "demoo doctor",
        },
        {
            key: '1',
            appointmentdate: '12-2024',
            appointmenttime: '10:11 AM',
            doctorname: "demoo doctor",
        },
    ];
    const tablecolumn1 = [

        {
            title: 'Appointment Date',
            dataIndex: 'appointmentdate',
        },
        {
            title: 'Appointment Time',
            dataIndex: 'appointmenttime',
        },
        {
            title: 'Doctor Name',
            dataIndex: 'doctorname',
        },
    ];

    const tabledata1 = [
        {
            key: '1',
            appointmentdate: '12-2024',
            appointmenttime: '10:11 AM',
            doctorname: "demoo doctor",
        },
        {
            key: '1',
            appointmentdate: '12-2024',
            appointmenttime: '10:11 AM',
            doctorname: "demoo doctor",
        },
        {
            key: '1',
            appointmentdate: '12-2024',
            appointmenttime: '10:11 AM',
            doctorname: "demoo doctor",
        },
    ];
    const tablecolumn2 = [

        {
            title: 'Appointment Date',
            dataIndex: 'appointmentdate',
        },
        {
            title: 'Appointment Time',
            dataIndex: 'appointmenttime',
        },
        {
            title: 'Doctor Name',
            dataIndex: 'doctorname',
        },
        {
            title: 'Actions',
            render: (text, record) => (
                <button className='btn-4'> <span className='icon'><FaRegTrashAlt /></span>Delete</button>
            ),
        },
    ];

    const tabledata2 = [
        {
            key: '1',
            appointmentdate: '12-2024',
            appointmenttime: '10:11 AM',
            doctorname: "demoo doctor",
        },
        {
            key: '1',
            appointmentdate: '12-2024',
            appointmenttime: '10:11 AM',
            doctorname: "demoo doctor",
        },
        {
            key: '1',
            appointmentdate: '12-2024',
            appointmenttime: '10:11 AM',
            doctorname: "demoo doctor",
        },


    ];

    return (
        <Pop close={close} title="Appointments">

            <div className="appointment-model-parent">
                <div className="order-option">
                    <div
                        className={headercontroller.pending ? "option instruction active" : "option instruction"}
                        onClick={() => handleToggle('pending')}
                    >
                        Pending
                    </div>
                    <div
                        className={headercontroller.completed ? "option investigation active" : "option investigation"}
                        onClick={() => handleToggle('completed')}
                    >
                        Completed
                    </div>
                    <div
                        className={headercontroller.cancelled ? "option medication active" : "option medication"}
                        onClick={() => handleToggle('cancelled')}
                    >
                        Cancelled
                    </div>
                    <div className="blankdiv option"></div>
                </div>
            </div>
          
                {
                    headercontroller.pending && <FormTable data={tabledata} columns={tablecolumn} title="Pending" />
                }
                {
                    headercontroller.completed && <FormTable data={tabledata1} columns={tablecolumn1} title="Completed" />
                }
                {
                    headercontroller.cancelled && <FormTable data={tabledata2} columns={tablecolumn2} title="Cancelled" />
                }

          
        </Pop>
    )
}

export default AppointmentsModel
