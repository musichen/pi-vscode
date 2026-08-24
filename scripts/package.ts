#!/usr/bin/env node
import { execSync } from "node:child_process";
import { globSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const rootDir = resolve(import.meta.dirname, "..");

for (const vsix of globSync("*.vsix", { cwd: rootDir })) {
  console.log(`Removing old ${vsix}`);
  rmSync(resolve(rootDir, vsix));
}

execSync("pnpm build && pnpx @vscode/vsce package --no-dependencies", {
  cwd: rootDir,
  stdio: "inherit",
});
