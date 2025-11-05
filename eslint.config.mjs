import antfu from "@antfu/eslint-config";

import withNuxt from "./.nuxt/eslint.config.mjs";

// @ts-check
export default withNuxt(antfu({
    type: "app",
    typescript: true,
    formatters: true,
    vue: true,
    stylistic: {
        indent: 4,
        quotes: "double",
        semi: true,
    },
}, {
    rules: {
        "ts/no-redeclare": "off",
        "ts/consistent-type-definitions": ["error", "type"],
        "no-console": ["warn"],
        "antfu/no-top-level-await": ["off"],
        "node/prefer-global/process": ["off"],
        "node/no-process-env": ["error"],
        "perfectionist/sort-imports": ["error", {
            tsconfigRootDir: ".",
        }],
        "unicorn/filename-case": ["error", {
            case: "kebabCase",
            ignore: ["README.md"],
        }],
    },
}));
