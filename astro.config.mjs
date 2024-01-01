import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import partytown from '@astrojs/partytown'

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "http://www.promptphi.com/",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  adapter: netlify(),
});
