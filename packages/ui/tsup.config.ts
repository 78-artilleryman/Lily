import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig(options => ({
  entryPoints: ["src"],
  format: ["cjs", "esm"],
  dts: false,
  sourcemap: true,
  external: ["react"],
  esbuildPlugins: [vanillaExtractPlugin()],
  ...options,
}));
