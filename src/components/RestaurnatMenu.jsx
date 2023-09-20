import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurnatMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(null)

  //   console.log(resInfo?.cards[0])
  if (resInfo === null || !resInfo?.cards) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info;
  // console.log('resInfo',resInfo)
  // console.log(cuisines)
  const { itemCards } =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card;
  let categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cardItem) =>
        cardItem?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log({ categories });
  // console.log(resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const handleIndex =(index)=>{
    if(showIndex === index){
      setShowIndex(null)
    }else{
      setShowIndex(index)
    }

  }
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((categorie,index) => (
        <RestaurantCategory
          key={categorie?.card?.card?.title}
          data={categorie?.card?.card}
          showItems ={index === showIndex  ? true :false}
          setShowIndex={()=>{
            handleIndex(index)
          }}
        />
      ))}
    </div>
  );
};

export default RestaurnatMenu;
