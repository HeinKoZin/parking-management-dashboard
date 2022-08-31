import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "./",
	resolve: {
		alias: {
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@atoms": path.resolve(__dirname, "./src/atoms"),
			"@layouts": path.resolve(__dirname, "./src/layouts"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@libs": path.resolve(__dirname, "./src/libs"),
			"@apis": path.resolve(__dirname, "./src/apis"),
		},
	},
});
