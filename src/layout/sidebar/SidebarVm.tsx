import React, { useState } from "react";
import type { MenuProps } from "antd";
import img01 from "./../../assets/imgs/sidebar/dashboard.png";
import img02 from "./../../assets/imgs/sidebar/assets.png";
import img03 from "./../../assets/imgs/sidebar/booking.png";
import img04 from "./../../assets/imgs/sidebar/sell.png";
import img05 from "./../../assets/imgs/sidebar/buy.png";
import img06 from "./../../assets/imgs/sidebar/services.png";
import img07 from "./../../assets/imgs/sidebar/calender.png";
import img08 from "./../../assets/imgs/sidebar/messages.png";
import img09 from "./../../assets/imgs/sidebar/settings.png";
import img10 from "./../../assets/imgs/sidebar/logout.png";

export function useSidebar() {
  const [collapse, setCollapse] = useState<boolean>(true);
  type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      label,
      type,
    } as MenuItem;
  }

  const sidebarItems: MenuItem[] = [
    getItem(
      "Dashboard",
      "/",
      <img src={img01} alt="icon" className="w-4 h-4 object-contain" />
    ),
    getItem(
      "Assets",
      "2",
      <img src={img02} alt="icon" className="w-4 h-4 object-contain" />
    ),
    getItem(
      "Booking",
      "/booking",
      <img src={img03} alt="icon" className="w-4 h-4 object-contain" />
    ),
    getItem(
      "Sell Cars",
      "4",
      <img src={img04} alt="icon" className="w-4 h-4 object-contain" />
    ),
    getItem(
      "Buy Cars",
      "5",
      <img src={img05} alt="icon" className="w-4 h-4 object-contain" />
    ),
    getItem(
      "Services",
      "6",
      <img src={img06} alt="icon" className="w-4 h-4 object-contain" />
    ),
    getItem(
      "Calender",
      "7",
      <img src={img07} alt="icon" className="w-4 h-4 object-contain" />
    ),
    getItem(
      "Messages",
      "8",
      <img src={img08} alt="icon" className="w-4 h-4 object-contain" />
    ),
  ];

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  const sidebarItemsBottom: MenuItem[] = [
    getItem(
      "Setting",
      "9",
      <img src={img09} alt="icon" className="w-4 h-4 object-contain" />
    ),
    getItem(
      "Logout",
      "10",
      <img src={img10} alt="icon" className="w-4 h-4 object-contain" />
    ),
  ];
  return {
    sidebarItems,
    sidebarItemsBottom,
    collapse,
    handleCollapse,
  };
}
