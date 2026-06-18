---
title: Stuff I Use
description: Here is a list of some of the software and tools I use for software development.
date: June 17, 2026
---

This page is inspired by [uses.tech](https://uses.tech/). 

A list of some of the things I use, while also a reference for myself. I will try to keep this page updated.

*If you're looking for what I used to create this website, see the [source code](https://github.com/edwardkopp/edwardkopp.github.io).*

#### [Fedora KDE](https://fedoraproject.org/kde/) &mdash; Desktop OS

[RPM Fusion](https://rpmfusion.org/) is enabled.

```shell
# After enabling RPM Fusion... 
dnf install libavcodec-freeworld
```

#### [QMK Firmware](https://qmk.fm/) &mdash; Firmware for dev keyboards

My keymaps and instructions can be found [here](https://github.com/edwardkopp/qmk_userspace).

#### [Wootility](https://wooting.io/wootility) &mdash; Non-dev keyboard configurator

I use a Wooting keyboard if I need a normal keyboard layout.

For udev rules, save the following to `/etc/udev/rules.d/70-wooting.rules`:

```shell
SUBSYSTEM=="hidraw", ATTRS{idVendor}=="31e3", MODE:="0660", TAG+="uaccess"
SUBSYSTEM=="usb", ATTRS{idVendor}=="31e3", MODE:="0660", TAG+="uaccess"
```

Then reload udev rules:

```shell
sudo udevadm control --reload-rules && sudo udevadm trigger
```

#### [OpenTabletDriver](https://opentabletdriver.net/) &mdash; Drawing tablet driver

I just download the `.rpm` from their GitHub and click it to install.

```shell
# After install...
sudo dracut --regenerate-all --force

# Check service afterwards
systemctl --user status opentabletdriver.service
# Enable if needed
systemctl --user enable opentabletdriver.service --now
```

Updating is the same process.

#### [Homebrew](https://brew.sh/) &mdash; macOS package manager

#### [LibreOffice](https://www.libreoffice.org/) &mdash; Office software

```shell
# macOS
brew install --cask libreoffice
```

#### [JetBrains](https://www.jetbrains.com/) &mdash; IDEs

I normally use the Islands Dark theme with the [Rider Islands Dark](https://plugins.jetbrains.com/plugin/13883-rider-ui-theme-pack/) color scheme,
except in RustRover where I use the default Islands Dark color scheme.

AI suggestions are disabled as I prefer the classic completions.

"Double modifier key shortcuts" under "Advanced Settings" are disabled where I use QMK keyboards.

I let JetBrains install git and configure it if missing, and unless otherwise noted, I let them install language SDKs, too.

```shell
# Run after git install
git config --global init.defaultBranch main
```

#### [UTM](https://mac.getutm.app/) &mdash; Linux VMs on macOS

```shell
brew install --cask utm
```

#### [Python](https://www.python.org/) &mdash; My preferred language

Specific versions installed via `dnf` or `brew`. Tkinter packages are also installed for making quick GUIs.

#### [Fast Node Manager](https://github.com/Schniz/fnm) &mdash; Node.js version manager

```shell
# Fedora
curl -fsSL https://fnm.vercel.app/install | bash
# Upgrades are slightly different
curl -fsSL https://fnm.vercel.app/install | bash -s -- --skip-shell

# macOS
brew install fnm  # see docs to manually configure after
```

#### [Godot](https://godotengine.org/) &mdash; For game development

I use the .NET version of the engine.

I'm not doing anything serious with it at the moment; game development is just a hobby for now.

#### [.NET SDK](https://dotnet.microsoft.com/en-us/download) &mdash; For game development

```shell
# Fedora
dnf install dotnet-sdk-10.0  # replace 10.0 with whatever latest is

# macOS
brew install dotnet-sdk
```

#### [Pulumi](https://github.com/pulumi/pulumi) &mdash; IaC (writing Python mostly)

```shell
# macOS
brew install pulumi/tap/pulumi
```

I prefer to use Pulumi primarily through CI/CD, so I only use the CLI to make new projects.

#### [Zig](https://ziglang.org/) &mdash; Some tools/libraries expect this

Install this before any dependents (such as cargo-lambda).

```shell
# Fedora
dnf install zig

# macOS
brew install zig
```

#### [Cargo Lambda](https://www.cargo-lambda.info/) &mdash; For writing AWS Lambdas in Rust

```shell
# Fedora
curl -fsSL https://cargo-lambda.info/install.sh | sh

# macOS
brew install cargo-lambda/tap/cargo-lambda
```

#### [Libsodium](https://libsodium.org/) &mdash; Cryptography library I often use

```shell
# Fedora
dnf install libsodium-devel

# macOS
brew install libsodium
```
