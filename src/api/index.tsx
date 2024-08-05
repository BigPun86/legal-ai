import axios from "axios";
import { OPEN_AI } from "../config";

const apiInstance = axios.create({
  baseURL: OPEN_AI.API_URL, //"http://localhost:3000/api/proxy", // This will be proxied to the target server => check vite.config.ts
  headers: {
    Authorization: `Bearer ${OPEN_AI.API_KEY}`,
    "Content-Type": "application/json",
    "OpenAI-Project": OPEN_AI.PROJECT_ID,
  },
});

export default apiInstance;
