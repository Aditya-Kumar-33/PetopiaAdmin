import React from "react";

// Admin Imports
import MainDashboard from "views/admin/users";
import Veterinaries from "views/admin/providers"; 
import Profile from "views/admin/profile";
import SettingPage from "views/admin/settingPage";
import BreedInfoEditor from "views/admin/settingPage/components/BreedInfoEditor";
import UserProfile from "views/admin/users/UserProfile"; 
import ProviderProfile from "views/admin/providers/ProviderProfile";

// Provider Imports
import ProviderDashboard from "views/provider/dashboard";
import Schedule from "views/provider/schedule";
import History from "views/provider/schedule/components/History";

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
    path: "user-dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "User Profile",
    layout: "/admin",
    path: "user-dashboard/:userId",
    icon: <MdPerson className="h-6 w-6" />,
    component: <UserProfile />,
    showInSidebar: false,   // completely hides it from menu
  },
  {
    name: "Providers",
    layout: "/admin",
    path: "provider-dashboard",
    icon: <MdSettings className="h-6 w-6" />,
    component: <Veterinaries />,
    secondary: true,
  },
    {
    name: "Provider Profile",
    layout: "/admin",
    path: "provider-dashboard/:Id",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ProviderProfile />,
    showInSidebar: false,   // completely hides it from menu
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "manage-pet",
    icon: <MdPerson className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Manage Breeds",
    layout: "/admin",
    path: "manage-breeds",
    icon: <MdOutlinePets className="h-6 w-6" />,
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
