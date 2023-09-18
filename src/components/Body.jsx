import { useEffect, useState } from "react";
// import resData from "../utils/dummyData";
import { RestaurantCard,withDiscountedLabel}from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResturantDetails from "../utils/useResturantDetails";
import useOnlineStatus from "../utils/useOnlineStatus";

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
  const { restaurantList, filteredRestaurantList, handlefilterList } =
    useResturantDetails();
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardDiscounted = withDiscountedLabel(RestaurantCard)
  if (onlineStatus === false)
    return (
      <h1>
        Look's your online connection is lost. Kindly check your internet
        connection
      </h1>
    );

  if (!filteredRestaurantList) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex">
        <div className=" m-4 p-4">
          <input
            type="text"
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
              console.log(filtaredList);
              // SetFilteredRestaurantList(filtaredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button className="px-4 py-[0.3%] bg-slate-300 m-4 rounded-lg" onClick={()=>handlefilterList()}>
            Top Rated Restaurants 
          </button>
        </div>
      </div>
      <div className="flex flex-wrap mx-12">
        {filteredRestaurantList &&
          filteredRestaurantList.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {
                restaurant.info.aggregatedDiscountInfoV3 ?<RestaurantCardDiscounted resData={restaurant}/>:<RestaurantCard resData={restaurant} />

              }
              
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
