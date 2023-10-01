import axios from "axios";
import { SalesReportRequest } from "/@src/utils/interfaces/reports";
import { newUser, newUserStatus } from "/@src/utils/interfaces/schema";

const BASE_URL = import.meta.env.VITE_API_BASE_LOCAL


export async function login(body: any) {
  console.log('que envio a back', body);

  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      body
    )

    return response.data
  } catch (ex) {
    throw ex
  }
}


