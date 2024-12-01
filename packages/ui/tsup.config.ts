import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig(options => ({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  esbuildPlugins: [vanillaExtractPlugin()],
  ...options,
}));
