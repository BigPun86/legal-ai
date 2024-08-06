import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import { config } from "dotenv";

config();

export default defineConfig(({ mode }) => {
  // Load env file based on `mode`
  // const env = loadEnv(mode, process.cwd(), "");

  return {
    // depending on your application, base can also be "/"
    base: "",
    plugins: [react(), viteTsconfigPaths()],
    server: {
      // this ensures that the browser opens upon server start
      open: true,
      // this sets a default port to 3000
      port: 1337,
    },
    define: {
      "process.env": process.env,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
