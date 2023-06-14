import React, { useContext } from "react";
import { Session } from "../api/sessionStorage";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

function Navbar() {
  const value = useContext(UserContext);

  function logout() {
    Session.removeUser();
    window.location.href = "/login";
  }

  return (
    <div className="header">
      <nav className="nav">
        <h1 className="nav-title">
          <Link to="/home">Travel Agency</Link>
        </h1>

        <div className="nav-menu">
          <Link to="/home" className="home">
            Home
          </Link>
          {value.user && (
            <Link to="/bookings" className="bookings">
              Your Bookings
            </Link>
          )}
          {value.user?.role === "admin" && (
            <Link to="/admin" className="about">
              Admin Panel
            </Link>
          )}
          {value.user?.role === "agent" && (
            <Link to="/agent" className="about">
              Agent Panel
            </Link>
          )}
          <Link to="/about" className="about">
            About
          </Link>

          {value.user ? (
            <>
              <div className="dropdown">
                <button
                  className="nav-name"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user"></i>
                  {value.user.name}
                  <i className="fa-sharp fa-solid fa-caret-down"></i>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                  <Link className="dropdown-item" to="#" onClick={logout}>
                    Logout
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/register" className="pay">
                Register
              </Link>
              <Link to="/login" className="pay">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
