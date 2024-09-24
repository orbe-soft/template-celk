import { loadEnvConfig } from "@next/env";
import { defineConfig } from "cypress";

const projectDir = process.cwd();

const { combinedEnv } = loadEnvConfig(projectDir);

export default defineConfig({
  e2e: {
    env: combinedEnv,
    video: false,
    screenshotOnRunFailure: false,
  },
});
