import React, { useEffect, useState } from "react";

const useResturantDetails = () => {
  const [filteredRestaurantList, SetFilteredRestaurantList] = useState([]);

  const [restaurantList, setRestautrantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(
      //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      // );
      setRestautrantList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      SetFilteredRestaurantList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("resturan detials", restaurantList);
  
  const handlefilterList = () => {
    if (!restaurantList) return restaurantList;
    let filterResturant = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    SetFilteredRestaurantList(filterResturant);
  };

  return { restaurantList, filteredRestaurantList, handlefilterList };
};

export default useResturantDetails;
