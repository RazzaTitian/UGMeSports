"use client";

import React from "react";

const UserData = () => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center p-16 text-pretty text-justify max-w-prose">
      <div className="gap-4">
        <div className="text-4xl font-extrabold text-primary-dark">
          <span className="text-teal-secondary">Biodata</span>
        </div>
        <div className="text-xl font-bold text-absolute-white">
          <span className="text-teal-secondary">
            A Harvard University graduate, former Central Intelligence Agency -
            Special Activities Division (CIA-SAD) member and captain of the
            Indonesian Police&apos;s Special Detachment 88, Ghostblade&apos;s
            life is ever shrouded in secrecy. Went MIA in Sudan, his body was
            never recovered and he is legally dead as of 2023. Multiple
            achievements over a series of deployment.
          </span>
        </div>
        <div className="text-2xl font-bold text-absolute-white pt-4">
          <span className="text-teal-secondary">Harvard University</span>
        </div>
      </div>
    </div>
  );
};

export default UserData;
