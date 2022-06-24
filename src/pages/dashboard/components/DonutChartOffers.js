import React from "react";

import { Col } from "reactstrap";
import Widget from "../../../components/Widget/Widget";

import ApexCharts from "react-apexcharts";

const DonutChartOffers = ({ title, series }) => {
  const count = series.map(({ count }) => count);
  const labels = series.map(({ _id }) => _id);

  const options = {
    chart: {
      type: "donut",
    },
    labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 350,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <Col className="mb-4 mb-md-0" xs={12} md={6}>
      <Widget>
        <div className="d-flex justify-content-between widget-p-md">
          <div className="headline-3 d-flex align-items-center">{title}</div>
        </div>
      </Widget>

      <ApexCharts options={options} series={count} type="donut" />
    </Col>
  );
};

export default DonutChartOffers;
