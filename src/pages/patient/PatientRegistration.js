import React, { useEffect, useRef, useState } from 'react'
import "../../styles/patientregistration.scss"
import Card from "../../components/Card"
import moment from 'moment';
import { MdOutlineSave } from "react-icons/md";
import { TextField, Select, MenuItem } from '@mui/material';
import countrycode from "../../static/CountryCodes"
import Steps from '../../components/Steps';
import MainHeader from '../../components/MainHeader';
import FormTable from '../../components/FormTable';
import { FaRegTrashAlt } from "react-icons/fa";
import { DatePicker, Space } from 'antd';
import { IoMdAdd } from "react-icons/io";
import { LuCamera } from "react-icons/lu";
import profile from "../../assets/registration/profile.png"
import Modal from 'react-modal';
import Sidebar from '../../components/Sidebar';
import Sidebar2 from '../../components/Sidebar2';
import { useStateValue } from '../../context/Context';
import Pop from '../../components/Pop';
import axios from 'axios';
import AddNewReferral from './patientregistrationModels/newreferralmodel/AddNewReferral';
import AddNewInsuranceProvider from './patientregistrationModels/newinsuranceprovidermodel/AddNewInsuranceProvider';
import AddNewSponsor from './patientregistrationModels/newsponsormodel/AddNewSponsor';


const { RangePicker } = DatePicker;
// age calculations
// age--------------------------------------------------------------------------------------------------------------------------------------------

