import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],

    vite: {
        plugins: [tailwindcss()],
    },

    modules: ["shadcn-nuxt", "nuxt-highcharts"],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: "",
        /**
         * Directory that the component lives in.
         * @default "./app/components/ui"
         */
        componentDir: "./app/components/ui",
    },
    app: {
        head: {
            title: "Nuxt-Finance",
            titleTemplate: "%s - Dashboard",
            meta: [{ name: "description", content: "Nuxt-Finance" }],
            link: [{ rel: "icon", type: "image/x-icon", href: "/images/logo.png" }],
        },
    },
});
