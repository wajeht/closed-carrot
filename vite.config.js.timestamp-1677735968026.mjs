// vite.config.js
import { defineConfig } from "file:///usr/src/app/node_modules/vite/dist/node/index.js";
import react from "file:///usr/src/app/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import dotenv from "file:///usr/src/app/node_modules/dotenv/lib/main.js";
dotenv.config({ path: path.join(process.cwd(), ".env") });
var rollupOptions = {};
if (process.env.ENV === "dev" || process.env.ENV === "development") {
  rollupOptions.output = {
    entryFileNames: "assets/[name].js",
    chunkFileNames: "assets/[name].js",
    assetFileNames: "assets/[name][extname]"
  };
}
var vite_config_default = defineConfig({
  plugins: [react()],
  root: "./src/views/",
  define: {
    "process.env": process.env
  },
  server: {
    host: "0.0.0.0",
    port: process.env.REACT_PORT,
    proxy: {
      "/api": {
        target: `http://localhost:${process.env.EXPRESS_PORT}`,
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "/api")
      }
    }
  },
  build: {
    outDir: "../../public",
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1600,
    emptyOutDir: false,
    rollupOptions
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvdXNyL3NyYy9hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi91c3Ivc3JjL2FwcC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vdXNyL3NyYy9hcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcblxuZG90ZW52LmNvbmZpZyh7IHBhdGg6IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnLmVudicpIH0pO1xuXG5jb25zdCByb2xsdXBPcHRpb25zID0ge307XG5cbmlmIChwcm9jZXNzLmVudi5FTlYgPT09ICdkZXYnIHx8IHByb2Nlc3MuZW52LkVOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICByb2xsdXBPcHRpb25zLm91dHB1dCA9IHtcbiAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0uanMnLFxuICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5qcycsXG4gICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJyxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByb290OiAnLi9zcmMvdmlld3MvJyxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnYsXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5SRUFDVF9QT1JULFxuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LkVYUFJFU1NfUE9SVH1gLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnL2FwaScpLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4uLy4uL3B1YmxpYycsXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IHRydWUsXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxNjAwLFxuICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcbiAgICByb2xsdXBPcHRpb25zLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNOLFNBQVMsb0JBQW9CO0FBQ25QLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxZQUFZO0FBRW5CLE9BQU8sT0FBTyxFQUFFLE1BQU0sS0FBSyxLQUFLLFFBQVEsSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBRXhELElBQU0sZ0JBQWdCLENBQUM7QUFFdkIsSUFBSSxRQUFRLElBQUksUUFBUSxTQUFTLFFBQVEsSUFBSSxRQUFRLGVBQWU7QUFDbEUsZ0JBQWMsU0FBUztBQUFBLElBQ3JCLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLEVBQ2xCO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sZUFBZSxRQUFRO0FBQUEsRUFDekI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU0sUUFBUSxJQUFJO0FBQUEsSUFDbEIsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUSxvQkFBb0IsUUFBUSxJQUFJO0FBQUEsUUFDeEMsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsVUFBVSxNQUFNO0FBQUEsTUFDbEQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1Isc0JBQXNCO0FBQUEsSUFDdEIsdUJBQXVCO0FBQUEsSUFDdkIsYUFBYTtBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
