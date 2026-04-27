---
title: Changelog
summary: Stay up to date with the latest changes and improvements to Sindlish.
enableTableOfContents: true
---

# Release History

## v0.1.0 Alpha (2026-04-26)

The initial alpha release of Sindlish! This version introduces the core language architecture and the bytecode virtual machine.

### New Features
- **Bytecode VM**: A high-performance stack-based virtual machine.
- **Hybrid Typing**: Support for both dynamic and static type declarations.
- **Result Model**: Modern error handling using `Result`, `ghalti`, and `?`.
- **VS Code Extension**: Official support for syntax highlighting and snippets.
- **Data Structures**: Native support for `fehrist` (List), `lughat` (Dictionary), and `majmuo` (Set).

### Improvements
- Improved string concatenation performance.
- Better error messages for syntax violations.
- Added support for multi-line comments using `/* */`.

### Bug Fixes
- Fixed a memory leak in nested loops.
- Resolved an issue where `0.0` was incorrectly treated as truthy.
