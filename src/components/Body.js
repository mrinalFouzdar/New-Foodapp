import { useEffect, useState } from "react";
// import resData from "../utils/dummyData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const listOfRestaurants = [
  {
    data: {
      id: "334475",
      name: "KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
    },
  },
  {
    data: {
      id: "334476",
      name: "Dominos",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "4.5",
    },
  },
  {
    data: {
      id: "334478",
      name: "MCD",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "4.1",
    },
  },
];
const Body = () => {
  const [restaurantList, setRestautrantList] = useState([]);
  const [filteredRestaurantList, SetFilteredRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  console.log("data");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(
        json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
      );
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
  const handlefilterList = () => {
    let filterResturant = listOfRestaurants.filter(
      (restaurant) => restaurant.data.avgRating > 4
    );
    setRestautrantList(filterResturant);
  };

  if (filteredRestaurantList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              const filtaredList = restaurantList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filtaredList);
              SetFilteredRestaurantList(filtaredList);
            }}
          >
            Search
          </button>
        </div>

        <button className="filter-btn" onClick={handlefilterList}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList &&
          filteredRestaurantList.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
