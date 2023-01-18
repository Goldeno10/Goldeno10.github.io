import { Link } from 'react-router-dom';
import './images/xlease-logo4.png';

const Header = () => {
  return ( 
      <header>
      <Link to="/">
      <img src="./logo.png" alt="" className="logo" />
      </Link>
      <div className="search">
      <button className="search-button">
                    <div className="search-logo"></div>
                    search
                </button>
                <input type="text" className="search-field" />
            </div>
            <div className="links">
      <Link to="lease-my-device/">
      <button className="lease-button" >
      Lease your device
    </button>
    </Link>
      <Link to="lease-my-device/">
      <button className="lease-button">
      Sign In
    </button>
      </Link>
      <Link to="lease-my-device/">
      <button className="lease-button">
      Sign Up
    </button>
    </Link>
                {/* <button className="profile"></button> */}
            </div>
        </header>
     );
}
export default Header;
