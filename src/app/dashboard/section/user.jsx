"use client";

import React from "react";
import Image from "next/image";

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-end justify-center p-16">
      <div className="w-48 h-48flex items-center justify-center mb-4">
        <Image
          src="/static/Ghostblade.png"
          alt="pfp"
          height="260"
          width="200"
        ></Image>
      </div>
      <div className="text-center">
        <div className="text-4xl font-extrabold text-primary-dark">
          <span className="text-teal-secondary">Ghostblade</span>
        </div>
        <div className="text-2xl font-bold text-absolute-white">
          <span className="text-teal-secondary">Special Agent</span>
        </div>
        <div className="text-2xl font-bold text-absolute-white">
          <span className="text-teal-secondary">Class A Clearance</span>
        </div>
        <div className="text-primary-dark text-xl font-semibold">
          Status:{" "}
          <span className="text-red-600 font-semibold">Presumed MIA</span>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
