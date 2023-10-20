const navlinks = [
  {
    id: 0,
    icon: "fa fa-home",
    toggle: "fa fa-angle-down",
    title: "Dashboard",
    collapseid: "item_1",
    collapseitem: [
      {
        id: 0,
        item: "Vertical",
      },
      {
        id: 1,
        item: "Vertical Rtl",
      },
      {
        id: 2,
        item: "Horizontal",
      },
    ],
  },
  {
    id: 1,
    icon: "fa fa-wheelchair",
    title: "Patient",
    toggle: "fa fa-angle-down",
    collapseid: "item_2",
    collapseitem: [
      {
        id: 0,
        item: "Add Patient",
      },
      {
        id: 1,
        item: "All Patient",
      },
      {
        id: 2,
        item: "Patient Details",
      },
      {
        id: 3,
        item: "Edit Patient",
      },
    ],
  },
  {
    id: 2,
    icon: "fa fa-user",
    toggle: "fa fa-angle-down",
    title: "Doctors",
    collapseid: "item_3",
    collapseitem: [
      {
        id: 0,
        item: "Add Doctor",
      },
      {
        id: 1,
        item: "All Doctors",
      },
      {
        id: 2,
        item: "Doctor Details",
      },
      {
        id: 3,
        item: "Edit Doctor",
      },
    ],
  },
  {
    id: 3,
    icon: "fa fa-edit",
    title: "Appointments",
    toggle: "fa fa-angle-down",
    collapseid: "item_4",
    collapseitem: [
      {
        id: 0,
        item: "Add Appointment",
      },
      {
        id: 1,
        item: "All Appointments",
      },
      {
        id: 2,
        item: "Appointment Details",
      },
      {
        id: 3,
        item: "Edit Appointment",
      },
    ],
  },
  {
    id: 4,
    icon: "fa fa-dollar",
    title: "Payments",
    toggle: "fa fa-angle-down",
    collapseid: "item_5",
    collapseitem: [
      {
        id: 0,
        item: "Add Payment",
      },
      {
        id: 1,
        item: "All Payments",
      },
      {
        id: 2,
        item: "Payment Invoice",
      },
    ],
  },
  {
    id: 5,
    icon: "fa fa-key",
    toggle: "fa fa-angle-down",
    title: "Room Allotments",
    collapseid: "item_6",
    collapseitem: [
      {
        id: 0,
        item: "Add Room Allotment",
      },
      {
        id: 1,
        item: "All Rooms",
      },
      {
        id: 2,
        item: "Edit Room Allotment",
      },
    ],
  },
  {
    id: 6,
    icon: "fa fa-files-o",
    title: "UI KIT",
    toggle: "fa fa-angle-down",
    collapseid: "item_7",
    collapseitem: [
      {
        id: 0,
        item: "Typography",
      },
      {
        id: 2,
        item: "Buttons",
      },
      {
        id: 3,
        item: "Cards",
      },
      {
        id: 4,
        item: "Tabs",
      },
      {
        id: 5,
        item: "Accordions",
      },
      {
        id: 6,
        item: "Modals",
      },
      {
        id: 7,
        item: "List & Media Object",
      },
      {
        id: 8,
        item: "Grid",
      },
      {
        id: 9,
        item: "Progress Bars",
      },
      {
        id: 10,
        item: "Notification & Alerts",
      },
      {
        id: 11,
        item: "Pagination",
      },
      {
        id: 12,
        item: "Carousel",
      },
    ],
  },
  {
    id: 7,
    icon: "fa fa-bars",
    title: "Tables",
    toggle: null,
    collapseid: "item_8",
    collapseitem: [
      {
        id: 0,
        item: null,
      },
    ],
  },
  {
    id: 8,
    icon: "fa fa-pie-chart",
    toggle: "fa fa-angle-down",
    title: "Charts",
    collapseid: "item_9",
    collapseitem: [
      {
        id: 0,
        item: "Morris",
      },
      {
        id: 1,
        item: "Flot",
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
      },
      {
        id: 1,
        item: "Vector Maps",
      },
    ],
  },
  {
    id: 10,
    icon: "fa fa-minus-square-o",
    toggle: null,
    title: "Forms",
    collapseid: "item_11",
    collapseitem: [
      {
        id: 0,
        item: null,
      },
    ],
  },
  {
    id: 11,
    icon: "fa fa-book",
    title: "Icons",
    toggle: "fa fa-angle-down",
    collapseid: "item_12",
    collapseitem: [
      {
        id: 0,
        item: "Font Awesome",
      },
      {
        id: 1,
        item: "Themify",
      },
    ],
  },
  {
    id: 12,
    icon: "fa fa-folder",
    toggle: "fa fa-angle-down",
    title: "Other Pages",
    collapseid: "item_13",
    collapseitem: [
      {
        id: 0,
        item: "Login",
      },
      {
        id: 1,
        item: "404",
      },
      {
        id: 2,
        item: "Blank Page",
      },
      {
        id: 3,
        item: "Pricing",
      },
      {
        id: 4,
        item: "FAQ",
      },
      {
        id: 5,
        item: "Invoice",
      },
    ],
  },
];
const menu = [
  {
    menu_icon: "fa fa-bars",
    color:"bg-black text-white",
    zoom_icon: "material-icons",
    search_icon: "fa fa-search",
    Notification_icon: "fa fa-bell",
    user_icon: "fa fa-user",
  }
];
const contactdetailposter = [
  {
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
    icon:"fa fa-home",
    space:"/",
  }
]
export { navlinks, contactdetailposter, menu,headernav};
