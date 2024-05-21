import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
const StateContext = createContext();
export const StateProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isNumber, setIsNumber] = useState("0");
  const [prefix, setPrefix] = useState([]);
  const [country, setCountry] = useState([]);
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([])
  const [gender, setGender] = useState([])
  const [countrycode, setCountrycode] = useState([])
  const [nhsmaster, setNhsmaster] = useState([])
  const [doctorlist, setDoctorlist] = useState([])


  // re-usable contexts 
  // fetch prefix 
  const fetchPrefix = () => {
    axios.get(`${process.env.REACT_APP_URL}api/v01/prefixMaster`)
      .then(res => setPrefix(res.data.listObject))
      .catch(err => console.log(err))
  }
  //fetch country
  const fetchCountry = () => {
    axios.get(`${process.env.REACT_APP_URL}api/v01/countryMaster`)
      .then(res => { setCountry(res.data.listObject); setCountrycode(res.data.listObject) })
      .catch(err => console.log(err))
  }
  //fetch state
  const fetchState = (Id) => {
    axios.post(`${process.env.REACT_APP_URL}api/v01/stateMaster`, {
      countryId: Id
    })
      .then(res => setStates(res.data.listObject))
      .catch(err => console.log(err))
  }
  //fetch city
  const fetchCity = (Id) => {
    axios.post(`${process.env.REACT_APP_URL}api/v01/cityMaster`, {
      stateId: Id
    })
      .then(res => setCity(res.data.listObject))
      .catch(err => console.log(err))
  }
  //
  // fetch gender
  const fetchGender = () => {
    axios.post(`${process.env.REACT_APP_URL}api/v01/genderMaster`,
      {
        "status": "A"
      }
    )
      .then(res => setGender(res.data.listObject))
      .catch(err => console.log(err))
  }
  // fetch nhs master
  // fetch patient
  const [patientmaster,setPatientmaster] = useState([])
  const fetchPatient = () => {
    // setIsToggled(true)
    axios.post(`${process.env.REACT_APP_URL}api/v01/getListOfPatient`,
    {
      "unitId": 1,
      "hospitalId": 1,
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
          "userName": "32fd7848cdcd58fffdaba20f4a4428d1",
          "zoneDesc": "GB",
          "channelId":1
      }
  }
    )
      .then(res => {setPatientmaster(res.data.object);setIsToggled(false)})
      .catch(err => console.log(err))
  }

  // fetch nhs master
  const fetchDoctor = () => {
    axios.post(`${process.env.REACT_APP_URL}api/v01/getDoctorList`,
      {
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
          "userMasterId": 1005,
          "unitId": 1,
          "hospitalId": 1,
          "doctorId": null,
          "patientId": null,
          "userName": "32fd7848cdcd58fffdaba20f4a4428d1",
          "zoneDesc": "GB"
        }
      }
    )
      .then(res => setDoctorlist(res.data.listObject))
      .catch(err => console.log(err))
  }

  // ------------------------------------------------------------
  const fetchNHS = () => {
    axios.post(`${process.env.REACT_APP_URL}api/v01/getNHSMaster`,
      {
        "sessionObject": {
          "listTabIds": {
            "155": "155"
          },
          "listModuleIds": {
            "124": "124"
          },
          "roleMasterId": 10,
          "userMasterId": 1005,
          "unitId": 1,
          "hospitalId": 1,
          "doctorId": null,
          "patientId": null,
          "userName": "32fd7848cdcd58fffdaba20f4a4428d1",
          "zoneDesc": "GB"
        }

      }
    )
      .then(res => setNhsmaster(res.data.object.nhsList))
      .catch(err => console.log(err))
  }

  // ------------------------------------------------------------------------------------------XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX------------------------------------------------
  // fetch country codes----------------------------------------------------------------------------------------------------//
  // date formatter
  function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }
  // -----------------usefeffect dependencies------------------------------------------------------------------------ //
  useEffect(() => {
    fetchPrefix();
    fetchCountry();
    fetchGender();
    fetchNHS();
    fetchDoctor();
    fetchPatient();
  }, [])


  // ------------------------------------------------------------------USEEFFECT--------------------------------------------//
  const toggleState = (value) => {
    setIsToggled(value);
  };
  const increament = () => {
    setIsNumber(100);
  };
  // console.log(nhsmaster)
  // const response = JSON.parse(nhsmaster);
  // const nhsList = response.object.nhsList;
  // console.log(nhsmaster)
  // console.log(doctorlist)
  return (
    <StateContext.Provider value={{ isToggled, toggleState, increament, isNumber, prefix, fetchState, gender, country, countrycode, formatDate, fetchCity, city, states, nhsmaster, doctorlist, patientmaster }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
