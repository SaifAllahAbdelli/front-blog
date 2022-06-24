import React, { useState } from "react";
import ApexCharts from "react-apexcharts";
import {
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import Widget from "../../../components/Widget/Widget";

const chartSettings = {
  colors: ["#4D53E0", "#ffb835"],
  chart: {
    toolbar: {
      show: true,
    },
    type: "line",
    stacked: true,
  },
  stroke: {
    width: 1,
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  fill: {
    type: "solid",
    opacity: 1,
  },
  labels: [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aôu",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ],
  markers: {
    size: 0,
  },
  xaxis: {
    type: "category",
    labels: {
      style: {
        colors: "#6B859E",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#6B859E",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
};

export default function ApexColumnAreaChart({ title, data }) {
  const [selectedPost, setSelectedPost] = useState("PFE");
  const [rawDataPFE, rawDataJobs] = data;

  const [dataFemale, dataMale] =
    selectedPost === "PFE" ? rawDataPFE : rawDataJobs;

  const series = [
    {
      name: "Mâle",
      type: "column",
      data: dataMale ? dataMale.value : [0],
    },
    {
      name: "Femelle",
      type: "column",
      data: dataFemale ? dataFemale.value : [0],
    },
  ];

  return (
    <Col className="mb-4 mb-md-0" xs={12} md={6}>
      <Widget>
        <div className="d-flex justify-content-between widget-p-md">
          <div className="headline-3 d-flex align-items-center">
            {title} ({selectedPost})
          </div>

          <UncontrolledDropdown>
            <DropdownToggle caret> {selectedPost} </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setSelectedPost("PFE")}>
                PFE
              </DropdownItem>
              <DropdownItem onClick={() => setSelectedPost("Jobs")}>
                Jobs
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <ApexCharts
          options={chartSettings}
          series={series}
          type="area"
          height={400}
        />
      </Widget>
    </Col>
  );
}
