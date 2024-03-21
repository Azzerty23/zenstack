# Changelog

## [2.0.0-alpha.2](https://github.com/Azzerty23/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.2) (2024-03-21)


### Features

* JetBrains plugin for ZModel ([#904](https://github.com/Azzerty23/zenstack/issues/904)) ([c79be9e](https://github.com/Azzerty23/zenstack/commit/c79be9eb7f6b602bc84214bded2b927935b6273a))
* make parameters of transactions configurable ([#988](https://github.com/Azzerty23/zenstack/issues/988)) ([d0745b1](https://github.com/Azzerty23/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))


### Bug Fixes

* disable textmate bundle when JetBrains plugin is uninstalled ([#918](https://github.com/Azzerty23/zenstack/issues/918)) ([7e9cc35](https://github.com/Azzerty23/zenstack/commit/7e9cc35a68ed31e25e7c7eac764528f55a18ac7b))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/Azzerty23/zenstack/issues/962)) ([2b2bfcf](https://github.com/Azzerty23/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* more robust calculation of default location for code generation ([#1095](https://github.com/Azzerty23/zenstack/issues/1095)) ([d11d4ba](https://github.com/Azzerty23/zenstack/commit/d11d4bade318d5a17d1a5e3860292352e25cc813))
* prisma.d.ts is not properly saved ([#1090](https://github.com/Azzerty23/zenstack/issues/1090)) ([d3629be](https://github.com/Azzerty23/zenstack/commit/d3629bef459afc11c16461fb18621d2f77ac35cc))


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/Azzerty23/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))

## [Unreleased]
### Added
- Added support to complex usage of `@@index` attribute like `@@index([content(ops: raw("gin_trgm_ops"))], type: Gin)`.
### Fixed
- Fixed several ZModel validation issues related to model inheritance.

## 1.7.0
### Added
- Auto-completion is now supported inside attributes.
