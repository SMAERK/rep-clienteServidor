import { E as axios } from "./vendor.6548d360.js";
const BASE_URL = "https://api-dot-creciendo-seguro-dev.uc.r.appspot.com/api/v1";
const tryLogin = async (email, password) => {
  try {
    const body = { email, password };
    const { data } = await axios.post(`${BASE_URL}/auth/login`, body);
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
async function login(body) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, body);
    return response.data;
  } catch (ex) {
    throw ex;
  }
}
const tryGetUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/getOperators`);
    return response.data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
const tryGetGeneralDashboard = async (startDate, endDate) => {
  try {
    const response = await axios.get(`${BASE_URL}/dashboard/brasil?startDate=${startDate}&endDate=${endDate}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
const generateExcel = async (accessTokenCore, body) => {
  const bearer = `Bearer ${accessTokenCore}`;
  try {
    const response = await axios.post(`${BASE_URL}/report/reportAllSalesDownload`, body, {
      responseType: "arraybuffer",
      headers: {
        Authorization: bearer,
        Accept: "application/octet-stream"
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
const tryGetPoliciesReport = async (accessTokenCore, body) => {
  const bearer = `Bearer ${accessTokenCore}`;
  try {
    const response = await axios.post(`${BASE_URL}/report/reportAllSales`, body, {
      headers: {
        Authorization: bearer
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
const trySendEmail = async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/sendEmail`, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const tryActiveUsers = async (body) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/activeUsers`, body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const tryGetClosingShift = async (accessTokenCore) => {
  const bearer = `Bearer ${accessTokenCore}`;
  try {
    const response = await axios.get(`${BASE_URL}/turn/getClosedTurns`, {
      headers: {
        Authorization: bearer
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const tryGetClosingTurns = async (accessTokenCore, body) => {
  console.log("closed turns", body);
  const bearer = `Bearer ${accessTokenCore}`;
  try {
    const response = await axios.post(`${BASE_URL}/report/closedTurnSales`, body, {
      headers: {
        Authorization: bearer
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export { tryGetGeneralDashboard as a, tryGetClosingTurns as b, tryGetClosingShift as c, tryGetPoliciesReport as d, tryGetUsers as e, trySendEmail as f, generateExcel as g, tryActiveUsers as h, login as l, tryLogin as t };
