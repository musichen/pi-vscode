# Icons

- `assets/logo.svg` — Dark theme icon (`#C5C5C5` fill, 16×16)
- `assets/logo-light.svg` — Light theme icon (`#424242` fill, 16×16)
- `assets/fonts/pi-icons.woff2` — Icon font for custom `$(pi-logo)` codicon used in status bar
- Command icons (editor title bar) use SVG `{ light, dark }` pairs directly
- Chat participant and terminal icons also use `{ light, dark }` URI pairs

## Rebuilding the icon font

The `pi-icons.woff2` font is generated from the logo SVG using [fantasticon](https://github.com/tancredi/fantasticon). The SVG must use counter-clockwise winding for inner holes (non-zero winding rule).

```bash
mkdir -p assets/icons assets/fonts
cp assets/logo.svg assets/icons/pi-logo.svg
bunx fantasticon assets/icons -o assets/fonts --font-types woff2 --asset-types json --name pi-icons -p pi
rm -rf assets/icons
```

The generated `assets/fonts/pi-icons.json` contains the glyph code (e.g. `61697` = `\F101`). This must match the `fontCharacter` in `package.json` under `contributes.icons.pi-logo`.
