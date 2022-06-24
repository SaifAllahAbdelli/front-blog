const settings = {
  chart: {
    height: 350,
    type: "heatmap",
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      radius: 0,
      useFillColorAsStroke: true,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 10,
            name: "low",
            color: "#00A100",
          },
          {
            from: 11,
            to: 51,
            name: "medium",
            color: "#128FD9",
          },
          {
            from: 52,
            to: 102,
            name: "high",
            color: "#FFB200",
          },
          {
            from: 103,
            to: 200,
            name: "extreme",
            color: "#FF0000",
          },
        ],
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
  },
  title: {
    text: "Candidatures Heatmap",
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
};

// const settings = {
//   colors: colors,

//   stroke: {
//     curve: "straight",
//     width: [0, 1],
//   },
//   dataLabels: {
//     enabled: true,
//     enabledOnSeries: [1],
//     style: {
//       fontSize: "10px",
//       fontWeight: 500,
//     },
//     background: {
//       borderWidth: 0,
//     },
//   },
//   labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
//   legend: {
//     position: "top",
//     floating: true,
//   },
//   xaxis: {
//     type: "category",
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//     labels: {
//       show: true,
//       style: {
//         colors: "#000",
//       },
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   fill: {
//     type: "solid",
//     opacity: 1,
//   },
//   plotOptions: {
//     bar: {
//       borderRadius: 10,
//       columnWidth: "50%",
//     },
//   },
//   grid: {
//     show: false,
//   },
// };

export default settings;
