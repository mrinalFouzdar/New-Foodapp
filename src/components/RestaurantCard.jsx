import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#ececec",
};

export const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    props.resData.info;
    // console.log(props.resData)
  // console.log("restaurantcard")
  // console.log(cloudinaryImageId)

  return (
    <div data-testid='resCard' className="m-4 p-4  w-[250px] h-[400px] max-h-fit bg-slate-100 rounded-lg transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          className="rounded-lg h-[200px] w-full object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt="biryani"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-lg"></div>
      </div>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="whitespace-nowrap overflow-hidden overflow-ellipsis">
        {cuisines.join(", ")}
      </h4>

      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withDiscountedLabel = (RestaurantCard) => {
  return (props) => {
    // console.log(props)
    return (
      <div className="relative">
        <label className="absolute z-10 left-9 bottom-48 text-slate-50 text-xl font-bold">
          Discount
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

//  default RestaurantCard;
