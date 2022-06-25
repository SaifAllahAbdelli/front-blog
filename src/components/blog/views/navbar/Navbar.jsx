import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import adn from "../../../../assets/adn.png";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light" >
      <MDBContainer fluid>
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-around mb-3">
          <div className="p-2 ">
            <MDBNavbarBrand href="/">
              <img src={adn} alt="" style={{ width: "85px" }} />
            </MDBNavbarBrand>
          </div>
          <div className="p-2">
            <MDBNavbarToggler
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
          </div>
          <div className="p-2 flex-grow-1">
            <MDBCollapse navbar show={showBasic}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="#">
                    Tout
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Design</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Web</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Marketing</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Développement </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
              <div className="d-flex flex-wrap justify-content-end" style={{"marginLeft":"10%"}} >
                <div className="p-2 col-lg-8 col-md-10 col-sm-10" >
                  <form className="d-flex input-group w-auto">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Recherche"
                      aria-label="Search"
                      color=""
                    />
                  </form>
                </div>
                <div className="p-2 col-lg-3 col-md-10 col-sm-10" style={{"marginRight":"5%"}}>
                  <MDBBtn className="mx-2 text-light" color="info" href="/login">
                    s'inscrire
                  </MDBBtn>
                </div>
              </div>
            </MDBCollapse>
          </div>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}
