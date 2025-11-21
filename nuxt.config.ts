import tailwindcss from "@tailwindcss/vite";

import "./app/lib/env";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },

    modules: [
        "@nuxt/eslint",
        "@nuxt/icon",
        "@nuxtjs/color-mode",
        "@pinia/nuxt",
        "@nuxtjs/i18n",
    ],

    css: ["./app/assets/css/main.css"],

    eslint: {
        config: {
            standalone: false,
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },

    colorMode: {
        dataValue: "theme",
    },

    i18n: {
        defaultLocale: "en",
        strategy: "no_prefix",
        locales: [
            {
                code: "ru",
                file: "ru.json",
                name: "Русский",
            },
            {
                code: "en",
                file: "en.json",
                name: "English",
            },
        ],
    },
});
