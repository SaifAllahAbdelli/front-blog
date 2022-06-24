import React, { useState } from "react";

import { Navbar, Row, Col, Input, Dropdown, DropdownToggle } from "reactstrap";


//import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AdminIcon from "@mui/icons-material/AdminPanelSettings";

import { IconButton /*Badge*/ } from "@mui/material";

import UploadCvModal from "../../../components/Modals/UploadCvModal/UploadCvModal";

import styles from "./ClientHeader.module.css";
//import DroopDownFav from "./components/DropDownFav/DroopDownFav";
import FilterMenu from "./components/FilterMenu/FilterMenu";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux/actions/client/searchActions";

function ClientHeader() {
  const { searchValue } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const [uploadCvModalIsOpen, setUploadCvModalIsOpen] = useState(false);
  const [searchIsVisibile, setSearchIsVisible] = useState(false);
  const [showBasic, setShowBasic] = useState(false);
  // DropDown States
  //const [favIsOpen, setFavIsOpen] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const handleChange = (event) => {
    dispatch(setSearchValue(event.target.value));
  };

  // DropDown Functions
  // const toggleFavMenu = () => {
  //   setFavIsOpen(!favIsOpen);
  // };

  const toggleFilterMenu = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  const toggleShowUploadCvModal = () => {
    setUploadCvModalIsOpen(!uploadCvModalIsOpen);
  };

  const toggleSearchIsVisible = () => {
    setSearchIsVisible(!searchIsVisibile);
  };

  // const submitBtn = (
  //   <button
  //     className="btn btn-primary"
  //     onClick={toggleShowUploadCvModal}
  //     disabled
  //   >
  //     Déposer demande
  //   </button>
  // );

  const searchInput = (
    <Input
      id="search"
      name="search"
      placeholder="Recherche..."
      type="text"
      className="col col-md-4"
      value={searchValue}
      onChange={(event) => handleChange(event)}
    />
  );

  //const btnOrInput = searchIsVisibile ? searchInput : submitBtn;
  const btnOrInput = searchIsVisibile && searchInput;
  

  return (
  
    <Navbar
      expand="lg"
      className={`d-flex align-items-center p-3 justify-content-center ${styles.container}`}
    >
      <Row className="w-100 align-items-center">
        <Col className="d-flex justify-content-start">{btnOrInput}</Col>

        <Col className="d-flex justify-content-end">
          <Row className="d-flex align-items-center w-100 justify-content-end">
            <Col className="col-1 d-flex justify-content-end align-items-center">
              <Link to="/admin" className="text-light">
                <IconButton>
                  <AdminIcon className={`${styles.icon}`} />
                </IconButton>
              </Link>

              <IconButton onClick={toggleSearchIsVisible}>
                {searchIsVisibile ? (
                  <CloseIcon className={`${styles.icon}`} />
                ) : (
                  <SearchIcon className={`${styles.icon}`} />
                )}
              </IconButton>

              <Dropdown isOpen={filterIsOpen} toggle={toggleFilterMenu}>
                <DropdownToggle nav>
                  <IconButton>
                    <FilterAltOutlinedIcon className={`${styles.icon}`} />
                  </IconButton>
                </DropdownToggle>
                <FilterMenu />
              </Dropdown>

              {/* <Dropdown isOpen={favIsOpen} toggle={toggleFavMenu}>
                <DropdownToggle nav>
                  <IconButton>
                    <Badge
                      badgeContent={5}
                      className={styles["css-whxibi-MuiBadge-badge"]}
                    >
                      <FavoriteOutlinedIcon className={`${styles.icon}`} />
                    </Badge>
                  </IconButton>
                </DropdownToggle>

                <DroopDownFav />
              </Dropdown> */}
            </Col>
          </Row>
        </Col>
      </Row>

      {uploadCvModalIsOpen && (
        <UploadCvModal
          isOpen={uploadCvModalIsOpen}
          toggleShowModalCV={toggleShowUploadCvModal}
        />
      )}
    </Navbar>
  );
}

export default ClientHeader;
