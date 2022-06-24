import React, { useState } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import Widget from "../../../components/Widget/Widget";
import { Col, Row } from "reactstrap";

import AddNewOfferModal from "../../../components/Modals/AddNewOfferModal/AddNewOfferModal";
import ConfirmDeleteOffer from "../../../components/Modals/ConfirmModal/ConfirmDeleteOffer";
import ModifyOfferModal from "../../../components/Modals/ModifyOfferModal/ModifyOfferModal";
import { useSelector } from "react-redux";

import SpinnerSmall from "../../../components/SpinnerSmall/SpinnerSmall";

let rowID;

const formatDate = (input) => {
  const date = new Date(input);
  return [date.getMonth() + 1, date.getDate(), date.getFullYear()].join("/");
};

function OffersTable({ title, rows, pfe = false }) {
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
      field: "title",
      headerName: "Titre",
      minWidth: 170,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "category",
      headerName: "Categorie",
      minWidth: 170,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 170,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "totalposts",
      headerName: "N° Candidats",
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
      field: "approve",
      headerName: "",
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
          <div className="headline-2 mb-2">Postes</div>
          <button className="btn  btn-outline-primary" onClick={toggleShowAddOfferModal}>
            Ajouter une poste
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
                console.log("id:", rowID);
              }}
              getRowId={(row) => row.id}
              autoHeight
            />
          </Box>
        </Row>
      </Col>

      {/* Modals */}

      {confirmModalIsOpen && (
        <ConfirmDeleteOffer
          isOpen={confirmModalIsOpen}
          toggleShowModal={toggleShowConfirmeModal}
          offerID={rowID}
        />
      )}

      {addOfferModalIsOpen && (
        <AddNewOfferModal
          isOpen={addOfferModalIsOpen}
          toggleShowModal={toggleShowAddOfferModal}
          pfe={pfe}
        />
      )}

      {modifyOfferModalIsOpen && (
        <ModifyOfferModal
          isOpen={modifyOfferModalIsOpen}
          toggleShowModal={toggleShowModifyOfferModal}
          pfe={pfe}
          posteID={rowID}
        />
      )}
    </Widget>
  );
}

export default OffersTable;
