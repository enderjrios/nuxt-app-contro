// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  
  modules: [
    "nuxt-icon",
    "@unocss/nuxt",
    "@vueuse/nuxt",
   
    "@nuxtjs/supabase",
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  
  supabase:{},
  unocss:{
    uno: true,
    icons: true,
    attributify:true,
  
  },
  css: ["@unocss/reset/tailwind.css"],

});
