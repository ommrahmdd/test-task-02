import React, { useState } from "react";

export function useStatistics() {
  const [activeBarItem, setActiveBarItem] = useState<number>(0);
  const handleActiveBarItem = (data: any, index: number) => {
    setActiveBarItem(index);
  };
  function kFormatter(num: number) {
    return Math.abs(num) > 999
      ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1) as any) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  return { activeBarItem, handleActiveBarItem, kFormatter };
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
