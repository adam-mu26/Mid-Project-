import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar(props) {
  const logout = () => {
    props.setIsLogged(false);
    props.setIsLoginPage(true);
  };

  return (
    <header className="header">
      <img className="logo" src="/src/assets/imgs/logo.png" alt="Logo" />
      <nav>
        <ul className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <div className="login-container">
        {!props.isLogged ? (
          <Link className="login-button" to="/login">
            Login
          </Link>
        ) : (
          <>
            <Link className="login-button" to="/user">
              <span className="icon">
                <AccountCircleIcon />
              </span>
              User
            </Link>
            <Link className="login-button" to="/login" onClick={logout}>
              Logout
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;