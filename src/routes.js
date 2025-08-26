import React from "react";

// Admin Imports
import MainDashboard from "views/admin/users";
import Veterinaries from "views/admin/vets"; // renamed for clarity
import ServiceProviders from "views/admin/petservices";
import Profile from "views/admin/profile";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineMedicalServices,
  MdOutlinePets,
  MdPerson,
  MdSettings,
} from "react-icons/md";


const routes = [
  {
    name: "Users",
    layout: "/admin",
    path: "users",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Veterinaries",
    layout: "/admin",
    path: "veterinaries",
    icon: <MdOutlineMedicalServices className="h-6 w-6" />,
    component: <Veterinaries />,
    secondary: true,
  },
  {
    name: "Pet Services",
    layout: "/admin",
    path: "pet-services",
    icon: <MdOutlinePets className="h-6 w-6" />,
    component: <ServiceProviders />,
  },
  {
    name: "Settings",
    layout: "/auth",
    path: "settings",
    icon: <MdSettings className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
];

export default routes;
