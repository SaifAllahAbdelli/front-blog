import React, { useEffect, useState } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Row,
} from "reactstrap";

import { Badge } from "@mui/material";

import bagIcon from "../../../../assets/tables/bagIcon.svg";

import s from "../../Header.module.scss";
import styles from "./notification.module.css";
import "animate.css";

import { useDispatch, useSelector } from "react-redux";
import { modifyNotification } from "../../../../redux/actions/admin/notificationActions";
import { Zoom } from "@material-ui/core";

import NoNotifications from "../NoNotifications/NoNotifications";
import SpinnerSmall from "../../../SpinnerSmall/SpinnerSmall";

function NotificationDropDown() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  // Redux hooks
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);
  const notSeenNotifications = notifications.filter(
    ({ seen }) => seen === false
  );

  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (notSeenNotifications) {
      setChecked(true);
      const timer = setTimeout(() => {
        setChecked(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setChecked(false);
    }
  }, [notSeenNotifications]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSeenNotification = (id) => {
    dispatch(modifyNotification(id));
  };

  const renderNotifications = notifications
    .map(({ _id, seen, candidatName }) => {
      const customClassName = !seen ? "border border-info" : "";
      return (
        <DropdownItem
          key={_id}
          onClick={() => toggleSeenNotification(_id)}
          className={`${customClassName} mb-2`}
        >
          <Row className="d-flex align-items-center justify-content-start">
            <img src={bagIcon} alt="Bag Icon" />
            <span className={styles.candidat__name}>
              Nouvelle candidature
              <br />
              <small>Par: {candidatName}</small>
            </span>
          </Row>
        </DropdownItem>
      );
    })
    .reverse();

  const isLoading = loading ? <SpinnerSmall /> : renderNotifications;

  return (
    <Dropdown
      nav
      isOpen={menuOpen}
      toggle={() => toggleMenu()}
      className="tutorial-dropdown mr-2 mr-sm-3"
    >
      <DropdownToggle nav>
        <div className={s.navbarBlock}>
          <Zoom
            in={checked}
            style={{ transitionDelay: checked ? "300ms" : "0ms" }}
          >
            <Badge badgeContent={notSeenNotifications.length} color="primary">
              <i className={"eva eva-bell-outline"} />
            </Badge>
          </Zoom>
        </div>
      </DropdownToggle>
      <DropdownMenu
        right
        className="navbar-dropdown notifications-dropdown"
        style={{ width: "18rem", maxHeight: "15rem", overflowX: "scroll" }}
      >
        {notifications.length ? isLoading : <NoNotifications />}
      </DropdownMenu>
    </Dropdown>
  );
}

export default NotificationDropDown;
