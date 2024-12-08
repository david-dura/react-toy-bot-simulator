import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig({
  base: "/react-toy-bot-simulator",
  plugins: [react()],
});
