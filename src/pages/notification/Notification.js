import React, { useCallback, useState } from "react";
import MainHeader from "../../components/MainHeader";
import Card from "../../components/Card";
import { FaArrowRight } from "react-icons/fa6";

import { Autocomplete, TextField, TextareaAutosize } from "@mui/material";



function Notification() {
 
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);
  const [data] = useState([
    { id: 1, name: "md zaigham" },
    { id: 2, name: "sunil shlke" },
    { id: 3, name: "harsh singh" },
  ]);
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // for filter data function
  const fetchData = (query) => {
    if (query) {
      const filteredOptions = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setOptions(filteredOptions);
    } else {
      setOptions([]);
    }
  };

 
  const debouncedFetchData = useCallback(debounce(fetchData, 300), [data]);


  const handleInputChange = (event) => {
    const query = event.target.value;
    setValue(query);
    debouncedFetchData(query);
  };

  const CardVal = {
    header: [
      {
        icon: <FaArrowRight />,
        title: "Send",
        function: "",
      },
    ],
  };
 

  return (
    <div className="notification-parent parent">
      <MainHeader
        title="Notification"
        link1="#"
        link1_text="Patient"
        link2="/notification"
        link2_text="Notification"
      />
      <Card title="Notification" cardvalue={CardVal}>
        <div className="form-row">
          <Autocomplete
            id="controlled-demo"
            className="mui-input"
            options={options}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Controlled"
                variant="outlined"
                value={value}
                onChange={handleInputChange}
              />
            )}
          />
        </div>
        <div className="form-row">
        <TextField
      multiline
      rows={2} // You can adjust the number of rows to your preference
      className="mui-input"
      id="outlined-basic"
      label="Comment"
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

export default Notification;
