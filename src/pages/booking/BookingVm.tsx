import React, { useState } from "react";
import car01 from "./../../assets/imgs/booking/car01.png";
import car02 from "./../../assets/imgs/booking/car02.png";
import car03 from "./../../assets/imgs/booking/car03.png";
import car04 from "./../../assets/imgs/booking/car04.png";
import car05 from "./../../assets/imgs/booking/car05.png";
import car06 from "./../../assets/imgs/booking/car06.png";
import car07 from "./../../assets/imgs/booking/car07.png";
import car08 from "./../../assets/imgs/booking/car08.png";
import car09 from "./../../assets/imgs/booking/car09.png";

export default function useBooking() {
  const [grid, setGrid] = useState<boolean>(true);
  const data = [
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      price: 400,
      img: car01,
      people: 4,
      manual: true,
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      price: 400,
      img: car02,
      people: 4,
      manual: true,
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      price: 400,
      img: car03,
      people: 4,
      manual: true,
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      price: 400,
      img: car04,
      people: 4,
      manual: true,
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      price: 400,
      img: car05,
      people: 4,
      manual: true,
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      price: 400,
      img: car06,
      people: 4,
      manual: true,
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      price: 400,
      img: car07,
      people: 4,
      manual: true,
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      price: 400,
      img: car08,
      people: 4,
      manual: true,
    },
    {
      name: "Porshe 718 Cayman S",
      type: "Coupe",
      price: 400,
      img: car09,
      people: 4,
      manual: true,
    },
  ];
  const handleMultiCol = () => {
    setGrid(true);
  };
  const handleSingleiCol = () => {
    setGrid(false);
  };
  return {
    data,
    grid,
    handleMultiCol,
    handleSingleiCol,
  };
}
