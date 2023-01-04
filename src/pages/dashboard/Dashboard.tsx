import React from "react";
import { Progress } from "antd";
import useDashboard from "./DashboardVm";

import Statistics from "../../component/statistics/Statistics";

export default function Dashboard() {
  const {
    statstics,
    activeMilesType,
    milesData,
    handleActiveMilesType,
    activeCarType,
    handleActiveCarType,
    carData,
  } = useDashboard();

  return (
    <div className="space-y-8">
      {/* Top */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {statstics.map((_stats, _index) => (
          <div
            className={`flex flex-col items-center gap-y-7 bg-white rounded-xl py-6 transition-all duration-300 ease-in-out hover:opacity-50`}
          >
            <div className="flex flex-col items-center gap-y-3">
              <img
                src={_stats.img}
                alt="stats Icon"
                className="w-10 h-10 object-contain"
              />
              <p className="font-medium text-lg text-blackColor  md:text-2xl">
                {_stats.title}
              </p>
            </div>
            <Progress
              type="circle"
              percent={Math.trunc((_stats.perc / _stats.max) * 100)}
              gapDegree={100}
              strokeWidth={10}
              strokeColor={`${_stats.color}`}
              format={(perc, success) => (
                <p className="font-semibold">
                  {_stats.title === "Range" ? `${_stats.perc}k%` : `${perc}%`}
                </p>
              )}
            />
          </div>
        ))}
      </div>
      {/* Center */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
        {/* --- left */}
        <Statistics
          activeType={activeMilesType}
          type="miles"
          data={milesData}
          handleActiveMilesType={handleActiveMilesType}
          title="Miles"
        />
        {/* --- Right */}
        <Statistics
          activeType={activeCarType}
          type="car"
          data={carData}
          handleActiveMilesType={handleActiveCarType}
          title="Car"
        />
      </div>

      {/* Bottom */}
    </div>
  );
}
