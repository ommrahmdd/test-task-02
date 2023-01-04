import React from "react";
import { Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <main className="w-full">
      {/* STYLE: Start Nav */}
      <nav className="py-4 px-5 flex items-center justify-between">
        {/* Search */}
        <div className="">Search</div>
        {/* User */}
        <div className="">User</div>
      </nav>
      {/* ---------------- End Nav */}
      <div className="w-full min-h-[92vh] bg-greyColor p-5">
        <Outlet />
      </div>
    </main>
  );
}
