import { defineConfig } from "astro/config";

export default defineConfig({
	i18n: {
		site: "https://Andriucm.github.io",
		base: "/astro-project",
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: true,
		},
	},
});
