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
  const {
    totalOffersByName,
    totalInternshipCandidatsByMonth,
    totalJobsCandidatsByMonth,
    totalInternshipGenderCandidatsByMonth,
    totalJobsGenderCandidatsByMonth,
  } = useSelector((state) => state.stats);

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
        <Row className="gutter mb-4">
          <BarChart
            title="Candidatures par mois"
            data={[totalInternshipCandidatsByMonth, totalJobsCandidatsByMonth]}
            colors={["#023047", "#ffb703"]}
          />

          <ApexColumnAreaChart
            title="Sexes par mois"
            data={[
              totalInternshipGenderCandidatsByMonth,
              totalJobsGenderCandidatsByMonth,
            ]}
          />
        </Row>

        <Row className="gutter mb-4">
          <RechartsPieChart
            title="N° total des candidatures"
            labels={["PFE", "Jobs"]}
            colors={["#83c5be", "#e29578"]}
          />

          <DonutChartOffers
            title="N° candidatures par offre"
            series={totalOffersByName}
          />
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
