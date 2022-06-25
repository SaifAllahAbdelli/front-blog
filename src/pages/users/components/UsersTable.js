import React, { useState } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import Widget from "../../../components/Widget/Widget";
import { Col, Row } from "reactstrap";
import AddNewUserModal from "../../../components/Modals/AddNewUserModal/AddNewUserModal";

import ModifyUserModal from "../../../components/Modals/ModifyUserModal/ModifyUserModal";
import { useSelector } from "react-redux";

import SpinnerSmall from "../../../components/SpinnerSmall/SpinnerSmall";
import ConfirmDeleteUser from "../../../components/Modals/ConfirmModal/ConfirmDeleteUser";

let rowID;

const formatDate = (input) => {
  const date = new Date(input);
  return [date.getMonth() + 1, date.getDate(), date.getFullYear()].join("/");
};

function UsersTable({ title }) {
  const loading = useSelector((state) => state.loading);
  const { users } = useSelector((state) => state.updateUsers);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 75,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "firstName",
      headerName: "Nom",
      minWidth: 170,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "lastName",
      headerName: "Prénom",
      minWidth: 170,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 170,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "roleId",
      headerName: "Role",
      minWidth: 150,
      flex: 1,
      type: "number",
      headerAlign: "center",
    }
    ,
    {
      field: "options",
      headerName: "Options",
      minWidth: 140,
      flex: 1,
      renderCell: () => {
        if (loading) {
          return <SpinnerSmall />;
        } else {
          return (
            <div className="d-flex align-items-center justify-content-center w-50">
              <button
                onClick={toggleShowConfirmeModal}
                className="btn d-flex justify-content-center align-items-center   btn-outline-danger w-25"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          );
        }
      },
    },
  ];

  const [modifyOfferModalIsOpen, setModifyOfferModalIsOpen] = useState(false);
  const [addOfferModalIsOpen, setAddOfferModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);

  const toggleShowModifyOfferModal = () => {
    setModifyOfferModalIsOpen(!modifyOfferModalIsOpen);
  };

  const toggleShowAddOfferModal = () => {
    setAddOfferModalIsOpen(!addOfferModalIsOpen);
  };

  const toggleShowConfirmeModal = () => {
    setConfirmModalIsOpen(!confirmModalIsOpen);
  };

  return (
    <Widget>
      <Col>
        <Row className="d-flex justify-content-between align-items-center mt-2 mb-3">
          <div className="headline-2 mb-2">Utilisateurs</div>
          <button className="btn  btn-outline-primary" onClick={toggleShowAddOfferModal}>
            Ajouter un utilisateur
          </button>
        </Row>
        <Row className="d-flex">
          <Box
            sx={{
              width: 1,
              "& .customCell": {
                display: "flex",
                justifyContent: "center!important",
              },
            }}
          >
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              getCellClassName={() => "customCell"}
              onSelectionModelChange={(id) => {
                rowID = id;
              }}
              getRowId={(row) => row.id}
              autoHeight
            />
          </Box>
        </Row>
      </Col>

      {/* Modals */}

      {confirmModalIsOpen && (
        <ConfirmDeleteUser
          isOpen={confirmModalIsOpen}
          toggleShowModal={toggleShowConfirmeModal}
          userID={rowID}
        />
      )}

      {addOfferModalIsOpen && (
        <AddNewUserModal
          isOpen={addOfferModalIsOpen}
          toggleShowModal={toggleShowAddOfferModal}

        />
      )}
    </Widget>
  );
}

export default UsersTable;
