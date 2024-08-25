"use client";

import React from "react";
import UserDashboard from "./section/user.jsx";
import UserData from "./section/data.jsx";

const Page = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full bg-gradient-to-br from-white to-secondary-white">
      <div className="w-[48%]">
        <UserDashboard />
      </div>
      <div className="w-[52%] min-h-fit px-5">
        <UserData />
      </div>
    </div>
  );
};

export default Page;
