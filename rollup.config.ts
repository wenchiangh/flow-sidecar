/**
 * @file Configuration for Rollup
 */
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "lib/FlowSidecar.scpt",
    format: "iife",
  },
  plugins: [typescript()],
};
