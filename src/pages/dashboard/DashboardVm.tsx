import React, { useState } from "react";
import energyIcon from "./../../assets/imgs/dashboard/energy.png";
import rangeIcon from "./../../assets/imgs/dashboard/range.png";
import fluidIcon from "./../../assets/imgs/dashboard/fluid.png";
import tireIcon from "./../../assets/imgs/dashboard/tire.png";
export default function useDashboard() {
  const statstics = [
    {
      title: "Energy",
      perc: 45,
      max: 100,
      img: energyIcon,
      color: "#A162F7",
      colorTxt: "purpleColor",
    },
    {
      title: "Range",
      perc: 157,
      max: 300,
      img: rangeIcon,
      color: "#FF7E86",
      colorTxt: "pinkColor",
    },
    {
      title: "Break fluid",
      perc: 9,
      max: 100,
      img: fluidIcon,
      color: "#A162F7",
      colorTxt: "purpleColor",
    },
    {
      title: "Tire Wire",
      perc: 25,
      max: 100,
      img: tireIcon,
      color: "#F6CC0D",
      colorTxt: "yellowColor",
    },
  ];
  const [activeMilesType, setActiveMilesType] = useState<string>("day");
  const [activeCarType, setActiveCarType] = useState<string>("day");
  let dayData = [
    {
      name: "1PM",
      uv: 4000,
      pv: 800,
      amt: 2400,
    },
    {
      name: "2PM",
      uv: 3000,
      pv: 900,
      amt: 2210,
    },
    {
      name: "3PM",
      uv: 2000,
      pv: 1000,
      amt: 2290,
    },
    {
      name: "4PM",
      uv: 2780,
      pv: 1200,
      amt: 2000,
    },
    {
      name: "5PM",
      uv: 1890,
      pv: 1950,
      amt: 2181,
    },
    {
      name: "6PM",
      uv: 2390,
      pv: 2100,
      amt: 2500,
    },
    {
      name: "7PM",
      uv: 3490,
      pv: 6000,
      amt: 2100,
    },
  ];
  let weekData = [
    {
      name: "Sat",
      uv: 4000,
      pv: 3500,
      amt: 2400,
    },
    {
      name: "Sun",
      uv: 3000,
      pv: 1900,
      amt: 2210,
    },
    {
      name: "Mon",
      uv: 2000,
      pv: 6000,
      amt: 2290,
    },
    {
      name: "Tus",
      uv: 2780,
      pv: 2000,
      amt: 2000,
    },
    {
      name: "Wen",
      uv: 1890,
      pv: 3500,
      amt: 2181,
    },
    {
      name: "Thu",
      uv: 2390,
      pv: 7800,
      amt: 2500,
    },
    {
      name: "Fri",
      uv: 3490,
      pv: 1500,
      amt: 2100,
    },
  ];
  let monthData = [
    {
      name: "Fab",
      uv: 4000,
      pv: 6000,
      amt: 2400,
    },
    {
      name: "Jan",
      uv: 3000,
      pv: 2500,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 4000,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 10000,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 1000,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3600,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4100,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 2200,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 500,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 3600,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 9000,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 1500,
      amt: 2100,
    },
  ];
  const [milesData, setMilesData] = useState(dayData);
  const [carData, setCarData] = useState(dayData);
  const handleActiveMilesType = (type: string) => {
    setActiveMilesType(type);
    if (type === "week") setMilesData(weekData);
    else if (type === "day") setMilesData(dayData);
    else setMilesData(monthData);
  };
  const handleActiveCarType = (type: string) => {
    setActiveCarType(type);
    if (type === "week") setCarData(weekData);
    else if (type === "day") setCarData(dayData);
    else setCarData(monthData);
  };

  return {
    statstics,
    activeMilesType,
    activeCarType,
    milesData,
    handleActiveMilesType,
    handleActiveCarType,
    carData,
  };
}