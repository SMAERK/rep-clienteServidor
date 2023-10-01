import { d as dayjs } from "./dayjs.min.7cfaa8e2.js";
function toString(val) {
  return `${val}`;
}
function perSession(val) {
  return `${val} per session`;
}
function asMinutes(val) {
  return `${val} (mins)`;
}
function asKDollar(val) {
  return `$ ${val}K`;
}
function asPercent(val) {
  return `${val} %`;
}
function toDate(format) {
  return (val, timestamp) => dayjs(timestamp).format(format);
}
function toFixed(fractionDigit, divider = 1) {
  return (val) => (val / divider).toFixed(fractionDigit);
}
export { asMinutes as a, toFixed as b, toDate as c, asPercent as d, asKDollar as e, perSession as p, toString as t };
