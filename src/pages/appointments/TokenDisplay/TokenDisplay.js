import React, { useState } from "react";
import "./TokenDisplay.scss";
import MainHeader from "../../../components/MainHeader";
import { MenuItem, Select } from "@mui/material";
import Card from "../../../components/Card";
import { LuTable } from "react-icons/lu";
function TokenDisplay() {
  const [table, setTable] = useState({
    fsize: "30px",
    display: true,
  });
  
  const CardVal = {
    header: [
      {
        icon: <LuTable/>,
        title: "View Table",
        function: ()=> setTable({...table,display: true}),
      },
    ],
  };

  return (
    <div className="parent token-display">
      <MainHeader
        title="Token Display Screen"
        link1="#"
        link1_text="Appointments"
        link2="/employeeRegistration"
        link2_text="Token Display Screen"
      />

      <div className="cards-controller">
        <Card title="token display controls"  cardvalue={CardVal}>
          <div className="form-row">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Membership Number"
              className="mui-input"
            >
              <MenuItem value={30} selected>
                Normal
              </MenuItem>
              <MenuItem value={20}>Small</MenuItem>
              <MenuItem value={40}>Medium</MenuItem>
              <MenuItem value={50}>large</MenuItem>
            </Select>
          </div>
        </Card>
      </div>

      {table.display && (
        <div className="full-table">
          <button
            className="btn"
            onClick={() => setTable({ ...table, display: false })}
          >
            close
          </button>

          <table>
            <thead>
              <tr>
                <th>UHID</th>
                <th>Patient Name</th>
                <th>Doctor Name</th>
                <th>OPD Number</th>
                <th>Token No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
              </tr>
              <tr>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
              </tr>
              <tr>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
              </tr>
              <tr>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
              </tr>
              <tr>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
                <td>asdfsdfsad</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TokenDisplay;
