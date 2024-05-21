import React, { useEffect, useState } from 'react'
import MainHeader from '../../../components/MainHeader'
import Steps from '../../../components/Steps'
import Card from '../../../components/Card'
import { LuCamera } from "react-icons/lu";
import Pop from '../../../components/Pop';
import "./doctorregistration.scss"
import { MenuItem, Select, TextField } from '@mui/material';
import { useStateValue } from '../../../context/Context';
import countrycode from "../../../static/CountryCodes"
import { FaRegSave } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import CustomToggleButton from '../../../components/CustomToggleButton';
import { FaRegTrashAlt } from "react-icons/fa";
import FormTable from '../../../components/FormTable';
const DoctorRegistration = () => {

    const [phonecode, setPhonecode] = useState(countrycode && countrycode.length > 0 ? countrycode[0].dial_code : '');
    const [whatsappcode, setWhatsappcode] = useState(countrycode && countrycode.length > 0 ? countrycode[0].dial_code : '');
    const [phoneopen, setPhoneopen] = useState(false);
    const [whatsappopen, setWhatsappopen] = useState(false);

    const [imagepath, setImagepath] = useState(
        {
            "profile": "",
            "signature": ""
        }
    )
    //city country and states 
    const [stateid, setStateid] = useState();
    const [countryid, setCountryid] = useState();
    const [cityid, setCityid] = useState();
    // fetch countries
    useEffect(() => {
        fetchCity(stateid)
    }, [stateid])
    // fetch states
    useEffect(() => {
        fetchState(countryid)
    }, [countryid])
    // context
    const { fetchState, prefix, gender, formatDate, country, fetchCity, city, states, nhsmaster, doctorlist } = useStateValue()
    // functions

    const handlePhoneChange = (event) => {
        setPhonecode(event.target.value);
        setPhoneopen(false); // Close the option tab after selection if desired
    };
    const handleWhatsappChange = (event) => {
        setWhatsappcode(event.target.value);
        setWhatsappopen(false); // Close the option tab after selection if desired
    };
    // context imports
    // profile image capture
    const [cameraPop, setCameraPop] = useState(false);
    const [imgpath, setImgpath] = useState(null);

    function cameraPopClose() {
        setCameraPop(false);
    }

    const handleCapture = async () => {
        setCameraPop(true);
        handleCaptureImage();
    };

    const handleCaptureImage = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById("modalVideo");
        video.srcObject = stream;
        video.play();
    };
    const handleTakePicture = () => {
        const video = document.getElementById("modalVideo");
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageDataURL = canvas.toDataURL("image/png");
        setImgpath(imageDataURL);
        setCameraPop(false);
    };
    const CardVal = {
        header: [
            {
                icon: <LuRefreshCcw />,
                title: 'Update',
                function: "",
            },
            {
                icon: <FaRegSave />,
                title: 'Save',
                function: "",
            },
        ],
    };
    const tablecolumn = [
        {
            title: 'Unit',
            dataIndex: 'unit',
        },
        {
            title: "Speciality",
            dataIndex: 'speciality',
        },
        {
            title: "Sub Speciality",
            dataIndex: 'subspeciality',
        },

        {
            title: 'Action',
            render: (text, record) => (
                <button className='btn-4'> <span className='icon'><FaRegTrashAlt /></span>Delete</button>
            ),
        },
    ];

    const tabledata = [
        {
            unit: "bmi clementime churchil hospitaal",
            speciality: "laparoscopic genratl and colorectal surgeon",
            subspeciality: "laparoscopic genratl and colorectal surgeon",
        },
    ];

    const tablecolumn2 = [
        {
            title: 'Address Type',
            dataIndex: 'addresstype',

        },
        {
            title: "Name",
            dataIndex: 'name',
        },
        {
            title: "Contact",
            dataIndex: 'contact',
        },
        {
            title: "Alternate Contact",
            dataIndex: 'altcontact',
        },
        {
            title: "Address",
            dataIndex: 'address',
            width: 200,
        },

        {
            title: 'Action',
            render: (text, record) => (
                <button className='btn-4'> <span className='icon'><FaRegTrashAlt /></span>Delete</button>
            ),
        },
    ];

    const tabledata2 = [
        {
            addresstype: "bmi clementime churchil hospitaal",
            name: "laparoscopic genratl and colorectal surgeon",
            contact: "laparoscopic genratl and colorectal surgeon",
            altcontact: "laparoscopic genratl and colorectal surgeon",
            address: "laparoscopic genratl and colorectal surgeon",
        },
        {
            addresstype: "bmi clementime churchil hospitaal",
            name: "laparoscopic genratl and colorectal surgeon",
            contact: "laparoscopic genratl and colorectal surgeon",
            altcontact: "laparoscopic genratl and colorectal surgeon",
            address: "laparoscopic genratl and colorectal surgeon",
        },
        {
            addresstype: "bmi clementime churchil hospitaal",
            name: "laparoscopic genratl and colorectal surgeon",
            contact: "laparoscopic genratl and colorectal surgeon",
            altcontact: "laparoscopic genratl and colorectal surgeon",
            address: "laparoscopic genratl and colorectal surgeon",
        },
        {
            addresstype: "bmi clementime churchil hospitaal",
            name: "laparoscopic genratl and colorectal surgeon",
            contact: "laparoscopic genratl and colorectal surgeon",
            altcontact: "laparoscopic genratl and colorectal surgeon",
            address: "laparoscopic genratl and colorectal surgeon",
        },
    ];
    return (
        <>
            {cameraPop && (
                <Pop className="ctm-modal" close={cameraPopClose} title="Click your picture">
                    <div className="video"></div>
                    <video id="modalVideo" autoPlay />
                    <button className="btn pop-btn" onClick={handleTakePicture}>
                        Take Picture
                    </button>
                </Pop>
            )}
            <div className="doctor-registration parent">
                <MainHeader title="New patient Registration" link1="#" link1_text="Patient" link2="/register%20patient" link2_text="New patient Registration" />
                <Steps titles={['General Details', 'Referral Doctor Details', 'Insurance & Sponsor Details', 'Other Documents']} endtext="Finish Registration" steps={8}>
                    <>
                        <Card title="Upload Image and Signature">
                            <div className="form-row">
                                <div className="form-row-left doctor-reg-left">
                                    <div className="profile-image"></div>
                                    <div className="file-button">
                                        <label htmlFor="fileInput" className="btn-4">
                                            Select File
                                        </label>
                                        <input type="file" id="fileInput" className="hidden" onChange={e => setImgpath(URL.createObjectURL(e.target.files[0]))} />
                                    </div>
                                    <button className="btn" onClick={handleCapture}>
                                        <span>
                                            <LuCamera />
                                        </span>{" "}
                                        Capture
                                    </button>
                                </div>
                                <div className="form-row-right doctor-reg-right ">
                                    <div className="signature-image"></div>
                                    <div className="file-button">
                                        <label htmlFor="fileInput" className="btn-4">
                                            Choose Signature
                                        </label>
                                        <input type="file" id="fileInput" className="hidden" onChange={e => setImgpath(URL.createObjectURL(e.target.files[0]))} />
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card title="Basic Details">
                            <div className="form-row">
                                <TextField
                                    className='mui-input'
                                    id="outlined-basic"
                                    label="First Name"
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
                                <TextField
                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Middle Name"
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
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Last Name"
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
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Gender"
                                    className='w-[100%]'
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
                                    MenuProps={{
                                        sx: {
                                            '& ul': {
                                                borderColor: 'var(--g4)', // change the menu border color
                                            },
                                        },
                                    }}
                                >
                                    {gender && gender.map((data) => {
                                        return (
                                            <MenuItem value={data.genderId}>{data.desc}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </div>
                            <div className="form-row">
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Doctor Speciality"
                                    className='w-[100%]'
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
                                    MenuProps={{
                                        sx: {
                                            '& ul': {
                                                borderColor: 'var(--g4)', // change the menu border color
                                            },
                                        },
                                    }}
                                >

                                    <MenuItem> sp 1</MenuItem>
                                    <MenuItem> sp 1</MenuItem>
                                    <MenuItem> sp 1</MenuItem>
                                    <MenuItem> sp 1</MenuItem>
                                    <MenuItem> sp 1</MenuItem>

                                </Select>
                            </div>
                        </Card></>


                    <>


                        <Card title="Personal Information">
                            <div className="form-row">
                                <div className="form-row-left">
                                    <TextField

                                        className='mui-input'
                                        id="outlined-basic"
                                        label="Employee Number"
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
                                <div className="form-row-right">
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Marital Status"
                                        className='w-[100%]'
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
                                        MenuProps={{
                                            sx: {
                                                '& ul': {
                                                    borderColor: 'var(--g4)', // change the menu border color
                                                },
                                            },
                                        }}
                                    >

                                        <MenuItem> MArital status</MenuItem>
                                        <MenuItem> MArital status</MenuItem>
                                        <MenuItem> MArital status</MenuItem>
                                        <MenuItem> MArital status</MenuItem>
                                    </Select>

                                    <CustomToggleButton label="E-Casesheet" className="!w-full" />
                                </div>
                            </div>
                            <div className="form-row">
                                <TextField
                                    multiline
                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Patient Address"
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
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Country"
                                    className='mui-input'
                                    value={countryid}
                                    onChange={e => setCountryid(e.target.value)}
                                >
                                    {country && country.map((data) => {
                                        return (
                                            <MenuItem value={data.countryId}>{data.countryName}</MenuItem>
                                        )
                                    })}
                                </Select>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="County/State"
                                    className='mui-input'

                                    value={stateid}
                                    onChange={e => setStateid(e.target.value)}
                                >
                                    {
                                        states && states.map((item, index) => {
                                            return (
                                                <MenuItem key={index} value={item.stateId}>{item.stateName}</MenuItem>
                                            )
                                        })
                                    }

                                </Select>

                            </div>
                            <div className="form-row">
                                <div className="form-row-left">
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="City"
                                        className='mui-input'
                                        value={cityid}
                                        onChange={e => setCityid(e.target.value)}
                                    >
                                        {
                                            city && city.map((item, index) => {
                                                return (
                                                    <MenuItem key={index} value={item.cityId}>{item.cityName}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>

                                </div>
                                <div className="form-row-right">

                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        className='country-code'
                                        label="Code"
                                        open={whatsappopen}
                                        onClose={() => setWhatsappopen(false)}
                                        onOpen={() => setWhatsappopen(true)}
                                        value={whatsappcode}
                                        onChange={handleWhatsappChange}
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

                                    >
                                        {countrycode && countrycode.map((item) => {
                                            return (
                                                <MenuItem value={item.dial_code}>{whatsappopen ? `${item.name} (${item.dial_code})` : item.dial_code}</MenuItem>
                                            )
                                        })}



                                    </Select>
                                    <TextField

                                        className='mui-input'
                                        id="outlined-basic"
                                        label="Mobile Number"
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

                            </div>
                            {/* postal code */}
                            <div className="form-row">
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Postal Code"
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
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Phone Number"
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
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="GMC Number"
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
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Email ID"
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
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Expericance in Years"
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
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Qualification"
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
                                <TextField
                                    multiline
                                    className='mui-input'
                                    id="outlined-basic"
                                    label="About Doctor"
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
                        </Card>




                    </>
                    {/* page 3 */}
                    <>
                        <Card title="Primary Speciality" cardvalue={CardVal}>
                            <div className="form-row">
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Choose Unit"
                                    className='w-[100%]'
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
                                    MenuProps={{
                                        sx: {
                                            '& ul': {
                                                borderColor: 'var(--g4)', // change the menu border color
                                            },
                                        },
                                    }}
                                >

                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                </Select>
                            </div>

                            <div className="form-row">
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Speciality Name"
                                    className='w-[100%]'
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
                                    MenuProps={{
                                        sx: {
                                            '& ul': {
                                                borderColor: 'var(--g4)', // change the menu border color
                                            },
                                        },
                                    }}
                                >

                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                </Select>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Choose Sub Seciality"
                                    className='w-[100%]'
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
                                    MenuProps={{
                                        sx: {
                                            '& ul': {
                                                borderColor: 'var(--g4)', // change the menu border color
                                            },
                                        },
                                    }}
                                >

                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                </Select>
                            </div>
                            <FormTable data={tabledata} columns={tablecolumn} title="Primary Speciality List" />
                        </Card>

                    </>
                    {/* page 4 */}
                    <>
                        <Card title="Primary Speciality" cardvalue={CardVal}>
                            <div className="form-row">
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Address Type"
                                    className='w-[100%]'
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
                                    MenuProps={{
                                        sx: {
                                            '& ul': {
                                                borderColor: 'var(--g4)', // change the menu border color
                                            },
                                        },
                                    }}
                                >

                                    <MenuItem> Adress type</MenuItem>
                                    <MenuItem> Adress type</MenuItem>
                                    <MenuItem> Adress type</MenuItem>

                                </Select>
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Name"
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
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Contact"
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
                                <TextField

                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Alternate Contact"
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
                                <TextField
                                    multiline
                                    className='mui-input'
                                    id="outlined-basic"
                                    label="Adress"
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
                            <FormTable data={tabledata2} columns={tablecolumn2} title="Primary Speciality List" />
                        </Card>

                    </>
                    {/* page 5 */}
                    <>
                        <Card title="Primary Speciality" cardvalue={CardVal}>
                            <div className="form-row">
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Choose Unit"
                                    className='w-[100%]'
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
                                    MenuProps={{
                                        sx: {
                                            '& ul': {
                                                borderColor: 'var(--g4)', // change the menu border color
                                            },
                                        },
                                    }}
                                >

                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                </Select>
                            </div>

                            <div className="form-row">
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Speciality Name"
                                    className='w-[100%]'
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
                                    MenuProps={{
                                        sx: {
                                            '& ul': {
                                                borderColor: 'var(--g4)', // change the menu border color
                                            },
                                        },
                                    }}
                                >

                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                </Select>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Choose Sub Seciality"
                                    className='w-[100%]'
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
                                    MenuProps={{
                                        sx: {
                                            '& ul': {
                                                borderColor: 'var(--g4)', // change the menu border color
                                            },
                                        },
                                    }}
                                >

                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                    <MenuItem> MArital status</MenuItem>
                                </Select>
                            </div>
                            <FormTable data={tabledata} columns={tablecolumn} title="Primary Speciality List" />
                        </Card>

                    </>
                </Steps>
            </div>
        </>
    )
}

export default DoctorRegistration