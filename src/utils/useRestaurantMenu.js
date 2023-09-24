import React, { useEffect, useState } from 'react'
import { MENU_API } from './constants';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  
    useEffect(() => {
        fetchMenu();
      }, [resId]);
    //   &catalog_qa=undefined&submitAction=ENTER
      const fetchMenu = async () => {
        try {
          const data = await fetch(MENU_API+resId+'&catalog_qa=undefined&submitAction=ENTER');
          const json = await data.json();
          // console.log(json?.data.cards[0]?.card?.card?.info);
          // console.log(json?.data);
          setResInfo(json.data);
        } catch (error) {
          console.log(error);
        }
      };
      // console.log(resInfo)

  return resInfo;
}

export default useRestaurantMenu;
