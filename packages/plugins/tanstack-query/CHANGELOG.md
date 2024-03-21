# Changelog

## [2.0.0-alpha.2](https://github.com/Azzerty23/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.2) (2024-03-21)


### Features

* a better "zod" plugin ([#521](https://github.com/Azzerty23/zenstack/issues/521)) ([2280f83](https://github.com/Azzerty23/zenstack/commit/2280f83cd7f1f597fddfd6ab0c99417200124452))
* allow to use custom fetch with generated hooks ([#556](https://github.com/Azzerty23/zenstack/issues/556)) ([2a6b31a](https://github.com/Azzerty23/zenstack/commit/2a6b31a29c71a786a27a0ddda5c64f8c973c7739))
* always use superjson to serialize/deserialize in the api layer ([#585](https://github.com/Azzerty23/zenstack/issues/585)) ([46fec66](https://github.com/Azzerty23/zenstack/commit/46fec666c3af971010c69e467f08f55830655441))
* automatic optimistic update for tanstack hooks ([#830](https://github.com/Azzerty23/zenstack/issues/830)) ([93dc7df](https://github.com/Azzerty23/zenstack/commit/93dc7df472427a4546ba71ec3703135d2d638ded))
* implement tanstack-query generator plugin ([#413](https://github.com/Azzerty23/zenstack/issues/413)) ([9351fc9](https://github.com/Azzerty23/zenstack/commit/9351fc9431090d7720f75f751ad57ef2539b3d9e))
* implementing sveltekit adapter and refactor server package ([#418](https://github.com/Azzerty23/zenstack/issues/418)) ([53716c9](https://github.com/Azzerty23/zenstack/commit/53716c99c35d32767354729f372f2f15f1a478b2))
* improved automatic query invalidation for tanstack-query ([#790](https://github.com/Azzerty23/zenstack/issues/790)) ([42d654f](https://github.com/Azzerty23/zenstack/commit/42d654fcfaa40b09fde578db79792c69e1e3b908))
* infinite query support for tanstack-query ([#679](https://github.com/Azzerty23/zenstack/issues/679)) ([3300499](https://github.com/Azzerty23/zenstack/commit/330049949bfce7e8d463d7be8f1c8653df10203a))
* make parameters of transactions configurable ([#988](https://github.com/Azzerty23/zenstack/issues/988)) ([d0745b1](https://github.com/Azzerty23/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* Nuxt server adapter and tanstack-query for "vue" hooks generation ([#757](https://github.com/Azzerty23/zenstack/issues/757)) ([033d95d](https://github.com/Azzerty23/zenstack/commit/033d95dcdeef67bc8183d1daeb3172ec9ee02b9b))
* polymorphism ([#990](https://github.com/Azzerty23/zenstack/issues/990)) ([bac3683](https://github.com/Azzerty23/zenstack/commit/bac368382b6c92585bc983861a56d141093b7896))
* support Prisma v5 ([#587](https://github.com/Azzerty23/zenstack/issues/587)) ([b0d9154](https://github.com/Azzerty23/zenstack/commit/b0d9154270a89c6c93c7a8f1aada85c413d16d6f))
* swr plugin ([#419](https://github.com/Azzerty23/zenstack/issues/419)) ([3ee7821](https://github.com/Azzerty23/zenstack/commit/3ee7821498d96963a5fec89d9d19a88d28da51eb))
* **swr:** allow to provide a custom optimistic update data provider ([#1144](https://github.com/Azzerty23/zenstack/issues/1144)) ([95b8495](https://github.com/Azzerty23/zenstack/commit/95b8495667a6e518442f0d281a39bc012502ee99))
* tanstack-query v5 support ([#788](https://github.com/Azzerty23/zenstack/issues/788)) ([0d04d8e](https://github.com/Azzerty23/zenstack/commit/0d04d8e6dabd66ee06e98971cb4e1007c4ecd466))
* **tanstack-query:** allow to pass in a custom callback for computing optimistic data ([#1143](https://github.com/Azzerty23/zenstack/issues/1143)) ([7ec9b8f](https://github.com/Azzerty23/zenstack/commit/7ec9b8f00eb1494910a93a17bd7bba6a37505cee))
* trpc plugin, generate client helpers to provide prisima-like typing ([#510](https://github.com/Azzerty23/zenstack/issues/510)) ([c41980d](https://github.com/Azzerty23/zenstack/commit/c41980dddbbeacd51c72d109e09a8c7b4c17617c))


### Bug Fixes

* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/Azzerty23/zenstack/issues/677)) ([df67f30](https://github.com/Azzerty23/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* add `CheckSelect` type into code for Prisma version backward compatibility ([#619](https://github.com/Azzerty23/zenstack/issues/619)) ([3e09a3a](https://github.com/Azzerty23/zenstack/commit/3e09a3a6646ae0f6e393cc0f92991c9b5d0c4d29))
* add missing "/runtime" exports to tanstack-query ([#688](https://github.com/Azzerty23/zenstack/issues/688)) ([a3064dc](https://github.com/Azzerty23/zenstack/commit/a3064dc2ce9319977a01844fd0aac40bb92be7d9))
* add package.json exports ([#597](https://github.com/Azzerty23/zenstack/issues/597)) ([8ccfc93](https://github.com/Azzerty23/zenstack/commit/8ccfc93ba8135ced89754fbd912a02fe11962a53))
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
* hooks generation emits Provider export for backward compatibility ([#594](https://github.com/Azzerty23/zenstack/issues/594)) ([ca3ebda](https://github.com/Azzerty23/zenstack/commit/ca3ebdae4e213d3901bb5834fd9ebf1217da94a7))
* improve consistency of generated guard code ([#616](https://github.com/Azzerty23/zenstack/issues/616)) ([1b7b5bd](https://github.com/Azzerty23/zenstack/commit/1b7b5bda3f5106d31b7f5e70be27158fb8217600))
* incorrect relation owner analysis ([#610](https://github.com/Azzerty23/zenstack/issues/610)) ([c89012b](https://github.com/Azzerty23/zenstack/commit/c89012bcb8d32588cc7f5a1df19088292e571cec))
* incorrect reverse query built for to-many relation ([#815](https://github.com/Azzerty23/zenstack/issues/815)) ([2c345e1](https://github.com/Azzerty23/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* issue [#627](https://github.com/Azzerty23/zenstack/issues/627) ([#628](https://github.com/Azzerty23/zenstack/issues/628)) ([2ef93cb](https://github.com/Azzerty23/zenstack/commit/2ef93cb932e7aed6923cd3d7e69069d0c9ff161b))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/Azzerty23/zenstack/issues/962)) ([2b2bfcf](https://github.com/Azzerty23/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issue with connecting multiple relations ([#450](https://github.com/Azzerty23/zenstack/issues/450)) ([dd6be95](https://github.com/Azzerty23/zenstack/commit/dd6be9509c46fd4dfff500a53070259410b6a61f))
* lint issue in generated swr/tanstack hooks ([#877](https://github.com/Azzerty23/zenstack/issues/877)) ([4577232](https://github.com/Azzerty23/zenstack/commit/45772326c7980f5338452d4048c43f76a6b09bf0))
* make sure Buffer is imported ([#596](https://github.com/Azzerty23/zenstack/issues/596)) ([76a0bac](https://github.com/Azzerty23/zenstack/commit/76a0bac9c63707baf34a072e398b63156c1e0640))
* make sure zod schemas have type annotations ([#574](https://github.com/Azzerty23/zenstack/issues/574)) ([51985b1](https://github.com/Azzerty23/zenstack/commit/51985b1279dca8e82a7275330a7b6597f37d15a4))
* more robust calculation of default location for code generation ([#1095](https://github.com/Azzerty23/zenstack/issues/1095)) ([d11d4ba](https://github.com/Azzerty23/zenstack/commit/d11d4bade318d5a17d1a5e3860292352e25cc813))
* nullify field instead of reject when an optional relation field is not readable ([#588](https://github.com/Azzerty23/zenstack/issues/588)) ([fc16008](https://github.com/Azzerty23/zenstack/commit/fc16008ba20aba18f39948f3ff13ec3bc79729e3))
* open-api issues ([#446](https://github.com/Azzerty23/zenstack/issues/446)) ([2855647](https://github.com/Azzerty23/zenstack/commit/285564751094797da8484bf041a9d3a4eafafc9d))
* post-update rules incorrectly reject update ([#826](https://github.com/Azzerty23/zenstack/issues/826)) ([d921a7c](https://github.com/Azzerty23/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/Azzerty23/zenstack/issues/826)) ([e85831e](https://github.com/Azzerty23/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* prisma.d.ts is not properly saved ([#1090](https://github.com/Azzerty23/zenstack/issues/1090)) ([d3629be](https://github.com/Azzerty23/zenstack/commit/d3629bef459afc11c16461fb18621d2f77ac35cc))
* properly handle nullable fields in openapi generator ([#906](https://github.com/Azzerty23/zenstack/issues/906)) ([0e422ad](https://github.com/Azzerty23/zenstack/commit/0e422adf1a7f274b850eeba09ef1781b13ce9f1b))
* support for custom prisma client output path ([#514](https://github.com/Azzerty23/zenstack/issues/514)) ([5f3669e](https://github.com/Azzerty23/zenstack/commit/5f3669e53363bbfb035f100d0c6e2d14cef69c24))
* swr hooks support no revalidation ([#871](https://github.com/Azzerty23/zenstack/issues/871)) ([673bdd3](https://github.com/Azzerty23/zenstack/commit/673bdd3a4d54db72cdb0561669801b7be633c904))
* tanstack-query build issues and bugs in optimistic update ([#843](https://github.com/Azzerty23/zenstack/issues/843)) ([08d317d](https://github.com/Azzerty23/zenstack/commit/08d317d150b99fc38b8e5fb56bb4ab27fe1b4470))
* tanstack-query, fix the incorrect query typing when user provides a custom selector ([#967](https://github.com/Azzerty23/zenstack/issues/967)) ([cc98e30](https://github.com/Azzerty23/zenstack/commit/cc98e306559d7729d96d4ed77cda2815454fbb8f))
* typing generated for options parameter in the hooks method ([#946](https://github.com/Azzerty23/zenstack/issues/946)) ([acb23d1](https://github.com/Azzerty23/zenstack/commit/acb23d1d1e3f5ff1ce3452971ac7103c6a38326c))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/Azzerty23/zenstack/issues/625)) ([f6b68da](https://github.com/Azzerty23/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/Azzerty23/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))