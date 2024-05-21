import Sidebar from "./components/Sidebar";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guide from "./pages/Guide";
import { useEffect, useState } from "react";
import Login from "./authentication/loginscreens/Login";
import ChooseHosp from "./authentication/loginscreens/ChooseHosp";
import ForgetPassword from "./authentication/loginscreens/ForgetPassword";
import Test from "./pages/Test";
import FormCard from "./components/FormCard";
import Loader from "./components/Loader";
import PatientRegistration from "./pages/patient/PatientRegistration";
import { useStateValue } from "./context/Context";
import AOS from 'aos';
import 'aos/dist/aos.css';
import QuickRegistration from "./pages/patient/QuickRegistration";
import Sidebar2 from "./components/Sidebar2";
import PatientList from "./pages/patient/PatientList";
import DoctorList from "./pages/doctor/doctorlist/DoctorList";
import ReceptionDoctorMapper from "./pages/doctor/receptiondoctormapper/ReceptionDoctorMapper";
import EmailConfigutation from "./pages/doctor/emailconfiguration/EmailConfiguration";
import EmailConfiguration from "./pages/doctor/emailconfiguration/EmailConfiguration";
import Notification from "./pages/notification/Notification";
import CasesheetConfiguration from "./pages/doctor/casesheettabconfig/CasesheetConfiguration";
import DoctorCharge from "./pages/doctor/DoctorCharge/DoctorCharge";
import OrderSetCreation from "./pages/doctor/ordersetcreation/OrderSetCreation";
import DoctorOpdMapper from "./pages/doctor/DoctorOpdMapper/DoctorOpdMapper";
import DoctorRegistration from "./pages/doctor/doctorregistration/DoctorRegistration";
import EmployeeRegistration from "./pages/employeeManagement/employeeRegistration/EmployeeRegistration";
import EmployeeList from "./pages/employeeManagement/employeeList/EmployeeList";
import BookAppointment from "./pages/appointments/bookAppointment/BookAppointment";
import AppointmentList from "./pages/appointments/appointmentList/AppointmentList";
import TokenDisplay from "./pages/appointments/TokenDisplay/TokenDisplay";
import TranscribedDocument from "./pages/appointments/TranscribedDocument/TranscribedDocument";
import SpecialityMaster from "./pages/doctor/specialitymaster/SpecialityMaster";
import ToggleButton from "./components/CustomToggleButton";
import RegularAppoinment from "./pages/appointments/bookAppointment/RegularAppoinment/RegularAppoinment"
function App() {
  const { isToggled, toggleState } = useStateValue();
  const [sbexpansion, setsbexpansion] = useState(false);
  function expand() {
    setsbexpansion(true);
  }
  function contract() {
    setsbexpansion(false);
  }
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div className="App">
      <BrowserRouter>
        {isToggled && <Loader />}

        <Sidebar2 />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/select hospital" element={<ChooseHosp />} />
          <Route path="/forget password" element={<ForgetPassword />} />
          {/* patient portal */}
          <Route path="/register patient" element={<PatientRegistration />} />
          <Route path="/quick registration" element={<QuickRegistration />} />
          <Route path="/patient list" element={<PatientList />} />

          {/* testing routes here must be deleted before deployement*/}
          <Route path="/test" element={<Test />} />
          <Route path="/card" element={<FormCard />} />
          <Route path="/g" element={<Guide />} />
          <Route path="/specialityMaster" element={<SpecialityMaster />} />
          <Route path="/casesheetConfiguration" element={<CasesheetConfiguration />} />
          <Route path="/doctorchargemaster" element={<DoctorCharge />} />
          <Route path="/ordersetcreation" element={<OrderSetCreation />} />
          <Route path="/doctoropdmapper" element={<DoctorOpdMapper />} />
          <Route path="/doctorList" element={<DoctorList />} />
          <Route path="/emailConfiguration" element={<EmailConfiguration />} />
          <Route path="/receptionDoctorMapper" element={<ReceptionDoctorMapper />} />
          <Route path="/doctorRegistration" element={<DoctorRegistration />} />

          {/* employee management */}

          <Route path="/employeeRegistration" element={<EmployeeRegistration />} />
          <Route path="/employeeList" element={<EmployeeList />} />


          {/* Notification */}

          <Route path="/notification" element={<Notification />} />


          {/* Appointments */}

          <Route path="/bookAppointment" element={<BookAppointment />} />
          <Route path="/appointmentList" element={<AppointmentList />} />
          <Route path="/tokenDisplay" element={<TokenDisplay />} />
          <Route path="/transcribedDocument" element={<TranscribedDocument />} />
          <Route path="/RegularAppoinment" element={<RegularAppoinment />} />


          {/* <Route path="/loader" element={<Loader />} /> */}
          {/* --------Test Routes Above----------------- */}
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <div className="parent">
          <div className={sbexpansion ? "main" : " main main-xl"}>
            <div className="sb">
              <Sidebar expand={expand} contract={contract} />
            </div>
            <Routes>
              <Route path="/g" element={<Guide />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter> */}
    </div>

  );
}

export default App;
