import React, { useState } from "react";

//import ProfileIcon from "../../../../assets/navbarMenus/pfofileIcons/ProfileIcon";
//import MessagesIcon from "../../../../assets/navbarMenus/pfofileIcons/MessagesIcon";
//import TasksIcon from "../../../../assets/navbarMenus/pfofileIcons/TasksIcon";
//import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

import mariaImage from "../../../../assets/navbarMenus/mariaImage.jpg";

import logoutIcon from "../../../../assets/navbarMenus/pfofileIcons/logoutOutlined.svg";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { logoutUser } from "../../../../redux/actions/authActions";

import s from "../../Header.module.scss";
import "animate.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function UserDropDown() {
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const doLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Dropdown
      isOpen={menuOpen}
      toggle={toggleMenu}
      nav
      id="basic-nav-dropdown"
      className="ml-3"
    >
      <DropdownToggle nav caret className="navbar-dropdown-toggle">
        <span className={`${s.avatar} rounded-circle float-left mr-2`}>
          <img src={mariaImage} alt="User" />
        </span>
        <span className="small d-none d-sm-block ml-1 mr-2 body-1">Admin</span>
      </DropdownToggle>
      <DropdownMenu
        className="navbar-dropdown profile-dropdown mr-5"
        style={{ width: "194px" }}
      >
        {/* <DropdownItem className={s.dropdownProfileItem}>
          <ProfileIcon />
          <span>Profile</span>
        </DropdownItem> */}

        {/* <DropdownItem className={s.dropdownProfileItem}>
          <TasksIcon />
          <span>Tasks</span>
        </DropdownItem> */}

        {/* <DropdownItem className={s.dropdownProfileItem}>
          <MessagesIcon />
          <span>Messages</span>
        </DropdownItem> */}

        <Link to="/job-offres" className="d-flex align-items-center">
          <DropdownItem className={s.dropdownProfileItem}>
            <WorkOutlineIcon style={{ color: "#16365f"  }} />
            <span style={{ fontSize:"13px" }} >modifier profile</span>
          </DropdownItem>
        </Link>

        {/* <Link to="/pfe-offres" className="d-flex align-items-center">
          <DropdownItem className={s.dropdownProfileItem}>
            <BookOutlinedIcon style={{ color: "#16365f" }} />
            <span>PFE</span>
          </DropdownItem>
        </Link> */}

        <div className="d-flex justify-content-center align-items-center mt-3">
          <button
            className="btn btn-primary rounded-pill logout-btn mt-0"
            type="submit"
            onClick={() => doLogout()}
          >
            <img src={logoutIcon} alt="Logout" />
            <span className="ml-1 text-white">Logout</span>
          </button>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}

export default UserDropDown;
