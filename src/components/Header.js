import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PeopleContext } from '../context/PeopleContext';
import './Header.css';

const Header = ({ toggleTheme }) => { // Ambil prop toggleTheme
  const { isLoggedIn, login, logout } = useContext(PeopleContext);
  const navigate = useNavigate();

  const handleAuthToggle = () => {
    if (isLoggedIn) {
      logout();
      navigate('/home');
    } else {
      login();
      navigate('/team');
    }
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About Me</NavLink></li>
          {isLoggedIn && <li><NavLink to="/team" activeClassName="active">My Team</NavLink></li>}
        </ul>
        <button onClick={handleAuthToggle} className="login-button">
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        <button onClick={toggleTheme} className="theme-button">
          Toggle Theme
        </button>
      </nav>
    </header>
  );
};

export default Header;
