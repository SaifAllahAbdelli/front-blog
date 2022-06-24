import React from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  Navbar,
  Nav,
  NavLink,
  // InputGroupAddon,
  // InputGroup,
  // Input,
  // Form,
  // FormGroup,
} from "reactstrap";

import {
  closeSidebar,
  openSidebar,
} from "../../redux/actions/navigationActions";
import MenuIcon from "../Icons/HeaderIcons/MenuIcon";
// import SearchBarIcon from "../Icons/HeaderIcons/SearchBarIcon";
import SearchIcon from "../Icons/HeaderIcons/SearchIcon";

import UserDropDown from "./components/UserDropDown/UserDropDown";
import NotificationDropDown from "./components/NotificationDropDown/NotificationDropDown";

import s from "./Header.module.scss";
import "animate.css";
import LangDropDown from "./components/LangDropDown/LangDropDown";

const Header = (props) => {
  // Redux hooks
  const dispatch = useDispatch();
  const { sidebarOpened } = useSelector((state) => state.navigation);

  const toggleSidebar = () => {
    if (sidebarOpened) {
      dispatch(closeSidebar());
    } else {
      const paths = props.location.pathname.split("/");
      paths.pop();
      dispatch(openSidebar());
    }
  };

  return (
    <Navbar className={`${s.root} d-print-none`}>
      <NavLink
        onClick={() => toggleSidebar()}
        className={`d-md-none mr-3 ${s.navItem}`}
      >
        <MenuIcon className={s.menuIcon} />
      </NavLink>

      {/* <Form className="d-none d-sm-block" inline>
        <FormGroup>
          <InputGroup className="input-group-no-border">
            <Input
              id="search-input"
              placeholder="Search Dashboard"
              className="focus"
            />
            <InputGroupAddon addonType="prepend">
              <span>
                <SearchBarIcon />
              </span>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form> */}

      <Nav className="ml-auto">
        <div className="d-sm-none mr-4 d-flex align-items-center justify-content-center">
          <SearchIcon />
        </div>

        <LangDropDown />
        <NotificationDropDown />
        <UserDropDown />
      </Nav>
    </Navbar>
  );
};

export default withRouter(Header);
