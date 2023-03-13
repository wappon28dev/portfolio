import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import purgecss from "@fullhuman/postcss-purgecss";

export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      plugins: [sveltekit(), viteCompression()],
      css: {
        postcss: {
          plugins: [
            purgecss({
              content: ["build/*.html", "build/**/*.js", "build/**/*.css"],
            }),
          ],
        },
      },
    };
  } else {
    return {
      plugins: [sveltekit()],
    };
  }
});
