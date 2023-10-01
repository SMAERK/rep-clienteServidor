import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
const themeColors = useThemeColors();
const creativityRadialOptions = {
  series: [31],
  chart: {
    height: 100,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.info],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%"
      },
      dataLabels: {
        show: false
      }
    }
  },
  labels: [""]
};
const engagmentRadialOptions = {
  series: [53],
  chart: {
    height: 100,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.primary],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%"
      },
      dataLabels: {
        show: false
      }
    }
  },
  labels: [""]
};
const popularityRadialOptions = {
  series: [84],
  chart: {
    height: 100,
    type: "radialBar",
    offsetY: -10,
    toolbar: {
      show: false
    }
  },
  colors: [themeColors.green],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "35%"
      },
      dataLabels: {
        show: false
      }
    }
  },
  labels: [""]
};
export { creativityRadialOptions as c, engagmentRadialOptions as e, popularityRadialOptions as p };
