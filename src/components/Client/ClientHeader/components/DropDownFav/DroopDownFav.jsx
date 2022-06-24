import React from "react";
import { Col, DropdownMenu } from "reactstrap";
import FavCard from "../FavCard/FavCard";

import styles from "./dropDownFav.module.css";

function DroopDownFav() {
  return (
    <DropdownMenu right className={`mt-3 mt-sm-0 ${styles.drop__down__menu}`}>
      <Col className="d-flex flex-column justify-content-center">
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
        <FavCard />
      </Col>
    </DropdownMenu>
  );
}

export default DroopDownFav;
