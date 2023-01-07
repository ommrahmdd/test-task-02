import React, { useState } from "react";
// import energyIcon from "./../../assets/imgs/dashboard/energy.png";
// import rangeIcon from "./../../assets/imgs/dashboard/range.png";
// import fluidIcon from "./../../assets/imgs/dashboard/fluid.png";
// import tireIcon from "./../../assets/imgs/dashboard/tire.png";
import car01 from "./../../assets/imgs/dashboard/car01.png";
import car02 from "./../../assets/imgs/dashboard/car02.png";
import car03 from "./../../assets/imgs/dashboard/car03.png";
import Energy from "../../component/icons/Energy";
import Range from "../../component/icons/Range";
import Fluid from "../../component/icons/Fluid";
import Tire from "../../component/icons/Tire";

export default function useDashboard() {
  const statstics = [
    {
      title: "Energy",
      perc: 45,
      max: 100,
      color: "#A162F7",
      colorTxt: "purpleColor",
      icon: <Energy />,
    },
    {
      title: "Range",
      perc: 157,
      max: 300,
      color: "#FF7E86",
      colorTxt: "pinkColor",
      icon: <Range />,
    },
    {
      title: "Break fluid",
      perc: 9,
      max: 100,
      color: "#70CF97",
      colorTxt: "purpleColor",
      icon: <Fluid />,
    },
    {
      title: "Tire Wire",
      perc: 25,
      max: 100,
      color: "#F6CC0D",
      colorTxt: "yellowColor",
      icon: <Tire />,
    },
  ];
  const [activeMilesType, setActiveMilesType] = useState<string>("day");
  const [activeCarType, setActiveCarType] = useState<string>("month");
  let dayData = [
    {
      name: "1 PM",

      pv: 800,
    },
    {
      name: "2 PM",

      pv: 900,
    },
    {
      name: "3 PM",

      pv: 1000,
    },
    {
      name: "4 PM",

      pv: 1200,
    },
    {
      name: "5 PM",

      pv: 1950,
    },
    {
      name: "6 PM",

      pv: 2100,
    },
    {
      name: "7 PM",

      pv: 6000,
    },
  ];
  let weekData = [
    {
      name: "Sat",

      pv: 3500,
    },
    {
      name: "Sun",

      pv: 1900,
    },
    {
      name: "Mon",

      pv: 6000,
    },
    {
      name: "Tus",

      pv: 2000,
    },
    {
      name: "Wen",

      pv: 3500,
    },
    {
      name: "Thu",

      pv: 7800,
    },
    {
      name: "Fri",

      pv: 1500,
    },
  ];
  let monthData = [
    {
      name: "Fab",

      pv: 6000,
    },
    {
      name: "Jan",

      pv: 2500,
    },
    {
      name: "Mar",

      pv: 4000,
    },
    {
      name: "Apr",

      pv: 10000,
    },
    {
      name: "May",

      pv: 1000,
    },
    {
      name: "Jun",

      pv: 3600,
    },
    {
      name: "Jul",

      pv: 4100,
    },
    {
      name: "Aug",

      pv: 2200,
    },
    {
      name: "Sep",

      pv: 500,
    },
    {
      name: "Oct",

      pv: 3600,
    },
    {
      name: "Nov",

      pv: 9000,
    },
    {
      name: "Dec",

      pv: 1500,
    },
  ];
  let dayData_carStats = [
    {
      name: "7 am",
      pv: 100,
    },
    {
      name: "9 am",
      pv: 300,
    },
    {
      name: "11 am",
      pv: 500,
    },
    {
      name: "1 pm",
      pv: 400,
    },
    {
      name: "3 pm",
      pv: 300,
    },
    {
      name: "5 pm",
      pv: 325,
    },
    {
      name: "7 pm",
      pv: 430,
    },
    {
      name: "9 pm",
      pv: 500,
    },
  ];
  const [milesData, setMilesData] = useState(dayData);
  const [carData, setCarData] = useState(monthData);
  const handleActiveMilesType = (type: string) => {
    setActiveMilesType(type);
    if (type === "week") setMilesData(weekData);
    else if (type === "day") setMilesData(dayData);
    else setMilesData(monthData);
  };
  const handleActiveCarType = (type: string) => {
    setActiveCarType(type);
    if (type === "week") setCarData(weekData);
    else if (type === "day") setCarData(dayData_carStats);
    else setCarData(monthData);
  };
  // Recommended component
  const recommended = [
    {
      perc: 63,
      title: "Mini Coper",
      share: 132,
      priceHour: 32,
      img: car01,
    },
    {
      perc: 74,
      title: "Porsche 911 Carrera",
      share: 130,
      priceHour: 28,
      img: car02,
    },
    {
      perc: 74,
      title: "Porsche 911 Carrera",
      share: 130,
      priceHour: 32,
      img: car03,
    },
  ];
  return {
    statstics,
    activeMilesType,
    activeCarType,
    milesData,
    handleActiveMilesType,
    handleActiveCarType,
    carData,
    recommended,
  };
}
