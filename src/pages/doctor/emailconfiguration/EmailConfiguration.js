import React from "react";
import "../emailconfiguration/emailconfiguration.scss";
import MainHeader from "../../../components/MainHeader";
import { BiSave } from "react-icons/bi";
import Card from "../../../components/Card";
import { TextField } from "@mui/material";

function EmailConfiguration() {
  const CardVal = {
    header: [
      {
        icon: <BiSave />,
        title: "Save",
        function: "",
      },
    ],
  };

  return (
    <>
      <div className="email-config-parent parent">
        <MainHeader
          title="Email Configuration"
          link1="#"
          link1_text="Patient"
          link2="/emailConfiguration"
          link2_text="Quick Registration"
        />


        <div className="main-content">

        <Card title="Email Configuration" cardvalue={CardVal}>
          <div className="form-row">
            <TextField
              className="mui-input"
              id="outlined-basic"
              required
              label="User Name"
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
              label="Password"
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

       
      </div>
    </>
  );
}

export default EmailConfiguration;
