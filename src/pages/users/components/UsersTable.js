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

function UsersTable({ title, rows }) {
  const loading = useSelector((state) => state.loading);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 75,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "FirstName",
      headerName: "Nom",
      minWidth: 170,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "LastName",
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
      field: "role",
      headerName: "Role",
      minWidth: 150,
      flex: 1,
      type: "number",
      headerAlign: "center",
    },
    {
      field: "addedDate",
      headerName: "Date d'ajout",
      minWidth: 125,
      flex: 1,
      type: "date",
      headerAlign: "center",
      valueFormatter: (params) => {
        return formatDate(params.value);
      },
    },
    {
      field: "lastModified",
      headerName: "Dernière modification",
      minWidth: 125,
      flex: 1,
      type: "date",
      headerAlign: "center",
      valueFormatter: (params) => {
        return formatDate(params.value);
      },
    },

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
                onClick={toggleShowModifyOfferModal}
                className="btn w-25 d-flex justify-content-center align-items-center btn-outline-warning"
              >
                <i className="fa-solid fa-pen"></i>
              </button>

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
              rows={rows}
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

      {modifyOfferModalIsOpen && (
        <ModifyUserModal
          isOpen={modifyOfferModalIsOpen}
          toggleShowModal={toggleShowModifyOfferModal}
          
          userID ={rowID}
        />
      )}
    </Widget>
  );
}

export default UsersTable;
