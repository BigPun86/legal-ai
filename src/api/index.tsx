import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_OPENAI_API_URL, // This will be proxied to the target server => check vite.config.ts
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    "Content-Type": "application/json",
    "OpenAI-Project": process.env.REACT_APP_OPENAI_PROJECT_ID,
  },
});

export default apiInstance;
