const navlinks = [
  {
    id: 0,
    icon: "fa fa-home",
    toggle: "fa fa-angle-down",
    title: "Dashboard",
    collapseid: "item_1",
    url:"/",
    collapseitem: [
      {
        id: 0,
        item: "Vertical",
        url:"/",
      },
      {
        id: 1,
        item: "Vertical Rtl",
        url:"/",
      },
      {
        id: 2,
        item: "Horizontal",
        url:"/",
      },
    ],
  },
  {
    id: 1,
    icon: "fa fa-wheelchair",
    title: "Patient",
    toggle: "fa fa-angle-down",
    collapseid: "item_2",
    url:null,
    collapseitem: [
      {
        id: 0,
        item: "Add Patient",
        url:"Addpatient"
      },
      {
        id: 1,
        item: "All Patient",
        url:"Allpatient"
      },
      {
        id: 2,
        item: "Patient Details",
        url:"PatientDetail"
      },
      {
        id: 3,
        item: "Edit Patient",
        url:"EditPatient"
      },
    ],
  },
  {
    id: 2,
    icon: "fa fa-user",
    toggle: "fa fa-angle-down",
    title: "Doctors",
    collapseid: "item_3",
    url:null,
    collapseitem: [
      {
        id: 0,
        item: "Add Doctor",
        url:"AddDoctor"
      },
      {
        id: 1,
        item: "All Doctors",
        url:"AllDoctors"
      },
      {
        id: 2,
        item: "Doctor Details",
        url:"DoctorDetail"
      },
      {
        id: 3,
        item: "Edit Doctor",
        url:"EditDoctor"
      },
    ],
  },
  {
    id: 3,
    icon: "fa fa-edit",
    title: "Appointments",
    toggle: "fa fa-angle-down",
    collapseid: "item_4",
    url:null,
    collapseitem: [
      {
        id: 0,
        item: "Add Appointment",
        url:"AddAppointment"
      },
      {
        id: 1,
        item: "All Appointments",
        url:"AllAppointment"
      },
      {
        id: 2,
        item: "Appointment Details",
        url:"AppointmentDetail"
      },
      {
        id: 3,
        item: "Edit Appointment",
        url:"EditAppointment" 
      },
    ],
  },
  {
    id: 4,
    icon: "fa fa-dollar",
    title: "Payments",
    toggle: "fa fa-angle-down",
    collapseid: "item_5",
    url:null,
    collapseitem: [
      {
        id: 0,
        item: "Add Payment",
        url:"AddPayment"
      },
      {
        id: 1,
        item: "All Payments",
        url:"AllPayment" 
      },
      {
        id: 2,
        item: "Payment Invoice",
        url:"Paymentinvoice"
      },
    ],
  },
  {
    id: 5,
    icon: "fa fa-key",
    toggle: "fa fa-angle-down",
    title: "Room Allotments",
    collapseid: "item_6",
    url:null,
    collapseitem: [
      {
        id: 0,
        item: "Add Room Allotment",
        url:"AddRoom" 
      },
      {
        id: 1,
        item: "All Rooms",
        url:"AllRoom"
      },
      {
        id: 2,
        item: "Edit Room Allotment",
        url:"EditRoomAlllotment"
      },
    ],
  },
  {
    id: 6,
    icon: "fa fa-files-o",
    title: "UI KIT",
    toggle: "fa fa-angle-down",
    collapseid: "item_7",
    url:null,
    collapseitem: [
      {
        id: 0,
        item: "Typography",
        url:null
      },
      {
        id: 2,
        item: "Buttons",
        url:null
      },
      {
        id: 3,
        item: "Cards",
        url:null
      },
      {
        id: 4,
        item: "Tabs",
        url:null
      },
      {
        id: 5,
        item: "Accordions",
        url:null
      },
      {
        id: 6,
        item: "Modals",
        url:null
      },
      {
        id: 7,
        item: "List & Media Object",
        url:null
      },
      {
        id: 8,
        item: "Grid",
        url:null
      },
      {
        id: 9,
        item: "Progress Bars",
        url:null
      },
      {
        id: 10,
        item: "Notification & Alerts",
        url:null
      },
      {
        id: 11,
        item: "Pagination",
        url:null
      },
      {
        id: 12,
        item: "Carousel",
        url:null
      },
    ],
  },
  {
    id: 7,
    icon: "fa fa-bars",
    title: "Tables",
    toggle: null,
    collapseid: "item_8",
    url:"Tables",
    collapseitem: [
      {
        id: 0,
        item: null,
        url:null,
      },
    ],
  },
  {
    id: 8,
    icon: "fa fa-pie-chart",
    toggle: "fa fa-angle-down",
    title: "Charts",
    collapseid: "item_9",
    url:null,
    collapseitem: [
      {
        id: 0,
        item: "Morris",
        url:"MorrisChart"
      },
      {
        id: 1,
        item: "Flot",
        url:"FloatChart"
      },
    ],
  },
  {
    id: 9,
    icon: "fa fa-map-marker",
    toggle: "fa fa-angle-down",
    title: "Maps",
    collapseid: "item_10",
    collapseitem: [
      {
        id: 0,
        item: "Google Maps",
        url:"google"
      },
      {
        id: 1,
        item: "Vector Maps",
        url:"vector"
      },
    ],
  },
  {
    id: 10,
    icon: "fa fa-minus-square-o",
    toggle: null,
    title: "Forms",
    collapseid: "item_11",
    url:"Form",
    collapseitem: [
      {
        id: 0,
        item: null,
        url:null
      },
    ],
  },
  {
    id: 11,
    icon: "fa fa-book",
    title: "Icons",
    toggle: "fa fa-angle-down",
    collapseid: "item_12",
    url:null,
    collapseitem: [
      {
        id: 0,
        item: "Font Awesome",
        url:"FontAwesome" 
      },
      {
        id: 1,
        item: "Themify",
        url:"Themify"
      },
    ],
  },
  {
    id: 12,
    icon: "fa fa-folder",
    toggle: "fa fa-angle-down",
    title: "Other Pages",
    collapseid: "item_13",
    url:null,
    collapseitem: [
      {
        id: 0,
        item: "Login",
        url:"Login"
      },
      {
        id: 1,
        item: "Sign Up",
        url:"SignUp"
      },
      {
        id: 2,
        item: "404",
        url:"404"
      },
      {
        id: 3,
        item: "Blank Page",
        url:"BlankPage" 
      },
      {
        id: 4,
        item: "Pricing",
        url:"Pricing"
      },
      {
        id: 5,
        item: "FAQ",
        url:"Faq"
      },
      {
        id: 6,
        item: "Invoice",
        url:"Invoice" 
      },
    ],
  },
];
const menu = [
  {
    id:1,
    menu_icon: "fa fa-bars",
    color:"bg-black text-white",
    zoom_icon: "fa fa-expand",
    search_icon: "fa fa-search",
    Notification_icon: "fa fa-bell",
    user_icon: "fa fa-user",
  }
];
const contactdetailposter = [
  {
    id:1,
    header_icon: "fa fa-comments-o",
    header: "Need Help",
    ph_icon: "fa fa-phone",
    ph_no: "+91 6201269225",
    email_icon: "fa fa-envelope",
    email: "nirajsingh4141@gmail.com",
    rights: "Copy rights © 2023",
    creator: " Niraj Singh | MERN",
    title: "Creator :-",
  },
];
const headernav=[
  {
    id:1,
    icon:"fa fa-home",
    space:"/",
  }
]
export { navlinks, contactdetailposter, menu,headernav};
