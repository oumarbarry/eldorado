export default defineNuxtConfig({
  // ssr: false,

  future: { compatibilityVersion: 4 },

  compatibilityDate: "2024-08-05",

  devtools: { enabled: true },

  experimental: {
    inlineRouteRules: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-lucide-icons",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
  ],

  eslint: { config: { standalone: false } },
  tailwindcss: { viewer: false },

  icon: {
    serverBundle: {
      collections: ["carbon", "mdi", "heroicons", "lucide"],
    },
  },

  colorMode: {
    // preference: 'dark'
    classSuffix: "",
  },

  shadcn: { prefix: "", componentDir: "app/components/ui" },
})
