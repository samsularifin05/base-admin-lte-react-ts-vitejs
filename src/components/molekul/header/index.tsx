import { Link } from "react-router-dom";
import { useState } from "react";
import { Profile } from "@/assets";
import { AppDispatch, themesActions, useAppSelector } from "@/reduxStore";
import { useDispatch } from "react-redux";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleMenuSidebar = () => {
    dispatch(themesActions.setSidebarToggle(!theme.getSidebarToggle));
  };
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={handleToggleMenuSidebar}
            data-widget="pushmenu"
            aria-label="Menu Hide Bar"
            role="button"
          >
            <i className="fas fa-bars" />
          </span>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <div className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle user-action">
              <img
                src={Profile}
                className="avatarProfile"
                alt="Avatar"
                height="64"
              />{" "}
              <span className="text-dark">SAM</span> <b className="caret"></b>
            </Link>
            <div
              className={`dropdown-menu ${menu ? "show" : ""}`}
              onMouseLeave={() => setMenu(false)}
            >
              <button type="button" className="dropdown-item">
                <i className="fa fa-user"></i> Profile
              </button>
              <button type="button" className="dropdown-item">
                <i className="nav-icon fas fa-arrow-right-from-bracket"></i>{" "}
                Logout
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
