import React, { useState, useEffect, useRef } from "react";
import MainHeader from "../../../components/MainHeader";
import Card from "../../../components/Card";
import { TextField, Select, MenuItem } from "@mui/material";
import Steps from "../../../components/Steps";
import countrycode from "../../../static/CountryCodes";
import { useStateValue } from "../../../context/Context";
import { LuCamera } from "react-icons/lu";
import moment from "moment";
import { DatePicker } from "antd";
import FormTable from "../../../components/FormTable";
import "./employeeRegistration.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import Pop from "../../../components/Pop";
import { prefixMaster } from "../../../services/EmployeeRegistration/EmployeeRegistration";
import { responsiveArray } from "antd/es/_util/responsiveObserver";
function EmployeeRegistration() {
  const [phonecode, setPhonecode] = useState(
    countrycode && countrycode.length > 0 ? countrycode[0].dial_code : ""
  );
  const [whatsappcode, setWhatsappcode] = useState(
    countrycode && countrycode.length > 0 ? countrycode[0].dial_code : ""
  );
  const [phoneopen, setPhoneopen] = useState(false);
  const [whatsappopen, setWhatsappopen] = useState(false);
  // city state country states
  const [stateid, setStateid] = useState();
  const [countryid, setCountryid] = useState();
  const [cityid, setCityid] = useState();
  const [imgpath, setImgpath] = useState("");
  const [cameraPop, setCameraPop] = useState(false);
  // file submission

  const fileInputRef = useRef(null);
  const [filename, setFilename] = useState();
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  // calculate age
  //
  const [birthdate, setbirthdate] = useState(null);
  const [age, setAge] = useState(null);

  const [prefixMasterResponse, setprefixMasterResponse] = useState([])

  useEffect(()=> {
    prefixMaster().then((response) => {console.log('response:__prefixMaster', response);setprefixMasterResponse(response);});
    
    console.log('prefixMaster', prefixMasterResponse);
  }, []);

  

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

    const years = currentDate.diff(dateOfBirth, "years");
    dateOfBirth.add(years, "years");
    const months = currentDate.diff(dateOfBirth, "months");
    dateOfBirth.add(months, "months");
    const days = currentDate.diff(dateOfBirth, "days");

    return { years, months, days };
  };
  //
  const handleWhatsappChange = (event) => {
    setWhatsappcode(event.target.value);
    setWhatsappopen(false); // Close the option tab after selection if desired
  };
  // context api imports---------------------------------------
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
  // fetch countries
  useEffect(() => {
    fetchCity(stateid);
  }, [stateid]);
  // fetch states
  useEffect(() => {
    fetchState(countryid);
  }, [countryid]);
  const handlePhoneChange = (event) => {
    setPhonecode(event.target.value);
    setPhoneopen(false); // Close the option tab after selection if desired
  };
  // profile image
  // profile image

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

  // table content
  const tablecolumn = [
    {
      title: "Identification Type",
      dataIndex: "identificationtype",
    },
    {
      title: "Id Number",
      dataIndex: "idnumber",
    },
    {
      title: "File Name",
      dataIndex: "filename",
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
      identificationtype: "Driving licence",
      idnumber: "123123445",
      filename: "test file",
    },
    {
      key: "1",
      identificationtype: "Driving licence",
      idnumber: "123123445",
      filename: "test file",
    },
    {
      key: "1",
      identificationtype: "Driving licence",
      idnumber: "123123445",
      filename: "test file",
    },
  ];
  return (
    <>
      {cameraPop && (
        <Pop
          className="ctm-modal"
          close={cameraPopClose}
          title="Click your picture"
        >
          <div className="video"></div>
          <video id="modalVideo" autoPlay />
          <button className="btn pop-btn" onClick={handleTakePicture}>
            Take Picture
          </button>
        </Pop>
      )}
      <div className="employee-registeration-parent parent">
        <MainHeader
          title="Employee Registration"
          link1="#"
          link1_text="Employee Managemnet"
          link2="/employeeRegistration"
          link2_text="Employee Registration"
        />

        <Steps
          titles={[
            "Personal Details",
            "Contact Details",
            "Address Details",
            "Identification Details",
          ]}
          endtext="Finish Registration"
          steps={4}
        >
          {/* page 1 */}

          <div className="steps-controller">
            <Card title="General Details">
              <div className="general-details-card">
                <div className="general-details-left">
                  <div className="general-profile-image">
                    {imgpath && (
                      <img
                        src={imgpath}
                        alt="Captured"
                        width="100%"
                        height="100%"
                      />
                    )}
                  </div>
                  <div className="general-profile-buttons">
                    <div className="file-button">
                      <label htmlFor="fileInput" className="btn-4">
                        Select File
                      </label>
                      <input
                        type="file"
                        id="fileInput"
                        className="hidden"
                        onChange={(e) =>
                          setImgpath(URL.createObjectURL(e.target.files[0]))
                        }
                      />
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
                      className="w-[30%]"
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

                      {prefix &&
                        prefix.map((data) => {
                          return (
                            <MenuItem value={data.prefixId} >
                              {data.prefixDesc}
                            </MenuItem>
                          );
                        })}
                        
                    </Select>

                    <TextField
                      className="mui-input"
                      id="outlined-basic"
                      label="UHID"
                      variant="outlined"
                      disabled
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
                    />
                  </div>
                  <div className="form-row">
                    <TextField
                      className="mui-input"
                      id="outlined-basic"
                      label="First Name"
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
                    />
                    <TextField
                      className="mui-input"
                      id="outlined-basic"
                      label="Middle Name"
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
                    />
                  </div>
                  <div className="form-row">
                    <TextField
                      className="mui-input"
                      id="outlined-basic"
                      label="Last Name"
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
                    />
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Gender"
                      className="w-[100%]"
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
                      MenuProps={{
                        sx: {
                          "& ul": {
                            borderColor: "var(--g4)", // change the menu border color
                          },
                        },
                      }}
                    >
                      {gender &&
                        gender.map((data) => {
                          return (
                            <MenuItem value={data.genderId}>
                              {data.desc}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </div>

                  <div className="form-row">
                    <DatePicker
                      style={{ width: "100%", height: "calc(var(--unit) * 4)" }}
                      onChange={handleDateChange}
                      className="date-field-ant"
                      placeholder="Date Of Birth"
                    />
                    <div
                      className="w-[100%] flex items-center justify-center  rounded-[var(--unit) / 2] bg-[var(--y5)] gap-[var(--unit)]"
                      style={{
                        height: "calc(var(--unit) * 4)",
                        borderRadius: "calc(var(--unit) / 2)",
                      }}
                    >
                      {age ? (
                        <>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              {age.years}
                            </span>{" "}
                            Years
                          </div>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              {age.months}
                            </span>{" "}
                            Months
                          </div>
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              {age.days}
                            </span>{" "}
                            Days
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <span style={{ fontWeight: "bold" }}>0</span> Years
                          </div>
                          <div>
                            <span style={{ fontWeight: "bold" }}>0</span> Months
                          </div>
                          <div>
                            <span style={{ fontWeight: "bold" }}>0</span> Days
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="form-row">
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Nationality"
                      className="w-[100%]"
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
                </div>
              </div>
            </Card>
          </div>
          {/* page 2 */}
          <div className="steps-controller">
            <Card title="Add Employee Contact Details">
              <div className="form-row">
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  className="country-code"
                  label="Code"
                  open={whatsappopen}
                  onClose={() => setWhatsappopen(false)}
                  onOpen={() => setWhatsappopen(true)}
                  value={whatsappcode}
                  onChange={handleWhatsappChange}
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
                  label="Mobile Number"
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
                />
              </div>

              <div className="form-row">
                <TextField
                  className="mui-input"
                  id="outlined-basic"
                  required
                  label="Email Id"
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
                />
              </div>
            </Card>
          </div>
          {/* page 3 */}
          <div className="steps-controller">
            <Card title="Correspondence Address">
              <div className="form-row">
                <TextField
                  className="mui-input"
                  id="outlined-basic"
                  label="Address"
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
                />
              </div>
              <div className="form-row">
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
              </div>
              {/* county */}
              <div className="form-row">
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
                <TextField
                  className="mui-input"
                  id="outlined-basic"
                  label="Street Name"
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
                />
              </div>
              <div className="form-row">
                <TextField
                  className="mui-input"
                  id="outlined-basic"
                  label="Town"
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
                />
                <TextField
                  className="mui-input"
                  id="outlined-basic"
                  label="Postal Code"
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
                />
              </div>
            </Card>
          </div>
          {/* page 4 */}
          <div className="steps-controller">
            <Card title="Identification Details">
              <div className="form-row">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Identification Type"
                  className="mui-input"
                >
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
                <TextField
                  className="mui-input"
                  id="outlined-basic"
                  label="Id Number"
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
                />
              </div>
              <div
                className="my-[var(--unit)] w-full flex justify-between items-center"
                style={{
                  height: "calc(var(--unit) * 4)",
                  borderRadius: "calc(var(--unit) / 3)",
                }}
              >
                <div
                  className="document-left w-3/4 h-full bg-[var(--y4)] flex items-center justify-center"
                  style={{ borderRadius: "calc(var(--unit) / 3)" }}
                >
                  <span className="heading">File Name : </span>
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
                  <button className="btn-4">Scan</button>
                </div>
              </div>

              <FormTable
                data={tabledata}
                columns={tablecolumn}
                hidesearch={true}
              />
            </Card>
          </div>
        </Steps>
      </div>
    </>
  );
}

export default EmployeeRegistration;
