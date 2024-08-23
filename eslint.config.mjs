import antfu from "@antfu/eslint-config"
import tailwind from "eslint-plugin-tailwindcss"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  antfu({
    stylistic: { quotes: "double" },

    rules: {
      "no-console": 0,
      "tailwindcss/no-custom-classname": 0,
    },
  }).prepend([
    ...tailwind.configs["flat/recommended"],
  ]),
)
