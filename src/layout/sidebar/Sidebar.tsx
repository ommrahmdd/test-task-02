import Menu from "antd/es/menu";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSidebar } from "./SidebarVm";
import logo from "./../../assets/imgs/sidebar/logo.png";

export default function Sidebar() {
  const { sidebarItems, collapse, handleCollapse, sidebarItemsBottom } =
    useSidebar();
  const navigate = useNavigate();
  return (
    <div className="flex items-start">
      {/* STYLE: Sidebar */}
      <div
        className={`py-2 px-2 sticky left-0 top-0 h-[100vh] flex flex-col items-center justify-start  ${
          collapse ? "w-auto" : "w-[10rem] md:w-[12rem] lg:w-[15rem]"
        } md:px-4`}
      >
        {/* Logo */}
        <div
          className={`flex items-center  w-full py-5 ${
            collapse ? "justify-center" : "justify-start space-x-2"
          }`}
        >
          <img
            src={logo}
            alt="logo"
            className="w-7 h-7 object-contain cursor-pointer transition-all duration-200 ease-in-out hover:opacity-60"
            onClick={handleCollapse}
          />
          {collapse || <p className="font-semibold text-xl ">Motiv.</p>}
        </div>
        {/* STYLE: Menus */}
        <div className="h-full w-full flex flex-col justify-between">
          {/* STYLE: Top Menu */}
          <Menu
            items={sidebarItems}
            inlineCollapsed={collapse}
            className="w-full"
            style={{
              borderRight: "none",
            }}
            onClick={({ key }) => {
              if (key.startsWith("/")) navigate(key);
            }}
          />
          {/* STYLE: Bottom Menu */}
          <Menu
            items={sidebarItemsBottom}
            inlineCollapsed={collapse}
            className="w-full"
            style={{
              borderRight: "none",
            }}
          />
        </div>
      </div>
      {/* STYLE: Outlet */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}
