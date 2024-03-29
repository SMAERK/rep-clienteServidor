import { u as useThemeColors } from "./useThemeColors.b71015d4.js";
import { s as spline } from "./VBillboardJS.a97b3f73.js";
const themeColors = useThemeColors();
const options = {
  data: {
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 130, 100, 140, 200, 150, 50]
    ],
    colors: {
      data1: themeColors.accent,
      data2: themeColors.primary,
      data3: themeColors.orange,
      data4: themeColors.purple
    },
    type: spline()
  },
  size: {
    height: 280
  },
  padding: {
    bottom: 20
  },
  title: {
    text: "Spline Chart",
    position: "left",
    padding: {
      bottom: 20,
      right: 20,
      top: 0,
      left: 20
    }
  },
  legend: {
    position: "inset"
  }
};
var splineSimple = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  options
});
export { splineSimple as s };
