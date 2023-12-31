import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/useContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  const [loginStatus, setLoginStatus] = useState(false);

  const inCreaseNumber =(num)=>{
    // console.log(num)
    return num +1;
  }
  const handleLoginStatus =() =>{
    let number = inCreaseNumber(6)
    // console.log(number)
    setLoginStatus(!loginStatus)
  }
  // Subscribing to the stor using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)
  return (
    <div className="flex justify-between bg-gray-200 shadow-lg mb-2 px-2">
      <div className="logo-container">
        <img className="w-28 h" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status :{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/grocery">Gorocery</Link>{" "}
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - {cartItems.length} Items</Link>
          </li>
          <button className="px-4" onClick={handleLoginStatus}>
            {loginStatus ? "LogOut" : "Login"}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
