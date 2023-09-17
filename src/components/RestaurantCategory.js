import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {
  // console.log(props)
  const [close,setClose] = useState(false)
  const { title } = data;
  const handleShowItems =()=>{
    setShowIndex()
  }
  return (
    <>
      <div className="w-6/12 mx-auto my-2 bg-gray-100 shadow-lg p-4 ">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleShowItems}
        >
          <span className="font-bold text-lg">
            {title} ({data?.itemCards.length})
          </span>
          <span className="text-xl font-bold">🔻</span>
        </div>
        {
          showItems && <ItemList key={data.title} items={data.itemCards} />
        }
        
      </div>
    </>
  );
};

export default RestaurantCategory;
