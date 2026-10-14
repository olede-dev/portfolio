import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://olede.dev",
	output: "static",
	build: {
		inlineStylesheets: "always",
	},
	integrations: [
		sitemap({
			filter: (page) => !page.includes("/project-cards/"),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
