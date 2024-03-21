# Changelog

## [2.0.0-alpha.2](https://github.com/Azzerty23/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.2) (2024-03-21)


### Features

* a better "zod" plugin ([#521](https://github.com/Azzerty23/zenstack/issues/521)) ([2280f83](https://github.com/Azzerty23/zenstack/commit/2280f83cd7f1f597fddfd6ab0c99417200124452))
* flexible 'createRouter' typings ([#654](https://github.com/Azzerty23/zenstack/issues/654)) ([e147412](https://github.com/Azzerty23/zenstack/commit/e14741231b37ef1430fa8a02446f5748a76a02d7))
* improved automatic query invalidation for tanstack-query ([#790](https://github.com/Azzerty23/zenstack/issues/790)) ([42d654f](https://github.com/Azzerty23/zenstack/commit/42d654fcfaa40b09fde578db79792c69e1e3b908))
* make parameters of transactions configurable ([#988](https://github.com/Azzerty23/zenstack/issues/988)) ([d0745b1](https://github.com/Azzerty23/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* more flexible "createRouter" typings ([#651](https://github.com/Azzerty23/zenstack/issues/651)) ([d2bffb6](https://github.com/Azzerty23/zenstack/commit/d2bffb62d48a550937ebe3c147f55b6fab55f172))
* react-hooks generator and runtime targeting @tanstack/react-query ([#309](https://github.com/Azzerty23/zenstack/issues/309)) ([21ccddb](https://github.com/Azzerty23/zenstack/commit/21ccddb9be437eabed35fbc62ae43c1e192d289e))
* support configuring what models to include for zod and trpc plugins ([#747](https://github.com/Azzerty23/zenstack/issues/747)) ([a5d15a3](https://github.com/Azzerty23/zenstack/commit/a5d15a30e7a22a3e875cc974391feb9ad6da7646))
* support Prisma v5 ([#587](https://github.com/Azzerty23/zenstack/issues/587)) ([b0d9154](https://github.com/Azzerty23/zenstack/commit/b0d9154270a89c6c93c7a8f1aada85c413d16d6f))
* trpc plugin, add "generateModelActions" option to control what operations to generate ([#482](https://github.com/Azzerty23/zenstack/issues/482)) ([8693852](https://github.com/Azzerty23/zenstack/commit/8693852a36522baf44ff7eb3a8c76d839c8a8081))
* trpc plugin, generate client helpers to provide prisima-like typing ([#510](https://github.com/Azzerty23/zenstack/issues/510)) ([c41980d](https://github.com/Azzerty23/zenstack/commit/c41980dddbbeacd51c72d109e09a8c7b4c17617c))


### Bug Fixes

* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/Azzerty23/zenstack/issues/677)) ([df67f30](https://github.com/Azzerty23/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* add `CheckSelect` type into code for Prisma version backward compatibility ([#619](https://github.com/Azzerty23/zenstack/issues/619)) ([3e09a3a](https://github.com/Azzerty23/zenstack/commit/3e09a3a6646ae0f6e393cc0f92991c9b5d0c4d29))
* add eslint ignore to generated trpc helper source ([#759](https://github.com/Azzerty23/zenstack/issues/759)) ([f7e8a08](https://github.com/Azzerty23/zenstack/commit/f7e8a08987da4f6af3ad5058209cdc22720dce8f))
* add the missing "count" schema/router for zod/trpc ([#667](https://github.com/Azzerty23/zenstack/issues/667)) ([6e9a3b3](https://github.com/Azzerty23/zenstack/commit/6e9a3b3ce4f306716234a9598e4aac3c89e1e0be))
* bugs related to model name casing ([#645](https://github.com/Azzerty23/zenstack/issues/645)) ([32d5b26](https://github.com/Azzerty23/zenstack/commit/32d5b262cacdd03209a56027e4c2cbda1bc408c0))
* build, lint and etc. ([#833](https://github.com/Azzerty23/zenstack/issues/833)) ([cccbc3c](https://github.com/Azzerty23/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* canonicalize plugin's output folder detection; don't generate aux field unnecessarily ([#423](https://github.com/Azzerty23/zenstack/issues/423)) ([9eaf235](https://github.com/Azzerty23/zenstack/commit/9eaf2353e479a7c967af42a0cd6ed6b9afeded4a))
* change back to loading from literal ".zenstack" path otherwise Vercel breaks :( ([#701](https://github.com/Azzerty23/zenstack/issues/701)) ([2d41a9f](https://github.com/Azzerty23/zenstack/commit/2d41a9fcffab2fa228356a5cc45b4c2ecd62fd63))
* change openapi plugin's default flavor to "rpc" ([#439](https://github.com/Azzerty23/zenstack/issues/439)) ([ec65e53](https://github.com/Azzerty23/zenstack/commit/ec65e53f202e3e02ea98a9c88682c106dcbafc76))
* clean up generation of logical prisma client ([#1082](https://github.com/Azzerty23/zenstack/issues/1082)) ([6e7993a](https://github.com/Azzerty23/zenstack/commit/6e7993afa8dde03ae12c44f198bcca04724dbc92))
* clean up zod generation ([#883](https://github.com/Azzerty23/zenstack/issues/883)) ([909281f](https://github.com/Azzerty23/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/Azzerty23/zenstack/issues/883)) ([9d4a8ed](https://github.com/Azzerty23/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* disable eslint in generated hooks, refactor package inter-dependencies ([9e84126](https://github.com/Azzerty23/zenstack/commit/9e8412645e06f0bf63f85c8bb61ad00384fdef99))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/Azzerty23/zenstack/issues/851)) ([ea564c9](https://github.com/Azzerty23/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* fix react-query code-gen and improve mutation options merging ([#314](https://github.com/Azzerty23/zenstack/issues/314)) ([51484a7](https://github.com/Azzerty23/zenstack/commit/51484a76f90e5efd0a651bab9f6aa864baab95f2))
* hooks generation emits Provider export for backward compatibility ([#594](https://github.com/Azzerty23/zenstack/issues/594)) ([ca3ebda](https://github.com/Azzerty23/zenstack/commit/ca3ebdae4e213d3901bb5834fd9ebf1217da94a7))
* improve consistency of generated guard code ([#616](https://github.com/Azzerty23/zenstack/issues/616)) ([1b7b5bd](https://github.com/Azzerty23/zenstack/commit/1b7b5bda3f5106d31b7f5e70be27158fb8217600))
* incorrect relation owner analysis ([#610](https://github.com/Azzerty23/zenstack/issues/610)) ([c89012b](https://github.com/Azzerty23/zenstack/commit/c89012bcb8d32588cc7f5a1df19088292e571cec))
* incorrect reverse query built for to-many relation ([#815](https://github.com/Azzerty23/zenstack/issues/815)) ([2c345e1](https://github.com/Azzerty23/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* issue [#627](https://github.com/Azzerty23/zenstack/issues/627) ([#628](https://github.com/Azzerty23/zenstack/issues/628)) ([2ef93cb](https://github.com/Azzerty23/zenstack/commit/2ef93cb932e7aed6923cd3d7e69069d0c9ff161b))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/Azzerty23/zenstack/issues/962)) ([2b2bfcf](https://github.com/Azzerty23/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issue with client typing generation in trpc plugin ([#673](https://github.com/Azzerty23/zenstack/issues/673)) ([576c4f7](https://github.com/Azzerty23/zenstack/commit/576c4f7a4858dfa2dcb9c1a7f75af8d1ca48a8ce))
* issue with connecting multiple relations ([#450](https://github.com/Azzerty23/zenstack/issues/450)) ([dd6be95](https://github.com/Azzerty23/zenstack/commit/dd6be9509c46fd4dfff500a53070259410b6a61f))
* make core plugins compile generated ts files by default ([#373](https://github.com/Azzerty23/zenstack/issues/373)) ([4bf1304](https://github.com/Azzerty23/zenstack/commit/4bf1304c6518cc027b1a1f2d33fea70979d9d94b))
* make sure Buffer is imported ([#596](https://github.com/Azzerty23/zenstack/issues/596)) ([76a0bac](https://github.com/Azzerty23/zenstack/commit/76a0bac9c63707baf34a072e398b63156c1e0640))
* make sure zod schemas have type annotations ([#574](https://github.com/Azzerty23/zenstack/issues/574)) ([51985b1](https://github.com/Azzerty23/zenstack/commit/51985b1279dca8e82a7275330a7b6597f37d15a4))
* more robust calculation of default location for code generation ([#1095](https://github.com/Azzerty23/zenstack/issues/1095)) ([d11d4ba](https://github.com/Azzerty23/zenstack/commit/d11d4bade318d5a17d1a5e3860292352e25cc813))
* nullify field instead of reject when an optional relation field is not readable ([#588](https://github.com/Azzerty23/zenstack/issues/588)) ([fc16008](https://github.com/Azzerty23/zenstack/commit/fc16008ba20aba18f39948f3ff13ec3bc79729e3))
* open-api issues ([#446](https://github.com/Azzerty23/zenstack/issues/446)) ([2855647](https://github.com/Azzerty23/zenstack/commit/285564751094797da8484bf041a9d3a4eafafc9d))
* openapi generator relation handling ([#320](https://github.com/Azzerty23/zenstack/issues/320)) ([f1c9765](https://github.com/Azzerty23/zenstack/commit/f1c9765b778f8fb476c015a2f3bbe72dd94ef6b0))
* optimize generated trpc typing and fix "select" issue ([#972](https://github.com/Azzerty23/zenstack/issues/972)) ([c0d60a0](https://github.com/Azzerty23/zenstack/commit/c0d60a00eac9392cb061927126a41a5287467289))
* post-update rules incorrectly reject update ([#826](https://github.com/Azzerty23/zenstack/issues/826)) ([d921a7c](https://github.com/Azzerty23/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/Azzerty23/zenstack/issues/826)) ([e85831e](https://github.com/Azzerty23/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* prisma.d.ts is not properly saved ([#1090](https://github.com/Azzerty23/zenstack/issues/1090)) ([d3629be](https://github.com/Azzerty23/zenstack/commit/d3629bef459afc11c16461fb18621d2f77ac35cc))
* properly handle nullable fields in openapi generator ([#906](https://github.com/Azzerty23/zenstack/issues/906)) ([0e422ad](https://github.com/Azzerty23/zenstack/commit/0e422adf1a7f274b850eeba09ef1781b13ce9f1b))
* short-circuit post-read check when policy rules don't depend on model fields ([#376](https://github.com/Azzerty23/zenstack/issues/376)) ([a54eba4](https://github.com/Azzerty23/zenstack/commit/a54eba45f64382ed070e5aeabe0c8dc263bebc0d))
* support for custom prisma client output path ([#514](https://github.com/Azzerty23/zenstack/issues/514)) ([5f3669e](https://github.com/Azzerty23/zenstack/commit/5f3669e53363bbfb035f100d0c6e2d14cef69c24))
* support object literal in plugin fields processing ([#351](https://github.com/Azzerty23/zenstack/issues/351)) ([8284988](https://github.com/Azzerty23/zenstack/commit/8284988cf12c3c4f3983c36c3658201db5509b2c))
* trpc client helper bugs ([#532](https://github.com/Azzerty23/zenstack/issues/532)) ([4097915](https://github.com/Azzerty23/zenstack/commit/40979154c88d31d3891c361caf4ab16a4888b178))
* trpc plugin, generate schema for supporting unchecked input in mutation routes ([#512](https://github.com/Azzerty23/zenstack/issues/512)) ([304979f](https://github.com/Azzerty23/zenstack/commit/304979f4847258eff8b04675bc3e199ac0857173))
* undefined field access when selecting with _count ([#403](https://github.com/Azzerty23/zenstack/issues/403)) ([d90d7c8](https://github.com/Azzerty23/zenstack/commit/d90d7c83e95d33c85e9c3b4b650e014ee76136c3))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/Azzerty23/zenstack/issues/625)) ([f6b68da](https://github.com/Azzerty23/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))
* wrap generated trpc routes with error handling ([#338](https://github.com/Azzerty23/zenstack/issues/338)) ([7012ef5](https://github.com/Azzerty23/zenstack/commit/7012ef55afbf374ededaf23b6afb64afe497e592))
* wrong dev dependency in cli project ([#318](https://github.com/Azzerty23/zenstack/issues/318)) ([181f9ef](https://github.com/Azzerty23/zenstack/commit/181f9ef17899d11d23369f1d485c2d964e2d4561))
* wrong return type of generated `count` hook ([#347](https://github.com/Azzerty23/zenstack/issues/347)) ([2035319](https://github.com/Azzerty23/zenstack/commit/2035319a030369dc0c847eaac248f2d9acdc7c7b))
* wrong type generated for `groupBy` hook ([#344](https://github.com/Azzerty23/zenstack/issues/344)) ([83fd21e](https://github.com/Azzerty23/zenstack/commit/83fd21e5b2c55ca182386be61151386f0400bdd0))
* zod plugin issue with lower-case model names ([#396](https://github.com/Azzerty23/zenstack/issues/396)) ([d6fba93](https://github.com/Azzerty23/zenstack/commit/d6fba93e2f0149c14f67d4cd0b4e9cdb6eee73a5))
* zod typing for `DateTime` field, improve overall code generation ([#363](https://github.com/Azzerty23/zenstack/issues/363)) ([e93ca5b](https://github.com/Azzerty23/zenstack/commit/e93ca5bf10c6afdfd723961d3c91c2cd512eb8c8))


### Performance Improvements

* improve runtime performance by removing expensive verbose logging ([#371](https://github.com/Azzerty23/zenstack/issues/371)) ([0d7a2bf](https://github.com/Azzerty23/zenstack/commit/0d7a2bf417c6ea5cc5c6c3568593a0fbe7d7903e))


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/Azzerty23/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
