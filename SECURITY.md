# Security Policy

## Reporting a vulnerability

Open a GitHub issue in this repository for non-sensitive reports. For a sensitive vulnerability, contact the maintainer privately first through the GitHub profile at https://github.com/musichen instead of posting details publicly.

Please include the extension version, your VS Code version, and steps to reproduce.

## Notes for users

- The extension runs pi with the permissions of your VS Code process. Only run pi sessions and packages you trust.
- Do not commit API keys or tokens to a workspace the agent can read.
- Marketplace and release tokens (`VSCE_PAT`) belong only in GitHub Actions secrets, as described under Maintainer publishing in the README. Never commit them.
