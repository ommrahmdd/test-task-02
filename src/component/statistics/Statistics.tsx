import React from "react";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

let months = [
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

export function BarStatistics({
  activeType,
  data,
  title,
  handleActiveMilesType,
}: {
  activeType: string;
  data: any;
  title: string;
  handleActiveMilesType: (type: string) => void;
}) {
  return (
    <div className="bg-white rounded-lg py-5 px-8 space-y-5">
      {/* Title */}
      <p className="text-lg md:text-xl">
        <span className="font-semibold">{title}</span> Statistics
      </p>
      {/* Types */}
      <div className="flex flex-col items-center justify-between space-y-5 md:space-y-0 md:flex-row">
        {/* Collection of buttons */}
        <div className="space-x-3  flex flex-col lg:flex-row lg:items-center">
          {["day", "week", "month"].map((_type, index) => (
            <button
              className={`text-sm py-1 px-5 rounded-xl capitalize ${
                activeType === _type ? "bg-blueColor text-white" : null
              }`}
              onClick={() => handleActiveMilesType(_type)}
              key={index}
            >
              {_type}
            </button>
          ))}
        </div>
        {/* paragraph */}
        <p>256 Miles</p>
      </div>
      <div className="">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} width={150} height={50}>
            <XAxis dataKey="name" axisLine={false} />
            <Tooltip />
            <Bar dataKey="pv" fill="#2884FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function AreaStatistics({
  activeType,
  data,
  title,
  handleActiveMilesType,
}: {
  activeType: string;
  data: any;
  title: string;
  handleActiveMilesType: (type: string) => void;
}) {
  return (
    <div className="bg-white rounded-lg py-5 px-8 space-y-5">
      {/* Title */}
      <p className="text-lg md:text-xl">
        <span className="font-semibold">{title}</span> Statistics
      </p>
      {/* Types */}
      <div className="flex flex-col items-center justify-between space-y-5  md:space-y-0 md:flex-row">
        {/* Label */}
        <p className="space-x-1 font-medium text-blackColor">
          <span>{new Date().getDate()}</span>
          <span>{months[new Date().getMonth()]}</span>

          <span>{new Date().getFullYear()}</span>
        </p>

        {/* Collection of buttons */}
        <div className="space-x-3 bg-greyColor rounded-xl flex flex-col  lg:flex-row lg:items-center">
          {["day", "week", "month"].map((_type, index) => (
            <button
              className={`text-sm py-1 px-5 rounded-xl capitalize ${
                activeType === _type ? "bg-orangedDarkColor text-white" : null
              }`}
              onClick={() => handleActiveMilesType(_type)}
              key={index}
            >
              {_type}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} width={150} height={50}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF764C" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF764C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              fill="url(#colorUv)"
              fillOpacity={0.4}
              stroke="#FF764C"
              gradientTransform="#fff"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
