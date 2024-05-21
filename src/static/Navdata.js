import { MdOutlineDashboard } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { GrUserManager } from "react-icons/gr";
import { LuUsers } from "react-icons/lu";
import { BiTask } from "react-icons/bi";
import { AiOutlineControl } from "react-icons/ai";
import { IoReceiptOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiListCheck2 } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineTranscribe } from "react-icons/md";
import { BsTicketPerforated } from "react-icons/bs";
export const level = [
  {
    icon: <MdOutlineDashboard />,
    text: "Dashbaord",
    link: "#",
  },
  {
    icon: <IoCreateOutline />,
    text: "Appointments",
    link: "#",
    children: [
      {
        icon: <IoAddCircleOutline />,
        text: "Quick Registration",
        link: "/bookAppointment",
      },
      {
        icon: <RiListCheck2 />,
        text: "Appointments List",
        link: "/appointmentList",
      },
     
      {
        icon: <BsTicketPerforated />,
        text: "Token Display",
        link: "/tokenDisplay",
      },
     
      {
        icon: <MdOutlineTranscribe />,
        text: "Transcribed Documents",
        link: "/TranscribedDocument",
      },
   
     
    ],
  },
  {
    icon: <FiUser />,
    text: "Patients",
    link: "#",
    children: [
      {
        icon: <IoAddCircleOutline />,
        text: "Quick Registration",
        link: "/quick registration",
      },
      {
        icon: <IoAddCircleOutline />,
        text: "New Patient Registration",
        link: "/register patient",
      },
      {
        icon: <RiListCheck2 />,
        text: "Patient List",
        link: "/patient list",
      },
    ],
  },

  {
    icon: <GrUserManager />,
    text: "Doctors",
    link: "#",
    children: [
      {
        icon: <AiOutlineControl />,
        text: "Specility Master",
        link: "/specialityMaster",
      },
      {
        icon: <IoAddCircleOutline />,
        text: "Doctor Registration",
        link: "/doctorRegistration",
      },
      {
        icon: <RiListCheck2 />,
        text: "Doctor List",
        link: "/doctorList",
      },
      {
        icon: <RiListCheck2 />,
        text: "Doctor Schedule",
        link: "/doctorSchedule",
      },
      {
        icon: <RiListCheck2 />,
        text: "Doctor Charges",
        link: "/doctorCharges",
      },
      {
        icon: <RiListCheck2 />,
        text: "Casesheet Tab Config",
        link: "/casesheetConfiguration",
      },
      {
        icon: <RiListCheck2 />,
        text: "Order Set details",
        link: "/ordersetcreation",
      },
      {
        icon: <RiListCheck2 />,
        text: "Order Set List",
        link: "/ordersetlist",
      },
      {
        icon: <RiListCheck2 />,
        text: "Casesheet Config.",
        link: "",
        child: [
          {
            icon: <IoAddCircleOutline />,
            text: "Casesheet Config.",
            link: "#",
          },
          {
            icon: <IoAddCircleOutline />,
            text: "Complaints Config.",
            link: "#",
          },
          {
            icon: <IoAddCircleOutline />,
            text: "Advice Config.",
            link: "#",
          },
          {
            icon: <IoAddCircleOutline />,
            text: "History Config.",
            link: "#",
          },
          {
            icon: <IoAddCircleOutline />,
            text: "Diagnosis Config.",
            link: "#",
          },
          {
            icon: <IoAddCircleOutline />,
            text: "Service Config.",
            link: "#",
          },
          ]
      },
      {
        icon: <RiListCheck2 />,
        text: "Doctor Opd Mapper",
        link: "/doctoropdmapper",
      },
      {
        icon: <RiListCheck2 />,
        text: "Recetion Doctor Mapper",
        link: "/receptionDoctorMapper",
      },
      {
        icon: <RiListCheck2 />,
        text: "Sms Config.",
        link: "/smsConfiguration",
      },
      {
        icon: <RiListCheck2 />,
        text: "Email Config.",
        link: "/emailConfiguration",
      },
      {
        icon: <RiListCheck2 />,
        text: "Doctor Holiday Calender",
        link: "/doctorHolidayCalender",
      },
    ],
  },
  {
    icon: <LuUsers />,
    text: "Employee Management",
    link: "#",
    children: [
      {
        icon: <IoAddCircleOutline />,
        text: "Employee Registration",
        link: "/employeeRegistration",
      },
      {
        icon: <RiListCheck2 />,
        text: "Employee List",
        link: "/employeeList",
      },
     
    ],

  },
  {
    icon: <BiTask />,
    text: "Task & Notification",
    link: "/notification",
  },
  {
    icon: <AiOutlineControl />,
    text: "Master management",
    link: "#",
  },
  {
    icon: <IoReceiptOutline />,
    text: "Billing",
    link: "#",
  },
  {
    icon: <IoDocumentTextOutline />,
    text: "Reports",
    link: "#",
  },
  {
    icon: <IoDocumentTextOutline />,
    text: "Dummy",
    link: "#",
    children: [
      {
        icon: <IoAddCircleOutline />,
        text: "Dummy level 2",
        link: "#",


      },
      {
        icon: <IoAddCircleOutline />,
        text: "Dummy level 2",
        link: "#",
        child: [
          {
            icon: <IoAddCircleOutline />,
            text: "Dummy level 3",
            link: "#",
    
    
          },
          {
            icon: <IoAddCircleOutline />,
            text: "Dummy level 3",
            link: "#",
    
            
          },
          {
            icon: <IoAddCircleOutline />,
            text: "Dummy level 3",
            link: "#",
    
          },
          ]


      },
      {
        icon: <IoAddCircleOutline />,
        text: "Dummy level 2",
        link: "#",

      },
      ]


  },
];
