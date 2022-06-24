import React from "react";

import { Col } from "reactstrap";

import Widget from "../../../components/Widget/Widget.js";

import ApexCharts from "react-apexcharts";

function BarChart({ title, colors, data }) {
  const [dataPFE, dataJobs] = data;

  const series = [
    {
      name: "PFE",
      data: dataPFE,
    },
    {
      name: "Jobs",
      data: dataJobs,
    },
  ];

  const settings = {
    toolbar: {
      show: true,
    },
    colors,
    chart: {
      type: "bar",
      height: 430,
    },

    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      type: "category",
      categories: [
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
    },
  };

  return (
    <Col className="mb-4 mb-md-0" xs={12} md={6}>
      <Widget>
        <div className="d-flex justify-content-between widget-p-md">
          <div className="headline-3 d-flex align-items-center">{title}</div>
        </div>

        <ApexCharts
          options={settings}
          series={series}
          type="bar"
          height={430}
        />
      </Widget>
    </Col>
  );
}

export default BarChart;
