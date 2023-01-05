import { Select } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import useBooking from "./BookingVm";

// Imgs
import selectIcon from "./../../assets/imgs/booking/arrow-down.png";
import gridIcon from "./../../assets/imgs/booking/grid.png";
import settingIcon from "./../../assets/imgs/booking/setting.png";
import manualIcon from "./../../assets/imgs/booking/manual.png";
import usersIcon from "./../../assets/imgs/booking/users.png";
// Css
import "./booking.css";
import { FilledHeart, Heart } from "../../component/icons/Hearts";

export default function Booking() {
  const {
    data,
    grid,
    handleMultiCol,
    handleSingleiCol,
    handleProductLike,
    likesProducts,
  } = useBooking();
  return (
    <div className="space-y-5">
      {/*STYLE: title */}
      <h3 className=" text-lg font-medium text-blackColor md:text-2xl lg:text-3xl">
        Booking
      </h3>
      {/*STYLE: Options */}
      <div className="flex flex-col items-start space-y-2 md:space-y-0 md:items-center md:justify-between md:flex-row">
        {/* Selectors */}
        <div className="booking__selector space-y-2 flex flex-col items-start md:flex-row md:space-x-5 md:space-y-0 md:items-center">
          <Select
            defaultValue={"new"}
            className="capitalize "
            size="middle"
            suffixIcon={
              <img
                src={selectIcon}
                alt="arrow icon"
                className="w-3 h-3 object-contain"
              />
            }
          />
          <Select
            defaultValue={"toyota"}
            className="capitalize "
            size="middle"
            suffixIcon={
              <img
                src={selectIcon}
                alt="arrow icon"
                className="w-3 h-3 object-contain"
              />
            }
          />
        </div>
        {/* list */}
        <div className="flex items-center space-x-3 self-end md:self-auto">
          <button
            className={`booking__svg bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:shadow-none ${
              grid && "activeSVG"
            }`}
            onClick={handleMultiCol}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="booking__svg-1"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5 15C17.0478 15 16.4089 15.0625 15.7438 15.1536C15.4331 15.1962 15.1962 15.4331 15.1536 15.7438C15.0625 16.4089 15 17.0478 15 17.5C15 17.9522 15.0625 18.5911 15.1536 19.2562C15.1962 19.5669 15.4331 19.8038 15.7438 19.8464C16.4089 19.9375 17.0478 20 17.5 20C17.9522 20 18.5911 19.9375 19.2562 19.8464C19.5669 19.8038 19.8038 19.5669 19.8464 19.2562C19.9375 18.5911 20 17.9522 20 17.5C20 17.0478 19.9375 16.4089 19.8464 15.7438C19.8038 15.4331 19.5669 15.1962 19.2562 15.1536C18.5911 15.0625 17.9522 15 17.5 15ZM15.4724 13.1721C14.2725 13.3364 13.3364 14.2725 13.1721 15.4724C13.0778 16.1606 13 16.9082 13 17.5C13 18.0918 13.0778 18.8394 13.1721 19.5276C13.3364 20.7275 14.2725 21.6636 15.4724 21.8279C16.1606 21.9222 16.9082 22 17.5 22C18.0918 22 18.8394 21.9222 19.5276 21.8279C20.7275 21.6636 21.6636 20.7275 21.8279 19.5276C21.9222 18.8394 22 18.0918 22 17.5C22 16.9082 21.9222 16.1606 21.8279 15.4724C21.6636 14.2725 20.7275 13.3364 19.5276 13.1721C18.8394 13.0778 18.0918 13 17.5 13C16.9082 13 16.1606 13.0778 15.4724 13.1721Z"
                fill="#777E91"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 15C6.04782 15 5.40893 15.0625 4.74381 15.1536C4.43308 15.1962 4.19615 15.4331 4.15359 15.7438C4.0625 16.4089 4 17.0478 4 17.5C4 17.9522 4.0625 18.5911 4.15359 19.2562C4.19615 19.5669 4.43308 19.8038 4.74381 19.8464C5.40893 19.9375 6.04782 20 6.5 20C6.95218 20 7.59107 19.9375 8.25619 19.8464C8.56692 19.8038 8.80385 19.5669 8.84641 19.2562C8.9375 18.5911 9 17.9522 9 17.5C9 17.0478 8.9375 16.4089 8.84641 15.7438C8.80385 15.4331 8.56692 15.1962 8.25619 15.1536C7.59107 15.0625 6.95218 15 6.5 15ZM4.47244 13.1721C3.27253 13.3364 2.33642 14.2725 2.17209 15.4724C2.07784 16.1606 2 16.9082 2 17.5C2 18.0918 2.07784 18.8394 2.17209 19.5276C2.33642 20.7275 3.27253 21.6636 4.47244 21.8279C5.16065 21.9222 5.90816 22 6.5 22C7.09184 22 7.83935 21.9222 8.52756 21.8279C9.72747 21.6636 10.6636 20.7275 10.8279 19.5276C10.9222 18.8394 11 18.0918 11 17.5C11 16.9082 10.9222 16.1606 10.8279 15.4724C10.6636 14.2725 9.72747 13.3364 8.52756 13.1721C7.83935 13.0778 7.09184 13 6.5 13C5.90816 13 5.16065 13.0778 4.47244 13.1721Z"
                fill="#777E91"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5 4C17.0478 4 16.4089 4.0625 15.7438 4.15359C15.4331 4.19615 15.1962 4.43308 15.1536 4.74381C15.0625 5.40893 15 6.04782 15 6.5C15 6.95218 15.0625 7.59107 15.1536 8.25619C15.1962 8.56692 15.4331 8.80385 15.7438 8.84641C16.4089 8.9375 17.0478 9 17.5 9C17.9522 9 18.5911 8.9375 19.2562 8.84641C19.5669 8.80385 19.8038 8.56692 19.8464 8.25619C19.9375 7.59107 20 6.95218 20 6.5C20 6.04782 19.9375 5.40893 19.8464 4.74381C19.8038 4.43308 19.5669 4.19615 19.2562 4.15359C18.5911 4.0625 17.9522 4 17.5 4ZM15.4724 2.17209C14.2725 2.33642 13.3364 3.27253 13.1721 4.47244C13.0778 5.16065 13 5.90816 13 6.5C13 7.09184 13.0778 7.83935 13.1721 8.52756C13.3364 9.72747 14.2725 10.6636 15.4724 10.8279C16.1606 10.9222 16.9082 11 17.5 11C18.0918 11 18.8394 10.9222 19.5276 10.8279C20.7275 10.6636 21.6636 9.72747 21.8279 8.52756C21.9222 7.83935 22 7.09184 22 6.5C22 5.90816 21.9222 5.16065 21.8279 4.47244C21.6636 3.27253 20.7275 2.33642 19.5276 2.17209C18.8394 2.07784 18.0918 2 17.5 2C16.9082 2 16.1606 2.07784 15.4724 2.17209Z"
                fill="#777E91"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 4C6.04782 4 5.40893 4.0625 4.74381 4.15359C4.43308 4.19615 4.19615 4.43308 4.15359 4.74381C4.0625 5.40893 4 6.04782 4 6.5C4 6.95218 4.0625 7.59107 4.15359 8.25619C4.19615 8.56692 4.43308 8.80385 4.74381 8.84641C5.40893 8.9375 6.04782 9 6.5 9C6.95218 9 7.59107 8.9375 8.25619 8.84641C8.56692 8.80385 8.80385 8.56692 8.84641 8.25619C8.9375 7.59107 9 6.95218 9 6.5C9 6.04782 8.9375 5.40893 8.84641 4.74381C8.80385 4.43308 8.56692 4.19615 8.25619 4.15359C7.59107 4.0625 6.95218 4 6.5 4ZM4.47244 2.17209C3.27253 2.33642 2.33642 3.27253 2.17209 4.47244C2.07784 5.16065 2 5.90816 2 6.5C2 7.09184 2.07784 7.83935 2.17209 8.52756C2.33642 9.72747 3.27253 10.6636 4.47244 10.8279C5.16065 10.9222 5.90816 11 6.5 11C7.09184 11 7.83935 10.9222 8.52756 10.8279C9.72747 10.6636 10.6636 9.72747 10.8279 8.52756C10.9222 7.83935 11 7.09184 11 6.5C11 5.90816 10.9222 5.16065 10.8279 4.47244C10.6636 3.27253 9.72747 2.33642 8.52756 2.17209C7.83935 2.07784 7.09184 2 6.5 2C5.90816 2 5.16065 2.07784 4.47244 2.17209Z"
                fill="#777E91"
              />
            </svg>
          </button>
          <button
            className={`booking__svg bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:shadow-none ${
              !grid && "activeSVG"
            }`}
            onClick={handleSingleiCol}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="booking__svg-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 16C1.44772 16 1 16.4477 1 17C1 17.5523 1.44772 18 2 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H2ZM19 16C18.4477 16 18 16.4477 18 17C18 17.5523 18.4477 18 19 18H22C22.5523 18 23 17.5523 23 17C23 16.4477 22.5523 16 22 16H19Z"
                fill="#777E91"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19ZM16 21C18.2091 21 20 19.2091 20 17C20 14.7909 18.2091 13 16 13C13.7909 13 12 14.7909 12 17C12 19.2091 13.7909 21 16 21Z"
                fill="#777E91"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 6C1.44772 6 1 6.44772 1 7C1 7.55228 1.44772 8 2 8H5C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6H2ZM11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8H22C22.5523 8 23 7.55228 23 7C23 6.44772 22.5523 6 22 6H11Z"
                fill="#777E91"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9ZM8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11Z"
                fill="#777E91"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*STYLE: Grid */}
      <div
        className={`grid gap-8 grid-cols-1  ${
          grid && "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {data.map((item, index) => (
          <div
            className="bg-white py-4 px-6 rounded-lg space-y-4 transition-all duration-300 ease-in-out hover:shadow-lg"
            key={index}
          >
            {/* text */}
            <div className="flex items-center justify-between">
              <div className="">
                <h4 className="text-sm font-semibold text-blackColor md:text-lg">
                  {item.name}
                </h4>
                <p className="text-xs font-medium text-blackColor text-opacity-50">
                  {item.type}
                </p>
              </div>
              <button onClick={() => handleProductLike(index)}>
                {likesProducts.indexOf(index) === -1 ? (
                  <Heart />
                ) : (
                  <FilledHeart />
                )}
              </button>
            </div>
            {/* img */}
            <div
              className={`w-full ${
                !grid && "md:flex items-center justify-center"
              }`}
            >
              <LazyLoadImage
                src={item.img}
                alt="car"
                className={`w-full h-32 object-contain ${
                  !grid && "md:h-44  lg:h-56"
                }`}
                effect="blur"
              />
            </div>
            {/* icons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={usersIcon}
                    alt="users icon"
                    className="w-4 h-4 object-contain"
                  />
                  <span>{item.people}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src={manualIcon}
                    alt="manual icon"
                    className="w-4 h-4 object-contain"
                  />
                  <span>{item.manual && "Manual"}</span>
                </div>
              </div>
              <div className="">${item.price}/d</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
