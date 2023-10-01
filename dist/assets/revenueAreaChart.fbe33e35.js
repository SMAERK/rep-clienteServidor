import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
const themeColors$1 = useThemeColors();
const randomizeArray = function(arg) {
  const array = arg.slice();
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
const sparklineData = [
  472,
  454,
  547,
  385,
  562,
  247,
  652,
  318,
  379,
  391,
  622,
  515,
  355,
  415,
  358,
  271,
  932,
  534,
  615,
  278,
  546,
  435,
  192,
  465
];
const spark1 = {
  chart: {
    id: "sparkline1",
    group: "sparklines",
    type: "area",
    height: 130,
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors$1.primary],
  stroke: {
    width: [2],
    curve: "straight"
  },
  fill: {
    opacity: 1
  },
  series: [
    {
      name: "Total Sales",
      data: randomizeArray(sparklineData)
    }
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  xaxis: {
    type: "datetime"
  },
  title: {
    text: "Total Sales",
    offsetX: 5,
    style: {
      fontSize: "24px",
      cssClass: "apexcharts-yaxis-title",
      color: themeColors$1.lightText
    }
  },
  subtitle: {
    text: "9,374",
    offsetX: 5,
    style: {
      fontSize: "24px",
      fontWeight: "600",
      cssClass: "apexcharts-yaxis-title"
    }
  }
};
const spark2 = {
  chart: {
    id: "sparkline2",
    group: "sparklines",
    type: "area",
    height: 130,
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors$1.info],
  stroke: {
    width: [2],
    curve: "straight"
  },
  fill: {
    opacity: 1
  },
  series: [
    {
      name: "Total Profit",
      data: randomizeArray(sparklineData)
    }
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  xaxis: {
    type: "datetime"
  },
  title: {
    text: "Total Profit",
    offsetX: 5,
    style: {
      fontSize: "24px",
      cssClass: "apexcharts-yaxis-title",
      color: themeColors$1.lightText
    }
  },
  subtitle: {
    text: "$24,273.31",
    offsetX: 5,
    style: {
      fontSize: "24px",
      fontWeight: "600",
      cssClass: "apexcharts-yaxis-title"
    }
  }
};
const spark3 = {
  chart: {
    id: "sparkline3",
    group: "sparklines",
    type: "area",
    height: 130,
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors$1.accent],
  stroke: {
    width: [2],
    curve: "straight"
  },
  fill: {
    opacity: 1
  },
  series: [
    {
      name: "Total Orders",
      data: randomizeArray(sparklineData)
    }
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  title: {
    text: "Total Orders",
    offsetX: 5,
    style: {
      fontSize: "24px",
      cssClass: "apexcharts-yaxis-title",
      color: themeColors$1.lightText
    }
  },
  subtitle: {
    text: "4,361",
    offsetX: 5,
    style: {
      fontSize: "24px",
      fontWeight: "600",
      cssClass: "apexcharts-yaxis-title"
    }
  }
};
const spark4 = {
  chart: {
    id: "sparkline3",
    group: "sparklines",
    type: "area",
    height: 130,
    sparkline: {
      enabled: true
    }
  },
  colors: [themeColors$1.purple],
  stroke: {
    width: [2],
    curve: "straight"
  },
  fill: {
    opacity: 1
  },
  series: [
    {
      name: "Consolidated Profit",
      data: randomizeArray(sparklineData)
    }
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  xaxis: {
    type: "datetime"
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100
    }
  },
  title: {
    text: "Consolidated Profit",
    offsetX: 5,
    style: {
      fontSize: "24px",
      cssClass: "apexcharts-yaxis-title",
      color: themeColors$1.lightText
    }
  },
  subtitle: {
    text: "$16,264.37",
    offsetX: 5,
    style: {
      fontSize: "24px",
      fontWeight: "600",
      cssClass: "apexcharts-yaxis-title"
    }
  }
};
const themeColors = useThemeColors();
const revenueOptions = {
  series: [
    {
      name: "Returning",
      data: [318.42, 407.16, 284.12, 517, 452.45, 1209.34, 1010.11]
    },
    {
      name: "Newcomers",
      data: [112.42, 324.45, 457.5, 312.75, 342.45, 527.56, 414.75]
    },
    {
      name: "Abandonned",
      data: [787.89, 534.46, 365.78, 107.45, 145.78, 54.42, 27.12]
    }
  ],
  chart: {
    height: 250,
    type: "area",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.accent, themeColors.info, themeColors.green],
  legend: {
    position: "bottom",
    horizontalAlign: "center",
    show: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [2, 2, 2],
    curve: "smooth"
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2020-09-19T00:00:00.000Z",
      "2020-09-20T01:30:00.000Z",
      "2020-09-21T02:30:00.000Z",
      "2020-09-22T03:30:00.000Z",
      "2020-09-23T04:30:00.000Z",
      "2020-09-24T05:30:00.000Z",
      "2020-09-25T06:30:00.000Z"
    ]
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm"
    },
    y: {
      formatter: function(val) {
        return "$" + val;
      }
    }
  }
};
export { spark2 as a, spark3 as b, spark4 as c, revenueOptions as r, spark1 as s };
