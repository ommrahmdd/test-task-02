import { Input } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import searchImg from "./../../assets/imgs/nav/search.png";
import alertImg from "./../../assets/imgs/nav/notif.png";
import userImg from "./../../assets/imgs/nav/profile.png";

export default function Nav() {
  return (
    <main className="w-full">
      {/* STYLE: Start Nav */}
      <nav className="py-4 px-5 flex flex-col  md:flex-row md:items-center md:justify-between ">
        {/* Search */}
        <div className="order-2 relative flex items-center bg-greyColor rounded-xl overflow-hidden md:order-1">
          <img
            src={searchImg}
            alt="search Icon"
            className="w-4 h-4 absolute left-3"
          />
          <input
            type="text"
            className="bg-greyColor px-10 py-2 rounded-xl  caret-orangedColor  outline-none lg:min-w-[25rem]"
            placeholder="Search on type"
          />
        </div>
        {/* User */}
        <div className="order-1 self-end flex items-center gap-x-6 mb-5 md:mb-0 md:self-auto md:order-2">
          <img
            src={alertImg}
            alt="Notification Icon"
            className="w-5 h-5 object-contain cursor-pointer "
          />
          <img
            src={userImg}
            alt="User Icon"
            className="w-5 h-5 object-contain cursor-pointer md:w-8 md:h-8"
          />
        </div>
      </nav>
      {/* ---------------- End Nav */}
      <div className="w-full min-h-[92vh] bg-greyColor p-8">
        <Outlet />
      </div>
    </main>
  );
}
