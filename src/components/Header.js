import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './../StateProvider';
import { auth } from '../firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      console.log('>>user has been signed out');
    }
  };

  return (
    <div className="header">
      {/* Header logo */}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header__logo"
          className="header__logo"
        />
      </Link>

      {/* Header search bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Header options */}
      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div className="header__option">
            <span className="header__optionLineOne">Hello {user ? user?.email : 'Guest'}</span>

            <span
              className="header__optionLineTwo"
              onClick={handleAuthentication}
            >
              {user ? 'Sign Out' : 'Sign in'}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        {/* Shopping basket */}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
              {/* ? -> optional chaining */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
