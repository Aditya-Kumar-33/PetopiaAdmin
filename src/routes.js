import React from "react";

// Admin Imports
import MainDashboard from "views/admin/users";
import Veterinaries from "views/admin/vets"; 
import ServiceProviders from "views/admin/petservices";
import Profile from "views/admin/profile";
import SettingPage from "views/admin/settingPage";
import BreedInfoEditor from "views/admin/settingPage/components/BreedInfoEditor";

// Provider Imports
import ProviderDashboard from "views/provider/dashboard";
import Schedule from "views/provider/schedule";
import History from "views/provider/schedule/components/History";
import ProviderProfile from "views/provider/profile";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icons
import {
  MdHome,
  MdOutlineMedicalServices,
  MdOutlinePets,
  MdPerson,
  MdSettings,
  MdOutlineSchedule
} from "react-icons/md";

// Array of route objects → each object defines one route
const routes = [
  // ----------------- ADMIN ROUTES -----------------
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
    name: "Settings",
    layout: "/admin",
    path: "settings",
    icon: <MdSettings className="h-6 w-6" />,
    component: <SettingPage />,
  },
  {
    name: "Breed Editor",
    layout: "/admin",
    path: "breed-info/:slug",
    icon: <MdSettings className="h-6 w-6" />,
    component: <BreedInfoEditor />,
    showInSidebar: false,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },

  // ----------------- PROVIDER ROUTES -----------------
  {
    name: "Dashboard",
    layout: "/provider",
    path: "dashboard",
    icon: <MdOutlinePets className="h-6 w-6" />,
    component: <ProviderDashboard />,
    showInSidebar: true,
    showInNavbar: true,
  },
  {
    name: "Schedule",
    layout: "/provider",
    path: "schedule",
    icon: <MdOutlineSchedule className="h-6 w-6" />,
    component: <Schedule />,
    showInSidebar: true,
    showInNavbar: true,
    // ✅ Children routes
    children: [
      {
        path: "history", // /provider/schedule/history
        component: <History />,
      },
    ],
  },
  {
    name: "Profile",
    layout: "/provider",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ProviderProfile />,
    showInSidebar: true,
    showInNavbar: true,
  },
];

export default routes;
