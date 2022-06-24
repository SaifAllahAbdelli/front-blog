import React, { useState } from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

import s from "../../Header.module.scss";

function LangDropDown() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Dropdown
      nav
      isOpen={menuOpen}
      toggle={() => toggleMenu()}
      className="tutorial-dropdown mr-2 mr-sm-3"
    >
      <DropdownToggle nav>
        <div className={s.navbarBlock}>
          <i className="eva eva-globe"></i>
        </div>
      </DropdownToggle>
      <DropdownMenu
        right
        className="navbar-dropdown"
        style={{ width: "180px" }}
      >
        <DropdownItem>
          <span className="d-flex justify-content-between align-items-center">
            <p>العربية</p>
            🇹🇳
          </span>
        </DropdownItem>

        <DropdownItem>
          <span className="d-flex justify-content-between align-items-center">
            <p>English</p>
            🇬🇧
          </span>
        </DropdownItem>

        <DropdownItem>
          <span className="d-flex justify-content-between align-items-center">
            <p>Français</p>
            🇫🇷
          </span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default LangDropDown;
