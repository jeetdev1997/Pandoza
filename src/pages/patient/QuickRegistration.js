import React, { useEffect, useState } from 'react';
import MainHeader from '../../components/MainHeader';
import Steps from '../../components/Steps';
import Card from '../../components/Card';
import { MenuItem, Select, TextField } from '@mui/material';
import { useStateValue } from '../../context/Context';
import { DatePicker } from 'antd';
import moment from 'moment';
import countrycode from '../../static/CountryCodes';
import FormTable from '../../components/FormTable';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { notification } from 'antd';
import Pop from '../../components/Pop';
import '../../styles/quickregistration.scss';
import { saveNhsDetailsPatientreg } from '../../services/patient/QuickRegistration/QuickRegistrationApiCall';

const QuickRegistration = () => {
  // accessing contexts
  const {
    fetchState,
    prefix,
    gender,
    formatDate,
    country,
    fetchCity,
    city,
    states,
    nhsmaster,
    doctorlist,
  } = useStateValue();
  // age calculation
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
  console.log(birthdate);
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
  };
  // --- country code toggles ---------------
  // country code number
  const [phonecode, setPhonecode] = useState(
    countrycode && countrycode.length > 0 ? countrycode[0].dial_code : ''
  );
  const [whatsappcode, setWhatsappcode] = useState(
    countrycode && countrycode.length > 0 ? countrycode[0].dial_code : ''
  );
  const [kinphonecode, setKinphonecode] = useState(
    countrycode && countrycode.length > 0 ? countrycode[0].dial_code : ''
  );
  const [phoneopen, setPhoneopen] = useState(false);
  const [whatsappopen, setWhatsappopen] = useState(false);
  const [kinopen, setKinopen] = useState(false);
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
  const openNotification = (type, message) => {
    notification[type]({
      message: message,
      duration: 3, // Adjust the duration as needed
    });
  };

  const handleCellClick = (text, fieldName) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        openNotification('success', `${fieldName} copied`);
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
        openNotification(
          'error',
          `Failed to copy ${fieldName}. Please try again.`
        );
      });
  };

  // handle close

  const tablecolumn = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
      width: 150,
      onCell: (record) => ({
        onClick: () => handleCellClick(record.name, 'Name'),
      }),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ellipsis: true,
      width: 200,
      onCell: (record) => ({
        onClick: () => handleCellClick(record.address, 'Address'),
      }),
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
      ellipsis: true,
      width: 120,
      onCell: (record) => ({
        onClick: () => handleCellClick(record.mobile, 'Mobile Number'),
      }),
    },
    {
      title: 'Fax',
      dataIndex: 'fax',
      key: 'fax',
      ellipsis: true,
      width: 120,
      onCell: (record) => ({
        onClick: () => handleCellClick(record.fax, 'Fax Number'),
      }),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
      width: 200,
      onCell: (record) => ({
        onClick: () => handleCellClick(record.email, 'Email Id'),
      }),
    },
  ];

  //   choose menu
  const [choosemenu, setChoosemenu] = useState('');
  const [formData, setFormdata] = useState({
    prefixId: '',
    navigate: '',
    firstName: '',
    middleName: '',
    lastName: '',
    genderId: '',
    dateOfBirth: formatDate(birthdate),
    code: phonecode,
    mobileNumber: '',
    whatsappConCode: whatsappcode,
    twitterId: '',
    emailId: '',
    patientId: '',
    nevigationFlag: '',
    nevigationReferrelId: '',
    nevigationPatientId: '',
    missCallAppointment: '',
    referralType: choosemenu,
    NHS: '',
    referalType: '',
    referalId: '',
    nhsName: '',
    nhsAddress: '',
    nhsTelephone: '',
    nhsFax: '',
    nhsEmail: '',
    resultPage: '',
    appointmentId: '',
    onloadGetAge: '',
  });

  // handle change form value

  const tabledata = nhsmaster
    .filter((item) => item.nhsId === formData.referalId)
    .map((item, index) => {
      return {
        key: index.toString(), // Use a unique identifier for key
        name: item.nhsName, // Use actual data from nhsmaster
        address: item.nhsAddress, // Use actual data from nhsmaster
        mobile: item.nhsTelephone, // Use actual data from nhsmaster
        fax: item.nhsFax, // Use actual data from nhsmaster
        email: item.nhsEmail, // Use actual data from nhsmaster
      };
    });
  console.log(tabledata);
  // popup models manager
  // handle pop ups
  const [refpop, setRefpop] = useState(false);
  function refpopclose() {
    setRefpop(false);
  }
  function refpopopen() {
    setRefpop(true);
  }

  // card datas
  const CardVal = {
    header: [
      {
        icon: <IoMdAdd />,
        title: 'Add New Insurance Provider',
        function: refpopopen,
      },
    ],
  };

  // country maps
  const [stateid, setStateid] = useState();
  const [countryid, setCountryid] = useState();
  const [cityid, setCityid] = useState();
  // fetch countries
  useEffect(() => {
    fetchCity(stateid);
  }, [stateid]);
  // fetch states
  useEffect(() => {
    fetchState(countryid);
  }, [countryid]);

  async function onSubmitHandler(e) {
    console.log('Submit Handler is Running.......');
    e.preventDefault();
    try {
      const {
        prefixId,
        navigate,
        firstName,
        middleName,
        lastName,
        genderId,
        dateOfBirth,
        code,
        mobileNumber,
        whatsappConCode,
        twitterId,
        emailId,
        patientId,
        nevigationFlag,
        nevigationReferrelId,
        nevigationPatientId,
        missCallAppointment,
        referralType,
        NHS,
        referalType,
        referalId,
        nhsName,
        nhsAddress,
        nhsTelephone,
        nhsFax,
        nhsEmail,
        resultPage,
        appointmentId,
        onloadGetAge,
      } = formData;

      if (
        !prefixId ||
        !navigate ||
        !firstName ||
        !middleName ||
        !lastName ||
        !genderId ||
        !dateOfBirth ||
        !code ||
        !mobileNumber ||
        !whatsappConCode ||
        !twitterId ||
        !emailId ||
        !patientId ||
        !nevigationFlag ||
        !nevigationReferrelId ||
        !nevigationPatientId ||
        !missCallAppointment ||
        !referralType ||
        !NHS ||
        !referalType ||
        !referalId ||
        !nhsName ||
        !nhsAddress ||
        !nhsTelephone ||
        !nhsFax ||
        !nhsEmail ||
        !resultPage ||
        !appointmentId ||
        !onloadGetAge
      ) {
        notification.error({
          message: 'Please Select One Patient',
        });
      }
      const response = await saveNhsDetailsPatientreg(formData);
      console.log('response', response);

      const { status } = response.data;
      //   Set the error 
      if (status === 'error') {
        notification.error({
          message: 'Something went wrong!',
        });
      }
    } catch (error) {
      console.log('Something went wrong', error);

      notification.error({
        message: 'Something went wrong!',
      });
    }
  }
  return (
    <>
      {/* ----------------------------------------------------------------------------------------POPUP Models------------------------------------------------------------------------ */}
      {refpop && (
        <Pop close={refpopclose} title="Add New Referal" className="quick-pop">
          <div className="quick-pop">
            <div className="form-row">
              <div className="form-row-left">
                <TextField
                  className="mui-input"
                  id="outlined-basic"
                  label="Referal Name"
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
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  className="country-code"
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
                  {countrycode &&
                    countrycode.map((item) => {
                      return (
                        <MenuItem value={item.dial_code}>
                          {phoneopen
                            ? `${item.name} (${item.dial_code})`
                            : item.dial_code}
                        </MenuItem>
                      );
                    })}
                </Select>

                <TextField
                  className="mui-input"
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  value={formData.middleName}
                  onChange={(e) =>
                    setFormdata({ ...formData, middleName: e.target.value })
                  }
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
            <div className="form-row">
              <TextField
                className="mui-input"
                id="outlined-basic"
                label="Fax Number"
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
                className="mui-input"
                id="outlined-basic"
                label="Email Id"
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
                id="outlined-multiline-static"
                className="mui-input"
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
              <TextField
                id="outlined-multiline-static"
                className="mui-input"
                label="Street"
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
                id="outlined-multiline-static"
                className="mui-input"
                label="Town"
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
                id="outlined-multiline-static"
                className="mui-input"
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
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Country"
                className="mui-input"
                value={countryid}
                onChange={(e) => setCountryid(e.target.value)}
              >
                {country &&
                  country.map((data) => {
                    return (
                      <MenuItem value={data.countryId}>
                        {data.countryName}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>

            {/* county */}
            <div className="form-row">
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="County/State"
                className="mui-input"
                value={stateid}
                onChange={(e) => setStateid(e.target.value)}
              >
                {states &&
                  states.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.stateId}>
                        {item.stateName}
                      </MenuItem>
                    );
                  })}
              </Select>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="City"
                className="mui-input"
                value={cityid}
                onChange={(e) => setCityid(e.target.value)}
              >
                {city &&
                  city.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item.cityId}>
                        {item.cityName}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
          </div>

          <button className="btn pop-btn">Submit</button>
        </Pop>
      )}
      {/* ----------------------------------------------------------------------------------------POPUP Models------------------------------------------------------------------------ */}
      <div className="quick-registration-parent parent">
        <MainHeader
          title="Quick Registration"
          link1="#"
          link1_text="Patient"
          link2="/quick%20registration"
          link2_text="Quick Registration"
        />
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <Steps
            titles={['Personal Details', 'Referral Doctor Details']}
            endtext="Finish Registration"
            steps={2}
          >
            <>
              <Card title="Add Personal Details">
                <div className="form-row">
                  <div className="form-row-left">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Prefix"
                      value={formData.prefixId}
                      onChange={(e) =>
                        setFormdata({ ...formData, prefixId: e.target.value })
                      }
                      className="w-[30%]"
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
                      {prefix &&
                        prefix.map((data, index) => {
                          return (
                            <MenuItem value={data.prefixId} key={index}>
                              {data.prefixDesc}
                            </MenuItem>
                          );
                        })}
                    </Select>
                    <TextField
                      className="mui-input"
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormdata({ ...formData, firstName: e.target.value })
                      }
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
                      className="mui-input"
                      id="outlined-basic"
                      label="Middle Name"
                      variant="outlined"
                      value={formData.middleName}
                      onChange={(e) =>
                        setFormdata({ ...formData, middleName: e.target.value })
                      }
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
                <div className="form-row">
                  <TextField
                    className="mui-input"
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormdata({ ...formData, lastName: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormdata({ ...formData, genderId: e.target.value })
                    }
                    className="w-[100%]"
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
                    {gender &&
                      gender.map((data) => {
                        return (
                          <MenuItem value={data.genderId}>{data.desc}</MenuItem>
                        );
                      })}
                  </Select>
                </div>

                <div className="form-row">
                  <DatePicker
                    style={{ width: '100%', height: 'calc(var(--unit) * 4)' }}
                    onChange={handleDateChange}
                    value={birthdate}
                    className="date-field-ant"
                    placeholder="Date Of Birth"
                  />
                  <div
                    className="w-[100%] flex items-center justify-center  rounded-[var(--unit) / 2] bg-[var(--y5)] gap-[var(--unit)]"
                    style={{
                      height: 'calc(var(--unit) * 4)',
                      borderRadius: 'calc(var(--unit) / 2)',
                    }}
                  >
                    {age ? (
                      <>
                        <div>
                          <span style={{ fontWeight: 'bold' }}>
                            {age.years}
                          </span>{' '}
                          Years
                        </div>
                        <div>
                          <span style={{ fontWeight: 'bold' }}>
                            {age.months}
                          </span>{' '}
                          Months
                        </div>
                        <div>
                          <span style={{ fontWeight: 'bold' }}>{age.days}</span>{' '}
                          Days
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <span style={{ fontWeight: 'bold' }}>0</span> Years
                        </div>
                        <div>
                          <span style={{ fontWeight: 'bold' }}>0</span> Months
                        </div>
                        <div>
                          <span style={{ fontWeight: 'bold' }}>0</span> Days
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-row-left">
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      className="country-code"
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
                      {countrycode &&
                        countrycode.map((item) => {
                          return (
                            <MenuItem value={item.dial_code}>
                              {phoneopen
                                ? `${item.name} (${item.dial_code})`
                                : item.dial_code}
                            </MenuItem>
                          );
                        })}
                    </Select>
                    <TextField
                      className="mui-input"
                      id="outlined-basic"
                      label="Mobile No."
                      variant="outlined"
                      value={formData.mobileNumber}
                      onChange={(e) =>
                        setFormdata({
                          ...formData,
                          mobileNumber: e.target.value,
                        })
                      }
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
                      className="country-code"
                      label="Code"
                      value={whatsappcode}
                      open={whatsappopen}
                      onClose={() => setWhatsappopen(false)}
                      onOpen={() => setWhatsappopen(true)}
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
                      {countrycode &&
                        countrycode.map((item) => {
                          return (
                            <MenuItem value={item.dial_code}>
                              {whatsappopen
                                ? `${item.name} (${item.dial_code})`
                                : item.dial_code}
                            </MenuItem>
                          );
                        })}
                    </Select>
                    <TextField
                      className="mui-input"
                      id="outlined-basic"
                      label="whatsapp No."
                      variant="outlined"
                      value={formData.twitterId}
                      onChange={(e) =>
                        setFormdata({ ...formData, twitterId: e.target.value })
                      }
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

                <div className="form-row">
                  <TextField
                    className="mui-input"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={formData.emailId}
                    onChange={(e) =>
                      setFormdata({ ...formData, emailId: e.target.value })
                    }
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

            <>
              <Card title="Add Referral Details" cardvalue={CardVal}>
                <div className="form-row">
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    className="mui-input"
                    label="Code"
                    defaultValue="N/A"
                    value={choosemenu}
                    onChange={(e) => setChoosemenu(e.target.value)}
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
                    <MenuItem value="N/A" disabled>
                      Choose{' '}
                    </MenuItem>
                    <MenuItem value="NHS">Consultant</MenuItem>
                    <MenuItem value="GP">Gp</MenuItem>
                  </Select>
                  {choosemenu == 'NHS' && (
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      className="mui-input"
                      label="Nhs List"
                      value={formData.referalId}
                      onChange={(e) => {
                        setFormdata({ ...formData, referalId: e.target.value });
                      }}
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
                      {nhsmaster &&
                        nhsmaster.map((item) => {
                          return (
                            <MenuItem value={item.nhsId}>
                              {item.nhsName}
                            </MenuItem>
                          );
                        })}
                      {/* fix this issue  */}
                    </Select>
                  )}

                  {choosemenu == 'GP' && (
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      className="mui-input"
                      label="Code"
                      value={formData.referalId}
                      onChange={(e) => {
                        setFormdata({ ...formData, referalId: e.target.value });
                      }}
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
                      {doctorlist &&
                        doctorlist.map((item) => {
                          return (
                            <MenuItem value={item.doctorId}>
                              {item.doctorName}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  )}
                </div>
                <FormTable
                  data={tabledata}
                  columns={tablecolumn}
                  pagination={false}
                  hidesearch={true}
                />
              </Card>
            </>
          </Steps>
        </form>
        {/* handle popups */}
      </div>
    </>
  );
};

export default QuickRegistration;
