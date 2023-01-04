import React from "react";
import { Progress } from "antd";
import useDashboard from "./DashboardVm";
import Statistics from "../../component/statistics/Statistics";
import recommendedImg from "./../../assets/imgs/dashboard/recommend.png";
import settingImg from "./../../assets/imgs/dashboard/setting.png";
import energyImg from "./../../assets/imgs/dashboard/small-energy.png";
import shareImg from "./../../assets/imgs/dashboard/share.png";

export default function Dashboard() {
  const {
    statstics,
    activeMilesType,
    milesData,
    handleActiveMilesType,
    activeCarType,
    handleActiveCarType,
    carData,
    recommended,
  } = useDashboard();

  return (
    <div className="space-y-8">
      {/* Top */}
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
              strokeWidth={11}
              strokeColor={`${_stats.color}`}
              format={(perc, success) => (
                <p className="font-semibold">
                  {_stats.title === "Range" ? `${_stats.perc}k%` : `${perc}%`}
                </p>
              )}
            />
          </div>
        ))}
      </section>
      {/* Center */}
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
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
      </section>
      {/* Bottom */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {recommended.map((recommend, index) => (
          <div
            className={`py-3 px-6 rounded-md space-y-3 ${
              index === 0
                ? "bg-tertiaryColor"
                : index === 1
                ? "bg-tertiarySecondaruColor"
                : "bg-tertiaryThirdColor"
            }`}
            key={index}
          >
            <div className="flex items-center gap-x-2">
              <img
                src={recommendedImg}
                alt="recommended"
                className="w-5 h-5 object-contain"
              />
              <p className="text-sm font-semibold text-blackColor">
                {recommend.perc}% Recommended
              </p>
            </div>
            <img
              src={recommend.img}
              alt="Car"
              className="h-32 w-full object-contain"
            />
            <p className="text-lg font-semibold text-blackColor md:text-xl ">
              {recommend.title}
            </p>
            <div className="flex items-center justify-between text-blackColor text-opacity-60 font-semibold">
              <div className="flex items-center space-x-3">
                <img src={shareImg} alt="share" className="w-4 h-4" />
                <span>{recommend.share}K</span>
                <img src={settingImg} alt="setting" className="w-4 h-4" />
                <img src={energyImg} alt="Energy" className="w-4 h-4" />
              </div>
              <p>${recommend.perc}/hr</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
