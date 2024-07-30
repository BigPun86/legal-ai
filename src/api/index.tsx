import axios from "axios";

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_OPENAI_API_URL, // This will be proxied to the target server => check vite.config.ts
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    "Content-Type": "application/json",
    "OpenAI-Project": import.meta.env.VITE_OPENAI_PROJECT_ID,
  },
});

export default apiInstance;
