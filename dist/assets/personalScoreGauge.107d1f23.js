import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { j as gauge } from "./VBillboardJS.a97b3f73.js";
import { k as ref } from "./vendor.6548d360.js";
const themeColors = useThemeColors();
const personalScoreGaugeOptions = ref({
  data: {
    columns: [["data", 91.4]],
    type: gauge()
  },
  gauge: {},
  color: {
    pattern: [
      themeColors.accent,
      themeColors.info,
      themeColors.orange,
      themeColors.green
    ],
    threshold: {
      values: [30, 60, 90, 100]
    }
  },
  size: {
    height: 120
  },
  padding: {
    bottom: 20
  },
  legend: {
    show: false,
    position: "inset"
  }
});
const onPersonalScoreGaugeReady = (billboard) => {
  setTimeout(function() {
    billboard.load({
      columns: [["data", 10]]
    });
  }, 1e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 50]]
    });
  }, 2e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 70]]
    });
  }, 3e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 0]]
    });
  }, 4e3);
  setTimeout(function() {
    billboard.load({
      columns: [["data", 100]]
    });
  }, 5e3);
};
export { onPersonalScoreGaugeReady as o, personalScoreGaugeOptions as p };
