# Contributing to pi-vscode

Thanks for helping improve the Pi VS Code extension.

## Setup

```bash
pnpm install
```

## Checks

Run these before opening a pull request (all are defined in `package.json`):

```bash
pnpm run typecheck
pnpm run lint
pnpm test
```

## Build and package

```bash
pnpm run build
pnpm run package
```

`pnpm run package` builds the VSIX. Use `pnpm run install-local` to install your local build into VS Code for manual testing.

## Pull requests

1. Create a branch from `main`.
2. Keep the change focused, and describe the user-visible effect in the PR.
3. Note how you tested it (automated checks above, plus manual testing in VS Code where relevant).

Maintainer release and Marketplace steps are documented under Maintainer publishing in the [README](README.md).
