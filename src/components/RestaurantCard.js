import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#ececec",
};

const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    sla,
  } = props.resData.info;
  // console.log("restaurantcard")
  // console.log(cloudinaryImageId)

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={CDN_URL+cloudinaryImageId}
        alt="biryani"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {/* ₹{costForTwo / 100} FOR TWO  */}
        {costForTwo}
        </h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
