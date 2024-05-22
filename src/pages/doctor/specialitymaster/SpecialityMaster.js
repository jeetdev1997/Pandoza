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
        status: "",
        isClinical: "",
    });
    const [validationErrors, setValidationErrors] = useState({});
    const [valid, setvalid] = useState(false);
    const [error, seterror] = useState(false);

    const submitHandler = async (operation, e) => {
        e.preventDefault();
        let isValid = true;
        const validationErrors = {};
        if (!formData.specialityname) {
            isValid = false;
            validationErrors.specialityname = 'Speciality Name is required';
        }
        if (!formData.specialitycode) {
            isValid = false;
            validationErrors.specialitycode = 'Speciality code is required';
        }

        if (isValid) {
            try {
                if(operation === "Update"){
                    const response = await axios.post(`${process.env.REACT_APP_URLV1}updateDepartmentMaster`, formData);
                }else{
                    const response = await axios.post(`${process.env.REACT_APP_URLV1}saveDepartmentMaster`, formData);
                }
            } catch (error) {
                console.log("new error" + error);
            }
        } else {
            setValidationErrors(validationErrors);
            seterror(true);
        }
    };
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
                function: (e) => submitHandler("Update", e),
            },
            {
                icon: <FaRegSave />,
                title: "Save",
                function: (e) => submitHandler("Save", e),
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
            dataIndex: "isClinical",
        },
        {
            title: "Status",
            dataIndex: "status",
        },
        {
            title: "Action",
            render: (text, record) => (
                <button className="btn-4" onClick={() => handleEdit(record)}>
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

    // edit function start
    const handleEdit = (record) => {
        setFormData({
            specialityname: record.name,
            specialitycode: record.code,
        });
    };

    // edit function end
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="speciality-master-parent parent">
            <MainHeader title="Speciality Master" link1="#" link1_text="Doctors" link2="/specialityMaster" link2_text="Speciality Master" />
            {validationErrors.specialitycode && (
                <div className="aria-errormessage">{validationErrors.specialitycode}</div>
            )}
            {validationErrors.specialityname && (
                <div className="aria-errormessage">{validationErrors.specialitycode}</div>
            )}
            <Card title="Primary Speciality" cardvalue={CardVal}>
                <form action="#" onSubmit={submitHandler}>
                    <div className="form-row">
                        <CustomInput value={formData.specialityname} onChange={(e) => setFormData({ ...formData, specialityname: e.target.value })} required={true} label="Speciality Name" 
                        className={validationErrors.specialityname ? "error-input" : ""}/> 
                    </div>
                    <div className="form-row">
                        <div className="form-row-left">
                            <CustomInput value={formData.specialitycode} onChange={(e) => setFormData({ ...formData, specialitycode: e.target.value })} required={true} label="Speciality Code" 
                            className={validationErrors.specialitycode ? "error-input" : ""}/>
                        </div>
                        <div className="form-row-right !justify-start">
                            <CustomToggleButton
                                label="Status"
                                onSendData={(toggleState) => setFormData({ ...formData, status: toggleState ? "A" : "I" })}
                            />
                            <CustomToggleButton
                                label="Is Clinical"
                                onSendData={(toggleState) => setFormData({ ...formData, isClinical: toggleState ? "A" : "I" })}
                            />
                        </div>
                    </div>
                </form>
                {department.length === 0 ? (
                    <p>Loading data...</p>
                ) : (
                    <> {/* Use a fragment to avoid unnecessary wrapper */}
                        <FormTable data={tabledata} columns={tablecolumn} title="Primary Speciality List" />
                        {tabledata.length === 0 && <p>No data to display.</p>} {/* Show message for empty data */}
                    </>
                )}

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
                        <CustomToggleButton label="Status" onSendData={(toggleState) => setFormData({ ...formData, status: toggleState ? "A" : "I", })} />
                        <CustomToggleButton label="IsClinical" onSendData={(toggleState) => setFormData({ ...formData, clinical: toggleState ? "A" : "I", })} />
                    </div>
                </div>
                {department.length === 0 ? (
                    <p>Loading data...</p>
                ) : (
                    <> {/* Use a fragment to avoid unnecessary wrapper */}
                        <FormTable data={tabledata} columns={tablecolumn} title="Primary Speciality List" />
                        {tabledata.length === 0 && <p>No data to display.</p>} {/* Show message for empty data */}
                    </>
                )}
            </Card>
        </div>
    );
};

export default SpecialityMaster;
