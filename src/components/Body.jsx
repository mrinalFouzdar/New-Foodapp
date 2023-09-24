import { useContext, useEffect, useState } from "react";
// import resData from "../utils/dummyData";
import { RestaurantCard, withDiscountedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import useResturantDetails from "../utils/useResturantDetails";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/useContext";

// const listOfRestaurants = [
//   {
//     data: {
//       id: "334475",
//       name: "KFC",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: "3.8",
//     },
//   },
//   {
//     data: {
//       id: "334476",
//       name: "Dominos",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: "4.5",
//     },
//   },
//   {
//     data: {
//       id: "334478",
//       name: "MCD",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       costForTwo: 40000,
//       deliveryTime: 36,
//       avgRating: "4.1",
//     },
//   },
// ];
const Body = () => {
  const [restaurantList, setRestautrantList] = useState([]);
  const [filteredRestaurantList, SetFilteredRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurantCardDiscounted = withDiscountedLabel(RestaurantCard);

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

  if (onlineStatus === false)
    return (
      <h1>
        Look's your online connection is lost. Kindly check your internet
        connection
      </h1>
    );
  // console.log(filteredRestaurantList.length);

  if (filteredRestaurantList.length === 0) {
    // console.log("shimmer");
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex">
        <div className=" m-4 p-4">
          <input
            type="text"
            data-testid = 'searchInput'
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-[0.3%] bg-green-50 m-4 rounded-lg"
            onClick={() => {
              const filtaredList = restaurantList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log(filtaredList);
              SetFilteredRestaurantList(filtaredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-[0.3%] bg-slate-300 m-4 rounded-lg"
            onClick={() => handlefilterList()}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-4 p-4 items-center">
          <label className="mr-4">User Name</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurantList &&
          filteredRestaurantList.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardDiscounted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
