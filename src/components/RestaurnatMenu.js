import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurnatMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams()
  console.log(resId)
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API+resId+'&catalog_qa=undefined&submitAction=ENTER');
      const json = await data.json();
      // console.log(json?.data.cards[0]?.card?.card?.info);
      console.log(json?.data);
      setResInfo(json.data);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(resInfo?.cards[0])
  if (resInfo === null) return <Shimmer />;

  const { name,cuisines, costForTwoMessage} = resInfo?.cards?.[0]?.card?.card?.info;
  const {itemCards} = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card

  console.log(itemCards)
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
