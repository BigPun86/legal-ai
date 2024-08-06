/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_OPENAI_API_URL: string;
  readonly REACT_APP_OPENAI_API_KEY: string;
  readonly REACT_APP_OPENAI_PROJECT_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
