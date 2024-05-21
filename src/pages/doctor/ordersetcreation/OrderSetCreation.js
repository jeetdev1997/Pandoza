import React, { useState } from "react";
import MainHeader from "../../../components/MainHeader";
import Card from "../../../components/Card";
import { IoMdAdd } from "react-icons/io";
import { MenuItem, Select, TextField } from "@mui/material";
import { BiSave } from "react-icons/bi";
import "./ordersetcreation.scss";
import FormTable from "../../../components/FormTable";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
const OrderSetCreation = () => {
  const CardVal = {
    header: [
      {
        icon: <BiSave />,
        title: "Save",
        function: "",
      },
    ],
  };
  const [instruction, setInstruction] = useState(true);
  const [investigation, setInvestigation] = useState(false);
  const [meditation, setMeditation] = useState(false);
  const [procedure, setProcedure] = useState(false);
  const [advice, setAdvice] = useState(false);

  function handleClose() {
    setInstruction(false);
    setInvestigation(false);
    setMeditation(false);
    setProcedure(false);
    setAdvice(false);
  }

  const instructionClick = () => {
    handleClose();
    setInstruction(true);
  };
  const investigationClick = () => {
    handleClose();
    setInvestigation(true);
  };
  const meditationClick = () => {
    handleClose();
    setMeditation(true);
  };
  const procedureClick = () => {
    handleClose();
    setProcedure(true);
  };
  const adviceClick = () => {
    handleClose();
    setAdvice(true);
  };

// card val1
const CardVal1 = {
    header: [
      {
        icon: <MdAdd />,
        title: "Add",
        function: "",
      },
    ],
  };
const AdviceCardVal = {
    header: [
      {
        icon: <MdAdd />,
        title: "Add",
        function: "",
      },
    ],
  };
//   table data 
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
        name: 'MD Zaigham',
        address: 'Pune',
        mobile: 123456789,
        fax: 4545454,
        email: "zaigham@gmail.com",
    },
    {
        key: '1',
        name: 'Sunil',
        address: 'pune',
        mobile: 123456789,
        fax: 4545454,
        email: "test@gmail.com",
    },
    {
        key: '1',
        name: 'Rishabh',
        address: 'Pune',
        mobile: 123456789,
        fax: 4545454,
        email: "test@gmail.com",
    },
    {
        key: '1',
        name: 'Harsh',
        address: 'Pune',
        mobile: 123456789,
        fax: 4545454,
        email: "test@gmail.com",
    },
    {
        key: '1',
        name: 'Ketan',
        address: 'Pune',
        mobile: 123456789,
        fax: 4545454,
        email: "test@gmail.com",
    },

];
  return (
    <div className="order-set-creation-parent parent">
      <MainHeader
        title="Quick Registration"
        link1="#"
        link1_text="Patient"
        link2="/ordersetcreation"
        link2_text="Quick Registration"
      />

      <Card title="Order Set Creation" cardvalue={CardVal}>
        <div className="form-row">
          <TextField
            className="mui-input"
            id="outlined-basic"
            required
            label="Order Set Name"
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
            required
            label="Diagnosis"
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
            label="Order Type"
            className="mui-input"
            //   value={formData.prefixId}
            //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
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
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
          </Select>
        </div>
      </Card>
      <div className="order-option">
        {/* <div className="order-set-option"> */}
        <div className={instruction ? "option   instruction  active" : "option   instruction"} onClick={instructionClick}>
          Instruction
        </div>
        <div className={investigation ? "option  investigation active" : "option  investigation"} onClick={investigationClick}>
          Investigation
        </div>
        <div className={meditation ? "option medication active" :"option medication" } onClick={meditationClick}>
          Medication
        </div>
        <div className={procedure ? "option  procedure active" : "option  procedure"} onClick={procedureClick}>
          Procedure
        </div>
        <div className={advice ? "option  advice active" : "option  advice"} onClick={adviceClick}>
          Advice
        </div>
        {/* </div> */}

        <div className="blankdiv option"></div>
      </div>
    
      {instruction && (
        <Card title="Instruction">
          <div className="form-row">
            <TextField
              multiline
              className="mui-input"
              id="outlined-basic"
              required
              label="Instruction"
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
      )}
      {investigation && (
       
      <Card title="Investigation" cardvalue={CardVal1}>
      <div className="form-row">
      <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Group"
            className="mui-input"
            //   value={formData.prefixId}
            //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
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
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
          </Select>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Sub Group"
            className="mui-input"
            //   value={formData.prefixId}
            //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
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
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
          </Select>
        </div>
      <div className="form-row">
        <div className="form-row-left">
          <TextField
            multiline
            className="mui-input"
            id="outlined-basic"
            label="Service"
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
      
        </div>
        <FormTable data={tabledata} columns={tablecolumn}/>
       

      </Card>
      )}
      {meditation && (
        <Card title="Meditation" cardvalue={CardVal1}>
        <div className="form-row">
            <TextField
              multiline
              className="mui-input"
              id="outlined-basic"
              label="Brand"
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
              multiline
              className="mui-input"
              id="outlined-basic"
              label="Generic"
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
            label="ROA"
            className="mui-input"
            //   value={formData.prefixId}
            //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
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
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
          </Select>
            <TextField
              multiline
              className="mui-input"
              id="outlined-basic"
              label="Dosage"
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
              multiline
              className="mui-input"
              id="outlined-basic"
              label="Duration"
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
            label="Frequency"
            className="mui-input"
            //   value={formData.prefixId}
            //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
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
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
            <MenuItem>h878</MenuItem>
          </Select>
          </div>
        <div className="form-row">
          <div className="form-row-left">
            <TextField
              multiline
              className="mui-input"
              id="outlined-basic"
              label="Instruction"
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
    
          </div>
          <FormTable data={tabledata} columns={tablecolumn}/>
         
  
        </Card>
      )}
      {procedure && (
         <Card title="Procedure" cardvalue={CardVal1}>
         <div className="form-row">
         <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               label="Select Group"
               className="mui-input"
               //   value={formData.prefixId}
               //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
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
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
             </Select>
             <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               label="Select Sub Group"
               className="mui-input"
               //   value={formData.prefixId}
               //   onChange={e => setformData({ ...formData, prefixId: e.target.value })}
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
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
               <MenuItem>h878</MenuItem>
             </Select>
           </div>
         <div className="form-row">
           <div className="form-row-left">
             <TextField
               multiline
               className="mui-input"
               id="outlined-basic"
               label="Procedure name"
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
         
           </div>
           <FormTable data={tabledata} columns={tablecolumn}/>
          
   
         </Card>
      )}
      {advice && (
        <Card title="Advice"cardvalue={AdviceCardVal}>
          <div className="form-row">
            <TextField
              multiline
              className="mui-input"
              id="outlined-basic"
              required
              label="Entire Advice"
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
          <FormTable data={tabledata} columns={tablecolumn}/>
          
        </Card>
      )}
    </div>
  );
};

export default OrderSetCreation;
