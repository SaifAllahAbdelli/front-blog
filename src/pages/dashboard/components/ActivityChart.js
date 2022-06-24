import React from "react";
import ApexCharts from "react-apexcharts";

import settings from "../data/config";
import series from "../data";

export default function ApexActivityChart({ colors }) {
    return ( <
        ApexCharts options = { settings }
        series = { series }
        type = "heatmap"
        height = { 350 }
        />
    );
}