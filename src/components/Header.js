import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status :{onlineStatus ? '✅':'🔴' }
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li>
            <Link to="/grocery">Gorocery</Link>{" "}
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button>Login </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
