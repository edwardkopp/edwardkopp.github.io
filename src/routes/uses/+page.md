# Stuff I Use

*Last updated: May 12, 2026*

This page is inspired by [uses.tech](https://uses.tech/). 

On one hand, this page showcases some of the things I use for development and how I use them.
On the other hand, it serves as a reference in case I ever forget what I normally do.
As such, I will try to keep this page updated.

*If you're looking for what I used to create this website, see the [source code](https://github.com/edwardkopp/edwardkopp.github.io).*

- [Fedora KDE](https://fedoraproject.org/kde/) &mdash; Desktop OS
  - Enabled [RPM Fusion](https://rpmfusion.org/)
```shell
# After enabling RPM Fusion... 
dnf install libavcodec-freeworld
```
- [QMK Firmware](https://qmk.fm/) &mdash; Keyboard firmware
  - No need for mouse thanks to mouse keys
  - My keymaps can be found [here](https://github.com/edwardkopp/qmk_userspace)
- [brew](https://brew.sh/) &mdash; macOS package manager
- [LibreOffice](https://www.libreoffice.org/) &mdash; Office software
```shell
# macOS
brew install --cask libreoffice
```
- [JetBrains](https://www.jetbrains.com/) &mdash; IDEs
  - [Rider Night](https://plugins.jetbrains.com/plugin/13883-rider-ui-theme-pack/) theme
  - RustRover uses the default Islands Dark theme instead
  - Disabled AI suggestions as I prefer classic completions
  - Disabled "double modifier key shortcuts" under "Advanced Settings" due to my QMK keymap
  - Unless otherwise noted, I let IDE install language SDKs
  - I let IDE install git if missing
```shell
# Run after git install
git config --global init.defaultBranch main
```
- [UTM](https://mac.getutm.app/) &mdash; Linux VMs on macOS
```shell
brew install --cask utm
```
- [Python](https://www.python.org/) &mdash; My preferred language
  - Install specific versions via `dnf` or `brew`; include Tkinter packages for making quick GUIs
- [fnm](https://github.com/Schniz/fnm) &mdash; Node.js version manager
```shell
# Fedora
curl -fsSL https://fnm.vercel.app/install | bash
# Upgrades are slightly different
curl -fsSL https://fnm.vercel.app/install | bash -s -- --skip-shell

# macOS
brew install fnm  # see docs to manually configure after
```
- [Pulumi](https://github.com/pulumi/pulumi) &mdash; IaC (writing Python mostly)
  - Prefer exclusive use in CI/CD rather than local install
- [Zig](https://ziglang.org/) &mdash; Some tools/libraries expect this
  - Install Zig before dependents (such as cargo-lambda)
```shell
# Fedora
dnf install zig

# macOS
brew install zig
```
- [cargo-lambda](https://www.cargo-lambda.info/) &mdash; Helper for AWS Lambda functions in Rust
```shell
# Fedora
curl -fsSL https://cargo-lambda.info/install.sh | sh

# macOS
brew install cargo-lambda/tap/cargo-lambda
```
- [Libsodium](https://libsodium.org/) &mdash; Cryptography library I often use
```shell
# Fedora
dnf install libsodium-devel

# macOS
brew install libsodium
```
