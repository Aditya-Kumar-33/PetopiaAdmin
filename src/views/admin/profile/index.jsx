import React, { useState } from "react";
import Banner from "./components/Banner";
import Editor from "./components/Editor";
import WeeklyRevenue from "./components/WeeklyRevenue";
import PieChartCard from "./components/PieChartCard";

const ProfileOverview = () => {
  // Shared state for profile data
  const [profileData, setProfileData] = useState({
    firstName: 'Aditya',
    lastName: 'Kumar',
    email: 'ak@gmail.com',
    phone: '+123-4567',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1506905925346-21bda5d32df4?w=800&h=200&fit=crop',
    posts: 17,
    users: '9.7K',
    providers: 434
  });
  const revenueData = {
    subscribers: 40,
    vets: 25,
    groomers: 15,
    trainers: 10,
    caretakers: 10
  };
  const revenueOptions = {
    labels: ["Subscribers", "Vets", "Groomers", "Trainers", "Pet Care Takers"],
    legend: { show: false },
  };
  // Function to update profile data
  const updateProfileData = (newData) => {
    setProfileData(prevData => ({
      ...prevData,
      ...newData
    }));
  };

  // Function to handle image uploads
  const handleImageUpload = (file, type) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateProfileData({ [type]: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-full mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Banner 
            profileData={profileData} 
            onImageUpload={handleImageUpload} 
          />
        </div>

        <div className="z-0 col-span-8 lg:!mb-0">
          <Editor 
            profileData={profileData} 
            onUpdateProfile={updateProfileData} 
          />
        </div>
      </div>

      {/* Weekly Revenue and Pie Chart with 60/40 split */}
      <div className="grid h-full grid-cols-1 gap-5 lg:grid-cols-5">
        <div className="col-span-1 lg:col-span-3 lg:mb-0">
          <WeeklyRevenue />
        </div>
        <div className="h-full col-span-1 lg:col-span-2 lg:mb-0">
          <PieChartCard data={revenueData} options={revenueOptions} />;
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;