import React from "react";
import MainHeader from "../../../components/MainHeader";
import Card from "../../../components/Card";
import { DatePicker } from "antd";
import { TextField } from "@mui/material";
const { RangePicker } = DatePicker;

function TranscribedDocument() {
  return (
    <div className="transcribed-document-parent parent">
      <MainHeader
        title="Transcribed Document"
        link1="#"
        link1_text="Patient"
        link2="/register%20patient"
        link2_text="New patient Registration"
      />
      <Card title="Transcribed Document">
        <div className="form-row">
          <RangePicker className="range-picker" />
        </div>
        <div className="form-row">
          <TextField
            className="mui-input"
            id="outlined-basic"
            label="Patient Name"
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
            label="Doctor Name"
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
  );
}

export default TranscribedDocument;
