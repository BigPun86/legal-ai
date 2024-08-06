import axios from "axios";
import { OPEN_AI } from "../config";

const apiInstance = axios.create({
  baseURL: OPEN_AI.API_URL,
  headers: {
    Authorization: `Bearer ${OPEN_AI.API_KEY}`,
    "Content-Type": "application/json",
    "OpenAI-Project": OPEN_AI.PROJECT_ID,
  },
});

export default apiInstance;
