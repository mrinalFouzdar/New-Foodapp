import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#ececec",
};

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    props.resData.info;
  // console.log("restaurantcard")
  // console.log(cloudinaryImageId)

  return (
    <div className="m-4 p-4  w-[250px] h-[400px] max-h-fit bg-slate-100 rounded-lg transition-transform transform hover:scale-105">
      <img
        className="rounded-lg  h-[200px] w-full object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="biryani"
      />
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

export default RestaurantCard;
