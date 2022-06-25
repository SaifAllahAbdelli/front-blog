import React from "react";

import { Col, Row } from "reactstrap";

import { Helmet } from "react-helmet";

// Charts
import ApexColumnAreaChart from "./components/ApexColumnAreaChart.js";
import BarChart from "./components/BarChart.js";
import RechartsPieChart from "./components/RechartsPieChart";
import DonutChartOffers from "./components/DonutChartOffers";
import { useSelector } from "react-redux";

const Dashboard = () => {


  return (
    <Row>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Admin dashboard to see all the stats."
        />
        <title>Blog | Dashboard</title>
      </Helmet>

      <Col className="pr-grid-col" xs={12} lg={12}>

       
      </Col>
    </Row>
  );
};

export default Dashboard;
