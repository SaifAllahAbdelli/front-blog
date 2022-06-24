import React, { useState } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Widget from "../../../../components/Widget/Widget";
import { Col, Row } from "reactstrap";

import ChooseDateModal from "../../../../components/Modals/ChooseDateModal/ChooseDateModal";
import ConfirmModal from "../../../../components/Modals/ConfirmModal/ConfirmModal";
import ClientInfosModal from "../../../../components/Modals/ClientInfosModal/ClientInfosModal";

import styles from "./tableComponent.module.css";

let userID;

function formatDate(date) {
  if (date) {
    const newDate = new Date(date);
    return [
      newDate.getMonth() + 1,
      newDate.getDate(),
      newDate.getFullYear(),
    ].join("/");
  }
}

function TableComponent({ title, rows }) {
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      minWidth: 75,
      flex: 1,
      headerAlign: "center",
      valueFormatter: (params) => {
        const valueFormatted = params.value.toString().substring(10, 13);
        return valueFormatted;
      },
    },
    {
      field: "fullName",
      headerName: "Nom & prénom",
      minWidth: 170,
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "jobID",
      headerName: "Poste",
      minWidth: 125,
      flex: 1,
      headerAlign: "center",
      valueFormatter: (params) => {
        return params.value.map(({ jobTitle }) => jobTitle);
      },
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      flex: 1,
      headerAlign: "center",
      renderCell: ({ value }) => {
        let customClassName;

        if (value === "Rejeté") {
          customClassName = styles.rejected;
        } else if (value === "En attente") {
          customClassName = styles.pending;
        } else {
          customClassName = styles.approved;
        }

        return (
          <div className={`${styles.icon} ${customClassName}`}>{value}</div>
        );
      },
    },
    {
      field: "interviewDate",
      headerName: "Date",
      minWidth: 75,
      flex: 1,
      headerAlign: "center",
      valueFormatter: (params) => {
        if (params.value) {
          return formatDate(params.value.startDate);
        }
      },
    },
    {
      field: "details",
      headerName: "Détails",
      minWidth: 170,
      flex: 1,
      headerAlign: "center",
      renderCell: () => (
        <button
          className={`btn ${styles.veiw__more__btn}`}
          onClick={toggleclientInfoseModal}
        >
          Voir plus
        </button>
      ),
    },
    {
      field: "file",
      headerName: "Télécharger CV",
      minWidth: 175,
      flex: 1,
      headerAlign: "center",
      renderCell: ({ value }) => (
        <a
          href={value}
          download="proposed_file_name"
          className="btn btn-primary d-flex justify-content-between align-items-center"
        >
          <i className="fa-solid fa-file-arrow-down mr-2"></i>
          CV
        </a>
      ),
    },
  ];

  const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [clientInfosModalIsOpen, setClientInfosModalIsOpen] = useState(false);

  const toggleShowDateModal = () => {
    setDateModalIsOpen(!dateModalIsOpen);
  };

  const toggleShowConfirmeModal = () => {
    setConfirmModalIsOpen(!confirmModalIsOpen);
  };

  const toggleclientInfoseModal = () => {
    setClientInfosModalIsOpen(!clientInfosModalIsOpen);
  };

  return (
    <Widget>
      <Col>
        <Row>
          <div className="headline-2 mb-2">{title}</div>
        </Row>
        <Row>
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
                userID = id;
              }}
              getRowId={(row) => row._id}
              autoHeight
            />
          </Box>
        </Row>
      </Col>

      {/* Modals */}

      {dateModalIsOpen && (
        <ChooseDateModal
          isOpen={dateModalIsOpen}
          toggleShowModal={toggleShowDateModal}
          userID={userID}
        />
      )}

      {confirmModalIsOpen && (
        <ConfirmModal
          isOpen={confirmModalIsOpen}
          toggleShowModal={toggleShowConfirmeModal}
          userID={userID}
        />
      )}

      {clientInfosModalIsOpen && (
        <ClientInfosModal
          isOpen={clientInfosModalIsOpen}
          toggleShowModal={toggleclientInfoseModal}
          userID={userID}
          job={title}
        />
      )}
    </Widget>
  );
}

export default TableComponent;
