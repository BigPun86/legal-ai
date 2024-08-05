/// <reference types="vite/client" />

interface ImportMetaEnv {
  /*   readonly VITE_OPENAI_API_URL: string;
  readonly VITE_OPENAI_API_KEY: string;
  readonly VITE_OPENAI_PROJECT_ID: string; */
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
