import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({ mode }) => {
  // for github pages
  if (mode === "production") {
    return {
      plugins: [vue()],
      base: "/vue-babylon-investigation/",
    };
  }

  return {
    plugins: [vue()],
  };
});
