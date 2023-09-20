import { useDispatch } from 'react-redux';
import {CDN_URL}  from '../utils/cons'
import { addItem } from '../utils/cartSlice';
const ItemList = ({ items }) => {
  console.log({ items });
  const dispatch = useDispatch()
  // const {id, name} =items?.card.info
  const handleAddItem=(item)=>{
    // Dispatch an action
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card.info.id}
          className="p-2 m-2 pb-9 border-gray-300 border-b-2 flex  justify-between  space-x-4"
        >
          <div className="w-5/6 text-left">
            <div className='py-2'>
            <span>{item?.card?.info?.name}</span>
            <span>
              -₹
              {item?.card.info.price
                ? item?.card.info.price / 100
                : item?.card.info.defaultPrice / 100}
            </span>

            </div>
            <p className='text-slate-400'>
              {
                item?.card?.info?.description
              }
            </p>
          </div>
          <div className='w-1/6 order-last relative'>
            <img src={CDN_URL+ item?.card?.info?.imageId}  className='w-full h-full object-cover'/>
            <div className='absolute top-20 left-5 cursor-pointer ' onClick={()=>handleAddItem(item)}>
              <button className='bg-white rounded-lg p-2 '>
                ADD +
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ItemList;
