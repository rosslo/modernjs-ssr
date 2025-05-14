import { appTools, defineConfig } from "@modern-js/app-tools";
import { serverPlugin } from "@modern-js/plugin-server";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: "rspack", // Set to 'webpack' to enable webpack
    }),
    serverPlugin(),
  ],
  server: {
    ssr: true,
    port: 3000,
  },
});