// 
const PatientRegistration = () => {

  // card section props
  // country code number
  const [phonecode, setPhonecode] = useState(countrycode && countrycode.length > 0 ? countrycode[0].dial_code : '');
  const [whatsappcode, setWhatsappcode] = useState(countrycode && countrycode.length > 0 ? countrycode[0].dial_code : '');
  const [kinphonecode, setKinphonecode] = useState(countrycode && countrycode.length > 0 ? countrycode[0].dial_code : '');
  const [phoneopen, setPhoneopen] = useState(false);
  const [whatsappopen, setWhatsappopen] = useState(false);
  const [kinopen, setKinopen] = useState(false);
  const [modelhandler, setModelhandler] = useState(

    {
      newreferral: false,
      newinsurance: false,
      newsponsor: false,
    }

  )

  const closeModels = () => {
    setModelhandler({
      newreferral: false,
      newinsurance: false,
      newsponsor: false,
    })
  }
  const handlePhoneChange = (event) => {
    setPhonecode(event.target.value);
    setPhoneopen(false); // Close the option tab after selection if desired
  };
  const handlekinPhoneChange = (event) => {
    setKinphonecode(event.target.value);
    setPhoneopen(false); // Close the option tab after selection if desired
  };
  const handleWhatsappChange = (event) => {
    setWhatsappcode(event.target.value);
    setWhatsappopen(false); // Close the option tab after selection if desired
  };
  // table content 
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
      name: 'John Brown',
      address: 'New York No. 1 Lake Park',
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },
    {
      key: '1',
      name: 'John Brown',
      address: 'New York No. 1 Lake Park',
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },
    {
      key: '1',
      name: 'John Brown',
      address: 'New York No. 1 Lake Park',
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },
    {
      key: '1',
      name: 'John Brown',
      address: 'New York No. 1 Lake Park',
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },
    {
      key: '1',
      name: 'John Brown',
      address: 'New York No. 1 Lake Park',
      mobile: 123456789,
      fax: 4545454,
      email: "test@gmail.com",
    },

  ];
  // table content
  // table content 
  const tablecolumn2 = [
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Membership Number',
      dataIndex: 'membership',
    },
    {
      title: 'Start Date',
      dataIndex: 'start',
    },
    {
      title: 'End Date',
      dataIndex: 'end',
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
      company: 'Company name',
      membership: 'memebre ship number details',
      start: "12-02-2012",
      end: "12-02-2012",
    },
    {
      key: '1',
      company: 'Company name',
      membership: 'memebre ship number details',
      start: "12-02-2012",
      end: "12-02-2012",
    },
    {
      key: '1',
      company: 'Company name',
      membership: 'memebre ship number details',
      start: "12-02-2012",
      end: "12-02-2012",
    },

  ];
  // table content
  // table content 
  const tablecolumn3 = [
    {
      title: 'Company',
      dataIndex: 'company',
    },
    {
      title: 'Membership Number',
      dataIndex: 'membership',
    },
    {
      title: 'Email ID',
      dataIndex: 'email',
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <button className='btn-4'> <span className='icon'><FaRegTrashAlt /></span>Delete</button>
      ),
    },
  ];

  const tabledata3 = [
    {
      key: '1',
      company: 'Company name',
      membership: 'memeber ship details',
      email: "testuser@gmail.com",
    },


  ];
  // table content
  // table content 
  const tablecolumn4 = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Membership Number',
      dataIndex: 'membership',
    },
    {
      title: 'Start Date',
      dataIndex: 'start',
    },
    {
      title: 'End Date',
      dataIndex: 'end',
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <button className='btn-4'> <span className='icon'><FaRegTrashAlt /></span>Delete</button>
      ),
    },
  ];

  const tabledata4 = [
    {
      key: '1',
      name: 'COmpany Name',
      membership: 'memeber ship details',
      start: "12/02/2018",
      end: "12/02/2078",
    },
    {
      key: '1',
      name: 'COmpany Name',
      membership: 'memeber ship details',
      start: "12/02/2018",
      end: "12/02/2078",
    },
    {
      key: '1',
      name: 'COmpany Name',
      membership: 'memeber ship details',
      start: "12/02/2018",
      end: "12/02/2078",
    },
    {
      key: '1',
      name: 'COmpany Name',
      membership: 'memeber ship details',
      start: "12/02/2018",
      end: "12/02/2078",
    },


  ];
  // table content



  // card 

  const openReferralModel = () => {
    closeModels();
    setModelhandler({ ...modelhandler, newreferral: true })
  }
  const openInsuranceModel = () => {
    closeModels();
    setModelhandler({ ...modelhandler, newinsurance: true })
  }
  const openSponsorModel = () => {
    closeModels();
    setModelhandler({ ...modelhandler, newsponsor: true })
  }
  const CardVal =
  {
    "header": [
      {
        "icon": <IoMdAdd />,
        "title": "Add New Insurance Provider",
        "function": openInsuranceModel,
      },
    ],
  }
  const CardVal1 =
  {
    "header": [
      {
        "icon": <IoMdAdd />,
        "title": "Add New Referral",
        "function": openReferralModel,
      },
    ],
  }
  const CardVal2 =
  {
    "header": [
      {
        "icon": <IoMdAdd />,
        "title": "Add New Sponsor",
        "function": openSponsorModel,
      },
    ],
  }

  // profile image 
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


  // 
  const [birthdate, setbirthdate] = useState(null);
  const [age, setAge] = useState(null);

  const handleDateChange = (date, dateString) => {
    setbirthdate(date);
    if (dateString) {
      const calculatedAge = calculateAge(dateString);
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };
  // calculate are
  const calculateAge = (birthdate) => {
    const currentDate = moment();
    const dateOfBirth = moment(birthdate);

    const years = currentDate.diff(dateOfBirth, 'years');
    dateOfBirth.add(years, 'years');
    const months = currentDate.diff(dateOfBirth, 'months');
    dateOfBirth.add(months, 'months');
    const days = currentDate.diff(dateOfBirth, 'days');

    return { years, months, days };
  }
  // -----------------------------------------------------------------------------------------------------------------------------CONTEXT API IMPORTS-------------------------------------------------------------------------//
  // fetching states by passing country ids
  const { fetchState, prefix, gender, formatDate, country, fetchCity, city, states, nhsmaster, doctorlist } = useStateValue()
  console.log(city)
  //------------------------------------------------------------------------------------------------------------

  // file submission

  const fileInputRef = useRef(null);
  const [filename, setFilename] = useState()
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  // city state country fetching 
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
  // registration form submisson from here  ↓
  console.log(states)
  const [formData, setformData] = useState({
    "channelId": "1",
    "file-1[]": "(binary)",
    "imageBase64File": imgpath,
    "prefixId": 1,
    "patientId": "",
    "nevigationFlag": "",
    "nevigationReferrelId": "",
    "nevigationPatientId": "",
    "missCallAppointment": false,
    "nevigationReferrelIds": "",
    "mrnNumber": "",
    "navigate": "",
    "doctorId": "",
    "timeSlot": "",
    "endTimeSlot": "",
    "visitTypeId": "",
    "departmentId": "",
    "appointmentDate": "",
    "redirectToSlot": "",
    "firstName": "",
    "middleName": "",
    "lastName": "",
    "dateOfBirth": formatDate(birthdate),
    "genderId": 1,
    "nhsNumber": "",
    "nationalityId": 1,
    "officeNumber": "",
    "residentialNumber": "",
    "facebookId": "",
    "emailId": "",
    "code": phonecode,
    "mobileNumber": "",
    "whatsappConCode": whatsappcode,
    "twitterId": "",
    "addressDesc": "",
    "villageName": "",
    "area": "",
    "pincode": "",
    "countryId": countryid,
    "stateId": stateid,
    "cityId": cityid,
    "referralType": "",
    "NHS": "",
    "referalType": "",
    "referalId": 13,
    "nhsMasterDtolist": [
      13
    ],
    "nhsName": "",
    "nhsAddress": "",
    "nhsTelephone": "",
    "nhsFax": "",
    "nhsEmail": "",
    "kinFirstName": "",
    "kinMiddleName": "",
    "kinLastName": "",
    "kinRelationId": 7,
    "kinAddress": "",
    "kinCountryCode": kinphonecode,
    "kinMobileNumber": "",
    "documentDate": "",
    "listPatientInsuranceDetailsDto": [
      {
        "companyId": 254,
        "tariffId": "null",
        "associateCompanyId": "null",
        "planId": "null",
        "insuranceAmount": "null",
        "insuranceNo": "",
        "startDate": "",
        "endDate": ""
      }
    ],
    "listHospitalPatientRefDtoList": [
      {
        "hospitalRefId": "",
        "hospitalName": "",
        "hospitalRefNumber": ""
      }
    ],
    "sessionObject": {
      "listAccionIds": {
        "155": "155"
      },
      "listTabIds": {
        "155": "155"
      },
      "listModuleIds": {
        "124": "124"
      },
      "roleMasterId": 10,
      "userMasterId": 713,
      "unitId": 1,
      "hospitalId": 1,
      "doctorId": null,
      "patientId": null,
      "userName": "",
      "zoneDesc": "GB",
      "channelId": 1
    }
  })

  const submitForm = async (formData, bearerToken, userName) => {
    try {
      const headers = {
        'Authorization': `Bearer ${bearerToken}`,
        'userName': userName,
      };

      const response = await axios.post("xyz.com", formData, {
        headers: headers
      });

      // Handle response
      console.log(response.data); // or do something with response
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  }

  // console.log(formatDate(birthdate))
  //
  const [choosemenu, setChoosemenu] = useState('1')
  return (
    <>
      {/* <Sidebar/> */}

      {/* popup models------------------------------------------------------------------------------------ */}
      {cameraPop && (
        <Pop className="ctm-modal" close={cameraPopClose} title="Click your picture">
          <div className="video"></div>
          <video id="modalVideo" autoPlay />
          <button className="btn pop-btn" onClick={handleTakePicture}>
            Take Picture
          </button>
        </Pop>
      )}
      {
        modelhandler.newreferral &&
        <AddNewReferral close={() => setModelhandler({ ...modelhandler, newreferral: false })} />
      }
      {
        modelhandler.newinsurance &&
        <AddNewInsuranceProvider close={() => setModelhandler({ ...modelhandler, newinsurance: false })} />
      }
      {
        modelhandler.newsponsor &&
        <AddNewSponsor close={() => setModelhandler({ ...modelhandler, newsponsor: false })} />
      }
      {
        modelhandler.newreferral &&
        <AddNewReferral close={() => setModelhandler({ ...modelhandler, newreferral: false })} />
      }
      {/* --------------------------------------------------------------------------------------------------------------- */}
      {/* <Pop/> */}
      {/* <Sidebar2 /> */}
      <div className="patient-registration-parent parent">
        <MainHeader title="New patient Registration" link1="#" link1_text="Patient" link2="/register%20patient" link2_text="New patient Registration" />
        <Steps titles={['Personal Details', 'Referral Doctor Details', 'Insurance & Sponsor Details', 'Other Documents']} endtext="Finish Registration" steps={4}>
          {/* page 1 */}
          <>
            {/* general details profile  */}
            <Card title="General Details">
              <div className="general-details-card">
                <div className="general-details-left">
                  <div className="general-profile-image">
                    {imgpath && <img src={imgpath} alt="Captured" width="100%" height="100%" />}
                  </div>
                  <div className="general-profile-buttons">
                    <div className="file-button">
                      <label htmlFor="fileInput" className="btn-4">
                        Select File
                      </label>
                      <input type="file" id="fileInput" className="hidden" onChange={e => setImgpath(URL.createObjectURL(e.target.files[0]))} />
                    </div>

                    <div className="camera-button">
                      <button className="btn" onClick={handleCapture}>
                        <span>
                          <LuCamera />
                        </span>{" "}
                        Capture
                      </button>
                    </div>
                  </div>
                </div>
                <div className="general-details-right">
                  <div className="form-row">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Prefix"
                      className='w-[30%]'
                      value={formData.prefixId}
                      onChange={e => setformData({ ...formData, prefixId: e.target.value })}
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
                      {
                        prefix && prefix.map((data) => {
                          return (
                            <MenuItem value={data.prefixId}>{data.prefixDesc}</MenuItem>
                          )
                        })
                      }


                    </Select>


                    <TextField
                      className='mui-input'
                      id="outlined-basic"
                      label="UHID"
                      variant="outlined"
                      disabled
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
                      label="First Name"
                      variant="outlined"
                      value={formData.firstName}
                      onChange={e => setformData({ ...formData, firstName: e.target.value })}
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
                      value={formData.middleName}
                      onChange={e => setformData({ ...formData, middleName: e.target.value })}
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
                      value={formData.lastName}
                      onChange={e => setformData({ ...formData, lastName: e.target.value })}
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
                      value={formData.genderId}
                      onChange={e => setformData({ ...formData, genderId: e.target.value })}
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
                    <DatePicker style={{ width: '100%', height: 'calc(var(--unit) * 4)' }} onChange={handleDateChange} className="date-field-ant" value={birthdate} placeholder='Date Of Birth' />
                    <div className='w-[100%] flex items-center justify-center  rounded-[var(--unit) / 2] bg-[var(--y5)] gap-[var(--unit)]' style={{ height: 'calc(var(--unit) * 4)', borderRadius: 'calc(var(--unit) / 2)' }}>
                      {age ?

                        (
                          <>
                            <div><span style={{ fontWeight: "bold" }}>{age.years}</span> Years</div>
                            <div><span style={{ fontWeight: "bold" }}>{age.months}</span> Months</div>
                            <div><span style={{ fontWeight: "bold" }}>{age.days}</span> Days</div>
                          </>
                        ) :
                        (
                          <>
                            <div><span style={{ fontWeight: "bold" }}>0</span> Years</div>
                            <div><span style={{ fontWeight: "bold" }}>0</span> Months</div>
                            <div><span style={{ fontWeight: "bold" }}>0</span> Days</div>
                          </>
                        )
                      }</div>
                  </div>
                  <div className="form-row">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Nationality"
                      className='w-[100%]'
                      value={formData.nationalityId}
                      onChange={e => setformData({ ...formData, nationalityId: e.target.value })}
                    >
                      {country && country.map((data) => {
                        return (
                          <MenuItem value={data.countryId}>{data.countryName}</MenuItem>
                        )
                      })}
                    </Select>

                  </div>
                </div>
              </div>
            </Card>

            {/* general details */}
            <Card title="Contact Details">
              <div className="form-row">
                <TextField
                  className='mui-input'
                  id="outlined-basic"
                  label="Office No."
                  variant="outlined"
                  value={formData.officeNumber}
                  onChange={e => setformData({ ...formData, officeNumber: e.target.value })}
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
                  label="Residential Number"
                  variant="outlined"
                  value={formData.residentialNumber}
                  onChange={e => setformData({ ...formData, residentialNumber: e.target.value })}
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
                  label="Skype ID"
                  variant="outlined"
                  value={formData.facebookId}
                  onChange={e => setformData({ ...formData, facebookId: e.target.value })}

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
                  value={formData.emailId}
                  onChange={e => setformData({ ...formData, emailId: e.target.value })}
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
                <div className="form-row-left">
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className='country-code'
                    label="Code"
                    open={phoneopen}
                    onClose={() => setPhoneopen(false)}
                    onOpen={() => setPhoneopen(true)}
                    value={phonecode}
                    onChange={handlePhoneChange}
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
                        <MenuItem value={item.dial_code}>{phoneopen ? `${item.name} (${item.dial_code})` : item.dial_code}</MenuItem>
                      )
                    })}
                  </Select>
                  <TextField

                    className='mui-input'
                    id="outlined-basic"
                    label="Mobile No."
                    variant="outlined"
                    value={formData.mobileNumber}
                    onChange={e => setformData({ ...formData, mobileNumber: e.target.value })}
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
                    label="whatsapp No."
                    variant="outlined"
                    value={formData.twitterId}
                    onChange={e => setformData({ ...formData, twitterId: e.target.value })}
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
            </Card>

            {/*  patient details */}
            <Card title="Address Details"  >
              <div className="form-row">
                <TextField

                  id="filled-multiline-flexible"
                  className='form-textarea'
                  label="Address"
                  multiline
                  Rows={4}
                  variant="outlined"
                  value={formData.addressDesc}
                  onChange={e => setformData({ ...formData, addressDesc: e.target.value })}
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
              {/* street */}
              <div className="form-row">
                <TextField

                  className='mui-input'
                  id="outlined-basic"
                  label="Street Name"
                  variant="outlined"
                  value={formData.villageName}
                  onChange={e => setformData({ ...formData, villageName: e.target.value })}
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
                  label="Town"
                  //-----------------------------------------missing town
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
              {/* postal */}
              <div className="form-row">
                <TextField

                  className='mui-input'
                  id="outlined-basic"
                  label="Postal Code"
                  variant="outlined"
                  value={formData.pincode}
                  onChange={e => setformData({ ...formData, pincode: e.target.value })}
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
              </div>
              {/* county */}
              <div className="form-row">
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
            </Card>


            {/* kin details */}
            <Card title="Kin Details">
              <div className="form-row">
                <TextField

                  className='mui-input'
                  id="outlined-basic"
                  label="Kin First name"
                  value={formData.kinFirstName}
                  onChange={e => setformData({ ...formData, kinFirstName: e.target.value })}
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
                  label="Kin Middle Name"
                  variant="outlined"
                  value={formData.kinMiddleName}
                  onChange={e => setformData({ ...formData, kinMiddleName: e.target.value })}
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
                  label="Kin Last Name"
                  variant="outlined"
                  value={formData.kinLastName}
                  onChange={e => setformData({ ...formData, kinLastName: e.target.value })}
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
                  label="Kin Relation"
                  className='mui-input'
                  value={formData.kinRelationId}
                  onChange={e => setformData({ ...formData, kinRelationId: e.target.value })}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

              </div>
              <div className="form-row">
                <div className="form-row-left">
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className='country-code'
                    label="Code"
                    open={kinopen}
                    onClose={() => setKinopen(false)}
                    onOpen={() => setKinopen(true)}
                    value={kinphonecode}
                    onChange={handlekinPhoneChange}
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
                        <MenuItem value={item.dial_code}>{kinopen ? `${item.name} (${item.dial_code})` : item.dial_code}</MenuItem>
                      )
                    })}
                  </Select>
                  <TextField

                    className='mui-input'
                    id="outlined-basic"
                    label="Kin Mobile No."
                    variant="outlined"
                    value={formData.kinMobileNumber}
                    onChange={e => setformData({ ...formData, kinMobileNumber: e.target.value })}
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

                  <TextField

                    className='mui-input'
                    id="outlined-basic"
                    label="Kin Address"
                    variant="outlined"
                    value={formData.kinAddress}
                    onChange={e => setformData({ ...formData, kinAddress: e.target.value })}
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
            </Card>
          </>

          {/*  referal doctor details */}
          <Card title="Referral Doctor Details" cardvalue={CardVal1} >
            <div className="form-row">

              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                className='mui-input'
                label="Code"
                defaultValue="N/A"
                value={choosemenu}
                onChange={e => setChoosemenu(e.target.value)}
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
                <MenuItem value="N/A" disabled>Choose </MenuItem>
                <MenuItem value="1">Consultant</MenuItem>
                <MenuItem value="2">Gp</MenuItem>
              </Select>
              {
                choosemenu == '2' &&
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  className='mui-input'
                  label="Nhs List"
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
                  {nhsmaster && nhsmaster.map((item) => { return (<MenuItem value={item.nhsId}>{item.nhsName}</MenuItem>) })}
                  {/* fix this issue  */}
                </Select>
              }


              {
                choosemenu == "1" && <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  className='mui-input'
                  label="Code"
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

                  {doctorlist && doctorlist.map((item) => { return (<MenuItem value={item.doctorId}>{item.doctorName}</MenuItem>) })}

                </Select>
              }

            </div>
            <FormTable data={tabledata} columns={tablecolumn} />
          </Card>


          <>

            {/* add insurance details */}
            <Card title="Add Insurance Details" cardvalue={CardVal}>
              <div className="form-row">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Company Name"
                  className='mui-input'
                  value={formData.listPatientInsuranceDetailsDto[0].companyId}
                  onChange={e => setformData({
                    ...formData,
                    listPatientInsuranceDetailsDto: [{
                      ...formData.listPatientInsuranceDetailsDto[0],
                      companyId: e.target.value
                    }]
                  })}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <TextField

                  className='mui-input'
                  // -----------------------------------missing mmebership number 
                  id="outlined-basic"
                  label="Membership No."
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
                <RangePicker className='range-picker' />
              </div>
              <FormTable data={tabledata2} columns={tablecolumn2} />
            </Card>

            {/*  */}


            {/* add sponsor details */}
            <Card title="Add Sponsor Details" cardvalue={CardVal2}>
              <div className="form-row">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Kin Relation"
                  className='mui-input'
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <TextField

                  className='mui-input'
                  id="outlined-basic"
                  label="Membership No."
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
                        borderColor: '#fff', // change the border co     lor when in error state
                      },
                    },
                  }}

                />
              </div>
              <FormTable data={tabledata3} columns={tablecolumn3} />
            </Card>
          </>

          <>

            <Card title="Add Documents">
              <div className="form-row">

                <DatePicker className='w-full' style={{ height: "calc(var(--unit) * 4)" }} placeholder='Document Date ' />

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Membership Number"
                  className='mui-input'
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

              </div>
              <div className="form-row">

                <TextField

                  className='mui-input'
                  id="outlined-basic"
                  label="Document Name"
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
              <div className="my-[var(--unit)] w-full flex justify-between items-center" style={{ height: 'calc(var(--unit) * 4)', borderRadius: "calc(var(--unit) / 3)" }}>

                <div className="document-left w-3/4 h-full bg-[var(--y4)] flex items-center justify-center" style={{ borderRadius: "calc(var(--unit) / 3)" }}>
                  <span className='heading'>File Name : </span>
                  <span> {filename && filename[0].name} </span>
                </div>
                <div className="document-right w-1/4 h-full flex items-center justify-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={(e) => {
                      // Handle file selection here
                      setFilename(e.target.files);
                    }}
                  />
                  <button className="btn-4" onClick={handleButtonClick}>
                    Upload
                  </button>
                  <button className='btn-4'>Scan</button>
                </div>
              </div>


              <FormTable data={tabledata4} columns={tablecolumn4} />
            </Card>

          </>

          {/*  */}
        </Steps>
      </div>
    </>
  )
}

export default PatientRegistration