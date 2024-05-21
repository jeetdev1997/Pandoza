import React, { useEffect, useState } from "react";
import "../../styles/login.scss";
import logo from "../../assets/login/brand-logo.svg";
import { TextField } from "@mui/material";
import axios from "axios";
import md5 from "md5";
import { Link, useNavigate } from "react-router-dom";
import { FiRefreshCw } from "react-icons/fi";
import Fingerprint2 from "fingerprintjs2";
import { MuiOtpInput } from "mui-one-time-password-input";
import CryptoJS from 'crypto-js';
// generate captcha
const generateCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const captchaLength = 5; // You can adjust the length of the captcha
  let captcha = "";
  for (let i = 0; i < captchaLength; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return captcha;
};
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fingerprint, setFingerprint] = useState("");
  const [loading, setLoading] = useState(false);
  const [apidata, setApidata] = useState({});
  const [valid, setvalid] = useState(false);
  const [error, seterror] = useState(false);
  // user login data
  const [respdata, setRespdata] = useState([]);
  // step states for usestate
  const [step1, setStep1] = useState(true);

  // use navigate (we use it for dynamic navigation)
  const navigate = useNavigate();
  // captcha verification ----------------------------------------------
  const [capval, setCapval] = useState("");
  const [caperr, setCaperr] = useState(false);

  const verifyCaptcha = () => {
    if (capval == captcha) {
      setCaperr(false);
      return true;
    } else {
      setCaperr(true);
      return false;
    }
  };
  // --------------------------------------------verify username
  const verifyUsername = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/getLoginNameDetails`,
        {
          userName: md5(username),
        }
      );
      if (response.data.object != null) {
        setvalid(true);
        seterror(false);
        setApidata(response.data.object);
      } else {
        setvalid(false);
        seterror(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // generate fingerprint
  const generateFingerprint = async () => {
    try {
      const components = await Fingerprint2.getPromise();
      const values = components.map((component) => component.value);
      const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
      setFingerprint(fingerprint);
    } catch (e) {
      console.error("Error generating fingerprint:", e);
    }
  };
  // captcha
  const [captcha, setCaptcha] = useState(generateCaptcha());

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };
  // refreshing data
  useEffect(() => {
    refreshCaptcha();
    generateFingerprint();
  }, []);

  // handle login ----------------------------------------
  const [passerr, setpasserr] = useState(false);
  const [sessionobject, setSessionobject] = useState([]);

//   encryption handler
const secretKey = 'd1f1b7e1a0e7a2a3b5f4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f';
const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(sessionobject), secretKey).toString();
// 
  const handleLogin = async (e) => {
    e.preventDefault();
    verifyCaptcha();

    if (captcha == capval) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}api/v01/validateLogin`,
          {
            userName: md5(username),
            password: md5(password),
            browserFingerPrint: fingerprint,
            hospitalId: apidata.hospitalId,
            hiddenRoleId: apidata.roleId,
          }
        );
        // setRespdata(response.data.listObject)  eod 30-04-2024
        const listObject = response.data.listObject;
        setSessionobject(response.data.object);
        setRespdata(listObject);
        // localStorage.setItem("")
        // console.log(response.data.listObject);
        if (response.data.status == "success") {
          // console.log(respdata);
          // cheaking for first user

          if (
            listObject.FirstLogin == false &&
            ((listObject == null && listObject.newDevice) ||
              (listObject != null &&
                listObject.isDeviceExpired &&
                listObject.newDevice))
          ) {
            localStorage.setItem("listObject", respdata[0]);
            navigate("/select hospital");
          } else {
            setStep1(false);
            setotpform(true);
          }
        } else if (response.data.status == "error") {
          setpasserr(true);
          console.log("wrong password");
        }
      } catch (error) {
        console.log(error);
        setpasserr(true);
      }
    } else {
      setCaperr(true);
    }
  };
  // otp verification
  const [otp, setOtp] = useState("");
  const [otperr, setotperr] = useState(false);
  const [otpform, setotpform] = useState(false);
  const handleChange = (newValue) => {
    if (newValue.length <= 5) {
      setOtp(newValue);
    }
  };

  const otpSubmitHandler = (e) => {
    e.preventDefault();
    if (md5(otp) == respdata[0].otpString) {
      console.log(respdata[0]);
      localStorage.setItem("sessionobject", JSON.stringify(encryptedData));
      navigate("/select hospital");
    } else {
      setotperr(true);
    }
  };
  console.log(encryptedData);
  return (
    <div className="login-parent">
      <div className="login-left bg-img-cover"></div>
      <div className="login-right">
        <div className="login-form1">
          <img src={logo} alt="" width={"180px"} />
          {step1 && (
            <>
              {" "}
              <form action="" onSubmit={verifyUsername} className="form-1">
                <div className="input-box-div">
                  <TextField
                    className="mui-input"
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    sx={{
                      "& label.Mui-focused": {
                        color: "#00003B", // change the label color when focused
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#00003B", // change the border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#FFD600", // change the border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#FFD600", // change the border color when focused
                        },
                        "&.Mui-error": {
                          borderColor: "#fff", // change the border color when in error state
                        },
                      },
                    }}
                    disabled={valid}
                    onChange={(e) => setUsername(e.target.value)}
                    error={error}
                  />
                  {error && (
                    <div className="error-msg">Username not verified</div>
                  )}
                </div>
                {!valid && (
                  <button
                    className="form-button"
                    type="submit"
                    disabled={!username}
                  >
                    {loading ? "Verifying..." : "Next"}
                  </button>
                )}
                {!valid && (
                  <Link className="btn-links" to="/forget password">
                    Forgot Username
                  </Link>
                )}
              </form>
              {valid && (
                <form action="#" onSubmit={handleLogin} className="form-2">
                  <div className="input-box-div">
                    <div className="input-box-div">
                      <TextField
                        required
                        className="mui-input"
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#00003B", // change the label color when focused
                          },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#00003B", // change the border color
                            },
                            "&:hover fieldset": {
                              borderColor: "#FFD600", // change the border color on hover
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#FFD600", // change the border color when focused
                            },
                          },
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    {passerr && (
                      <div className="error-msg">Invalid password</div>
                    )}
                  </div>
                  <div className="input-box-div">
                    <div className="captcha-box-div">
                      {captcha}
                      <button
                        className="cap-ref"
                        onClick={() => refreshCaptcha()}
                      >
                        <FiRefreshCw />
                      </button>
                    </div>
                  </div>
                  <div className="input-box-div">
                    <div className="input-box-div">
                      <TextField
                        className="mui-input"
                        id="outlined-basic"
                        label="Enter Captcha"
                        variant="outlined"
                        sx={{
                          "& label.Mui-focused": {
                            color: "#00003B", // change the label color when focused
                          },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#00003B", // change the border color
                            },
                            "&:hover fieldset": {
                              borderColor: "#FFD600", // change the border color on hover
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#FFD600", // change the border color when focused
                            },
                          },
                        }}
                        onChange={(e) => setCapval(e.target.value)}
                      />
                    </div>
                    {caperr && (
                      <div className="error-msg">Captcha not matched</div>
                    )}
                  </div>
                  <button className="form-button" type="submit">
                    Next
                  </button>
                  <Link className="btn-links" to="/forget password">
                    Forgot Credentials
                  </Link>
                </form>
              )}
            </>
          )}
          {otpform && (
            <form action="" className="form-3" onSubmit={otpSubmitHandler}>
              <div className="otp-heading">
                <span className="otp-title">Enter otp</span>
                <span className="otp-description">
                  Enter the otp send to your email inbox and type it below
                </span>
              </div>
              <MuiOtpInput
                value={otp}
                onChange={handleChange}
                length={5}
                TextFieldsProps={{ placeholder: "-" }}
                className="mui-input-otp"
                sx={{
                  "& label.Mui-focused": {
                    color: "#00003B", // change the label color when focused
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#00003B", // change the border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFD600", // change the border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFD600", // change the border color when focused
                    },
                  },
                }}
              />
              <div className="otp-resend">
                {otperr && <div className="error-msg">Otp not verified</div>}
                <Link className="btn-links" onClick={() => handleLogin}>
                  Resend otp
                </Link>
              </div>
              <button className="form-button" type="submit">
                Next
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
