import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurnatMenu = () => {
  const {resId} = useParams()
  const resInfo = useRestaurantMenu(resId)


  //   console.log(resInfo?.cards[0])
  if (resInfo === null || !resInfo?.cards) return <Shimmer />;

  const { name,cuisines, costForTwoMessage} = resInfo?.cards?.[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card

  // console.log(itemCards)
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>

      <ul>
        { itemCards && itemCards.map((item)=> <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurnatMenu;
