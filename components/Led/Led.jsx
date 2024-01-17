import React from "react";
import img1 from "/src/assets/Images/smartTv.jpg"
import img2 from "/src/assets/Images/TCL SMART TV.jpg"
import img3 from "/src/assets/Images/SAMSUNG CRYSTAL ULED.jpg"
import img4 from "/src/assets/Images/SAMSUNG LED TV.jpg"
import img5 from "/src/assets/Images/QLED.jpg"
import img6 from "../../assets/Images/QLED 55Inch.jpg"

import Cards from "../Cards/Cards";
import Heading from "../Heading/Header";
export const Led = ({ data, setData, clicked, setClicked }) => {
  const arr = [
    {
      url: img1,
      title: "Smart TV with fully Amoled Display with touch",
      price: "1,600",
      oldPrice: "2,099",
      percentage: "50%",
      dayLeft: "Only 1 days left",
    },
    {
      url: img2,
      title: "TCL SMART TV 40'Inch TV with Google Assistant",
      price: "1,972",
      oldPrice: "3,999",
      percentage: "30% off",
      dayLeft: "Only 3 days left",
    },
    {
      url: img3,
      title: "SAMSUNG CRYSTAL ULED 75'Inch TV",
      price: "1.990",
      oldPrice: "2.200",
      percentage: "78% off",
      dayLeft: "Only 3 days left",
    },
    {
      url: img4,
      title: "SAMSUNG LED TV 55'Inch SMART TV",
      price: "1,154",
      oldPrice: "1,999",
      percentage: "5% off",
      dayLeft:"Only 3 days left"
    },
    {
      url: img5,
      title: "TOSHIBA LED WITH ULTRA SMART ",
      price: "3,924",
      oldPrice: "4,099",
      percentage: "10% off",
      dayLeft:"Only 3 days left"
    },
    {
      url: img6,
      title: "SONY QLED 55'Inch HD screen Android 11   ",
      price: "1,9013",
      oldPrice: "2,105",
      percentage: "20% off",
      dayLeft:"Only 3 days left"
    },
  ];
  return (
    <div>
      <Heading title="LEDS Collection" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        {arr.map((item, index) => {
          return (
            <Cards
              key={index}
              item={item}
              data={data}
              setData={setData}
              clicked={clicked}
              setClicked={setClicked}
            />
          );
        })}
      </div>
    </div>
  );
};
