import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://andriucm.github.io",
	base: "/astro-project",
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
