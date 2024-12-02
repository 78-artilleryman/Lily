import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig(options => ({
  entryPoints: ["src"],
  assets: ["**/*.svg"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  esbuildPlugins: [vanillaExtractPlugin()],
  ...options,
}));
