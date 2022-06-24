import React from "react";

import { DropdownMenu, Row, Col, FormGroup, Input, Label } from "reactstrap";
import styles from "./filterMenu.module.css";

function FilterMenu() {
  return (
    <DropdownMenu right className={`mt-3 mt-sm-0 ${styles.drop__down__menu}`}>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <Row className="w-100">
          <Col>
            <Row>
              <h6 className="text-info">Type:</h6>
            </Row>

            <Row>
              <FormGroup check>
                <Row>
                  <Col className="col-12">
                    <Input type="checkbox" />
                    <Label check>Job</Label>
                  </Col>

                  <Col>
                    <Input type="checkbox" />
                    <Label check>PFE</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Row>
          </Col>
        </Row>

        <Row className="w-100 mt-2">
          <Col>
            <Row>
              <h6 className="text-info">Technologie:</h6>
            </Row>

            <Row>
              <FormGroup check>
                <Row>
                  <Col className="col-5">
                    <Input type="checkbox" />
                    <Label check>ReactJS</Label>
                  </Col>

                  <Col className="col-5">
                    <Input type="checkbox" />
                    <Label check>NodeJS</Label>
                  </Col>

                  <Col className="col-5">
                    <Input type="checkbox" />
                    <Label check>VueJS</Label>
                  </Col>

                  <Col className="col-5">
                    <Input type="checkbox" />
                    <Label check>Python</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Row>
          </Col>
        </Row>
      </Col>
    </DropdownMenu>
  );
}

export default FilterMenu;
