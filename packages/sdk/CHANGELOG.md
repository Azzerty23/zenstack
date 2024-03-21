# Changelog

## [2.0.0-alpha.2](https://github.com/Azzerty23/zenstack/compare/v2.0.0-alpha.2...v2.0.0-alpha.2) (2024-03-21)


### Features

* a better "zod" plugin ([#521](https://github.com/Azzerty23/zenstack/issues/521)) ([2280f83](https://github.com/Azzerty23/zenstack/commit/2280f83cd7f1f597fddfd6ab0c99417200124452))
* add @[@auth](https://github.com/auth) option for declaring auth model ([#787](https://github.com/Azzerty23/zenstack/issues/787)) ([c390de1](https://github.com/Azzerty23/zenstack/commit/c390de10cfa91ae3f954404bc07e0905973b0898))
* add CLI config file support ([#328](https://github.com/Azzerty23/zenstack/issues/328)) ([4668ee9](https://github.com/Azzerty23/zenstack/commit/4668ee9c7029be5b9f21f318c36df795abead335))
* add support for comparing fields in the same model ([#631](https://github.com/Azzerty23/zenstack/issues/631)) ([4776685](https://github.com/Azzerty23/zenstack/commit/477668579e3d95e7371ca752244ad2e319a96477))
* always use superjson to serialize/deserialize in the api layer ([#585](https://github.com/Azzerty23/zenstack/issues/585)) ([46fec66](https://github.com/Azzerty23/zenstack/commit/46fec666c3af971010c69e467f08f55830655441))
* automatic optimistic update for tanstack hooks ([#830](https://github.com/Azzerty23/zenstack/issues/830)) ([93dc7df](https://github.com/Azzerty23/zenstack/commit/93dc7df472427a4546ba71ec3703135d2d638ded))
* field-level access control ([#638](https://github.com/Azzerty23/zenstack/issues/638)) ([9a6f39b](https://github.com/Azzerty23/zenstack/commit/9a6f39bdb8940f7cef89fd7ee423658b8ed4c49f))
* generate strong typing for the `user` context of `enhance` API ([#1141](https://github.com/Azzerty23/zenstack/issues/1141)) ([bab5195](https://github.com/Azzerty23/zenstack/commit/bab51958246272a7ae171200797b525213c13d4d))
* implement openapi security inferrence and override ([#341](https://github.com/Azzerty23/zenstack/issues/341)) ([2860f00](https://github.com/Azzerty23/zenstack/commit/2860f002e57d7772c0b7b9e9feabce7bae73c18c))
* improved automatic query invalidation for tanstack-query ([#790](https://github.com/Azzerty23/zenstack/issues/790)) ([42d654f](https://github.com/Azzerty23/zenstack/commit/42d654fcfaa40b09fde578db79792c69e1e3b908))
* make parameters of transactions configurable ([#988](https://github.com/Azzerty23/zenstack/issues/988)) ([d0745b1](https://github.com/Azzerty23/zenstack/commit/d0745b149a5ce6abfef546de0b9243ddc4f6e765))
* polymorphism ([#990](https://github.com/Azzerty23/zenstack/issues/990)) ([bac3683](https://github.com/Azzerty23/zenstack/commit/bac368382b6c92585bc983861a56d141093b7896))
* react-hooks generator and runtime targeting @tanstack/react-query ([#309](https://github.com/Azzerty23/zenstack/issues/309)) ([21ccddb](https://github.com/Azzerty23/zenstack/commit/21ccddb9be437eabed35fbc62ae43c1e192d289e))
* restful style openapi spec generation ([#410](https://github.com/Azzerty23/zenstack/issues/410)) ([4ebaa1f](https://github.com/Azzerty23/zenstack/commit/4ebaa1fa4aa8e762a11fb24700f5cb4e1bfbe688))
* runtime support for custom `@[@auth](https://github.com/auth)` model ([#793](https://github.com/Azzerty23/zenstack/issues/793)) ([08b9677](https://github.com/Azzerty23/zenstack/commit/08b967735c938de1e770a2409c36c5a50173b01d))
* support configuring what models to include for zod and trpc plugins ([#747](https://github.com/Azzerty23/zenstack/issues/747)) ([a5d15a3](https://github.com/Azzerty23/zenstack/commit/a5d15a30e7a22a3e875cc974391feb9ad6da7646))
* support Prisma v5 ([#587](https://github.com/Azzerty23/zenstack/issues/587)) ([b0d9154](https://github.com/Azzerty23/zenstack/commit/b0d9154270a89c6c93c7a8f1aada85c413d16d6f))
* support Prisma view ([#579](https://github.com/Azzerty23/zenstack/issues/579)) ([af151b7](https://github.com/Azzerty23/zenstack/commit/af151b7b311ee96b626376b8a17103b18c261f65))


### Bug Fixes

* [ZModelCodeGenerator] Remove the extra space between the collection predicate operator ([#839](https://github.com/Azzerty23/zenstack/issues/839)) ([9a0895b](https://github.com/Azzerty23/zenstack/commit/9a0895bedd82b429ddcc45db4cee0f9e82c54198))
* add "exports" to generated package.json, make trpc code-gen compatible with vite ([#677](https://github.com/Azzerty23/zenstack/issues/677)) ([df67f30](https://github.com/Azzerty23/zenstack/commit/df67f301119db23e5048464de2f73bff1a2adffc))
* add `CheckSelect` type into code for Prisma version backward compatibility ([#619](https://github.com/Azzerty23/zenstack/issues/619)) ([3e09a3a](https://github.com/Azzerty23/zenstack/commit/3e09a3a6646ae0f6e393cc0f92991c9b5d0c4d29))
* add enum import to zod generation ([#528](https://github.com/Azzerty23/zenstack/issues/528)) ([2a4b5cc](https://github.com/Azzerty23/zenstack/commit/2a4b5cc328645387a604f2fdf7c8855804306243))
* auth() cannot be resolved if the auth model is marked @[@ignore](https://github.com/ignore) ([#844](https://github.com/Azzerty23/zenstack/issues/844)) ([73f2cec](https://github.com/Azzerty23/zenstack/commit/73f2cec82fea64cea05f7306523f7c6f9ac91f84))
* automatically enable "@core/zod" plugin when there're validation rules ([#535](https://github.com/Azzerty23/zenstack/issues/535)) ([0519421](https://github.com/Azzerty23/zenstack/commit/05194219f28e49ee11d1a1bd9a78146e9b76eada))
* bugs related to model name casing ([#645](https://github.com/Azzerty23/zenstack/issues/645)) ([32d5b26](https://github.com/Azzerty23/zenstack/commit/32d5b262cacdd03209a56027e4c2cbda1bc408c0))
* build, lint and etc. ([#833](https://github.com/Azzerty23/zenstack/issues/833)) ([cccbc3c](https://github.com/Azzerty23/zenstack/commit/cccbc3c82ad522d40bc76ad7b84b1305d378b1db))
* canonicalize plugin's output folder detection; don't generate aux field unnecessarily ([#423](https://github.com/Azzerty23/zenstack/issues/423)) ([9eaf235](https://github.com/Azzerty23/zenstack/commit/9eaf2353e479a7c967af42a0cd6ed6b9afeded4a))
* change back to loading from literal ".zenstack" path otherwise Vercel breaks :( ([#701](https://github.com/Azzerty23/zenstack/issues/701)) ([2d41a9f](https://github.com/Azzerty23/zenstack/commit/2d41a9fcffab2fa228356a5cc45b4c2ecd62fd63))
* change openapi plugin's default flavor to "rpc" ([#439](https://github.com/Azzerty23/zenstack/issues/439)) ([ec65e53](https://github.com/Azzerty23/zenstack/commit/ec65e53f202e3e02ea98a9c88682c106dcbafc76))
* clean up generation of logical prisma client ([#1082](https://github.com/Azzerty23/zenstack/issues/1082)) ([6e7993a](https://github.com/Azzerty23/zenstack/commit/6e7993afa8dde03ae12c44f198bcca04724dbc92))
* clean up zod generation ([#883](https://github.com/Azzerty23/zenstack/issues/883)) ([909281f](https://github.com/Azzerty23/zenstack/commit/909281f8090734322c0cab09d0187b6b5e813c9a))
* clean up zod generation ([#883](https://github.com/Azzerty23/zenstack/issues/883)) ([9d4a8ed](https://github.com/Azzerty23/zenstack/commit/9d4a8ede7d42d1966fd5a12d64a5992092f4bc7d))
* disable eslint in generated hooks, refactor package inter-dependencies ([9e84126](https://github.com/Azzerty23/zenstack/commit/9e8412645e06f0bf63f85c8bb61ad00384fdef99))
* enable auto completion inside attribute ([#949](https://github.com/Azzerty23/zenstack/issues/949)) ([20d5bfc](https://github.com/Azzerty23/zenstack/commit/20d5bfc506a42b520eb1cf390149b7afc7c38701))
* enhanced client doesn't work with client extensions that add new model methods ([#851](https://github.com/Azzerty23/zenstack/issues/851)) ([ea564c9](https://github.com/Azzerty23/zenstack/commit/ea564c93e9ca2a888c0e53216633d66c733f6beb))
* expression context check issue on initial loading ([#544](https://github.com/Azzerty23/zenstack/issues/544)) ([05b5554](https://github.com/Azzerty23/zenstack/commit/05b55541f3ae55214318db4f0de20b8ba97bb2f8))
* fix react-query code-gen and improve mutation options merging ([#314](https://github.com/Azzerty23/zenstack/issues/314)) ([51484a7](https://github.com/Azzerty23/zenstack/commit/51484a76f90e5efd0a651bab9f6aa864baab95f2))
* hooks generation emits Provider export for backward compatibility ([#594](https://github.com/Azzerty23/zenstack/issues/594)) ([ca3ebda](https://github.com/Azzerty23/zenstack/commit/ca3ebdae4e213d3901bb5834fd9ebf1217da94a7))
* improve consistency of generated guard code ([#616](https://github.com/Azzerty23/zenstack/issues/616)) ([1b7b5bd](https://github.com/Azzerty23/zenstack/commit/1b7b5bda3f5106d31b7f5e70be27158fb8217600))
* improve generated typing for polymorphic models ([#1002](https://github.com/Azzerty23/zenstack/issues/1002)) ([7b453f7](https://github.com/Azzerty23/zenstack/commit/7b453f7745cad73fc81e7884faf473aecda99556))
* incorrect relation owner analysis ([#610](https://github.com/Azzerty23/zenstack/issues/610)) ([c89012b](https://github.com/Azzerty23/zenstack/commit/c89012bcb8d32588cc7f5a1df19088292e571cec))
* incorrect reverse query built for to-many relation ([#815](https://github.com/Azzerty23/zenstack/issues/815)) ([2c345e1](https://github.com/Azzerty23/zenstack/commit/2c345e1d4fe7274b7a08c1178afccede1d694327))
* issue [#627](https://github.com/Azzerty23/zenstack/issues/627) ([#628](https://github.com/Azzerty23/zenstack/issues/628)) ([2ef93cb](https://github.com/Azzerty23/zenstack/commit/2ef93cb932e7aed6923cd3d7e69069d0c9ff161b))
* issue 961, incorrect policy injection for nested `updateMany` ([bf690a0](https://github.com/Azzerty23/zenstack/commit/bf690a072771ab95907a8f56079c4f6aaf655849))
* issue 961, incorrect policy injection for nested `updateMany` ([#962](https://github.com/Azzerty23/zenstack/issues/962)) ([2b2bfcf](https://github.com/Azzerty23/zenstack/commit/2b2bfcff965f9a70ff2764e6fbc7613b6f061685))
* issue with connecting multiple relations ([#450](https://github.com/Azzerty23/zenstack/issues/450)) ([dd6be95](https://github.com/Azzerty23/zenstack/commit/dd6be9509c46fd4dfff500a53070259410b6a61f))
* make core plugins compile generated ts files by default ([#373](https://github.com/Azzerty23/zenstack/issues/373)) ([4bf1304](https://github.com/Azzerty23/zenstack/commit/4bf1304c6518cc027b1a1f2d33fea70979d9d94b))
* make sure Buffer is imported ([#596](https://github.com/Azzerty23/zenstack/issues/596)) ([76a0bac](https://github.com/Azzerty23/zenstack/commit/76a0bac9c63707baf34a072e398b63156c1e0640))
* make sure zod schemas have type annotations ([#574](https://github.com/Azzerty23/zenstack/issues/574)) ([51985b1](https://github.com/Azzerty23/zenstack/commit/51985b1279dca8e82a7275330a7b6597f37d15a4))
* more robust calculation of default location for code generation ([#1095](https://github.com/Azzerty23/zenstack/issues/1095)) ([d11d4ba](https://github.com/Azzerty23/zenstack/commit/d11d4bade318d5a17d1a5e3860292352e25cc813))
* open-api issues ([#446](https://github.com/Azzerty23/zenstack/issues/446)) ([2855647](https://github.com/Azzerty23/zenstack/commit/285564751094797da8484bf041a9d3a4eafafc9d))
* openapi generator relation handling ([#320](https://github.com/Azzerty23/zenstack/issues/320)) ([f1c9765](https://github.com/Azzerty23/zenstack/commit/f1c9765b778f8fb476c015a2f3bbe72dd94ef6b0))
* policy generator fails on Windows for custom output path ([#583](https://github.com/Azzerty23/zenstack/issues/583)) ([32c7279](https://github.com/Azzerty23/zenstack/commit/32c727934456127470a53ed13ad65d33ff94e97d))
* post-update rules incorrectly reject update ([#826](https://github.com/Azzerty23/zenstack/issues/826)) ([d921a7c](https://github.com/Azzerty23/zenstack/commit/d921a7ca6bef0341ccf5bc50e195156695129e7f))
* post-update rules incorrectly reject update ([#826](https://github.com/Azzerty23/zenstack/issues/826)) ([e85831e](https://github.com/Azzerty23/zenstack/commit/e85831e98d08a433febb5a8fecf8d539150ced08))
* prisma schema generation issue with calling attribute function with literal ([#930](https://github.com/Azzerty23/zenstack/issues/930)) ([91fe8e7](https://github.com/Azzerty23/zenstack/commit/91fe8e71b513804de36d08b03c37b0c175580906))
* prisma.d.ts is not properly saved ([#1090](https://github.com/Azzerty23/zenstack/issues/1090)) ([d3629be](https://github.com/Azzerty23/zenstack/commit/d3629bef459afc11c16461fb18621d2f77ac35cc))
* several issues with using `auth()` in `[@default](https://github.com/default)` ([#1088](https://github.com/Azzerty23/zenstack/issues/1088)) ([36e515e](https://github.com/Azzerty23/zenstack/commit/36e515e485c580657b9edbfc52014f3542abfb96))
* short-circuit post-read check when policy rules don't depend on model fields ([#376](https://github.com/Azzerty23/zenstack/issues/376)) ([a54eba4](https://github.com/Azzerty23/zenstack/commit/a54eba45f64382ed070e5aeabe0c8dc263bebc0d))
* support for custom prisma client output path ([#514](https://github.com/Azzerty23/zenstack/issues/514)) ([5f3669e](https://github.com/Azzerty23/zenstack/commit/5f3669e53363bbfb035f100d0c6e2d14cef69c24))
* support object literal in plugin fields processing ([#351](https://github.com/Azzerty23/zenstack/issues/351)) ([8284988](https://github.com/Azzerty23/zenstack/commit/8284988cf12c3c4f3983c36c3658201db5509b2c))
* support postgres extensions ([#718](https://github.com/Azzerty23/zenstack/issues/718)) ([cdc98e0](https://github.com/Azzerty23/zenstack/commit/cdc98e08224a23ea3f6e5d620c11c90a34ed6435))
* support string literal keys for object expressions in ZModel ([#752](https://github.com/Azzerty23/zenstack/issues/752)) ([22b1bf9](https://github.com/Azzerty23/zenstack/commit/22b1bf9ddd4062000f2cd7d183e004dd3d5917c6))
* undefined field access when selecting with _count ([#403](https://github.com/Azzerty23/zenstack/issues/403)) ([d90d7c8](https://github.com/Azzerty23/zenstack/commit/d90d7c83e95d33c85e9c3b4b650e014ee76136c3))
* vscode language accidentally bundles prisma packages  ([#625](https://github.com/Azzerty23/zenstack/issues/625)) ([f6b68da](https://github.com/Azzerty23/zenstack/commit/f6b68dabc9e089230bc6d8f8e802e8fbc43a8a69))
* vscode language accidentally bundles prisma packages ([#623](https://github.com/Azzerty23/zenstack/issues/623)) ([a81913e](https://github.com/Azzerty23/zenstack/commit/a81913e69d3533874c038279d1d4d226ad685d8d))
* wrap generated trpc routes with error handling ([#338](https://github.com/Azzerty23/zenstack/issues/338)) ([7012ef5](https://github.com/Azzerty23/zenstack/commit/7012ef55afbf374ededaf23b6afb64afe497e592))
* wrong dev dependency in cli project ([#318](https://github.com/Azzerty23/zenstack/issues/318)) ([181f9ef](https://github.com/Azzerty23/zenstack/commit/181f9ef17899d11d23369f1d485c2d964e2d4561))
* wrong return type of generated `count` hook ([#347](https://github.com/Azzerty23/zenstack/issues/347)) ([2035319](https://github.com/Azzerty23/zenstack/commit/2035319a030369dc0c847eaac248f2d9acdc7c7b))
* wrong type generated for `groupBy` hook ([#344](https://github.com/Azzerty23/zenstack/issues/344)) ([83fd21e](https://github.com/Azzerty23/zenstack/commit/83fd21e5b2c55ca182386be61151386f0400bdd0))
* zod and openapi generation error when "fullTextSearch" is enabled ([#658](https://github.com/Azzerty23/zenstack/issues/658)) ([0cb7cd1](https://github.com/Azzerty23/zenstack/commit/0cb7cd1ae5e8c5d4a72d0891c9624291aafcbcd8))
* zod typing for `DateTime` field, improve overall code generation ([#363](https://github.com/Azzerty23/zenstack/issues/363)) ([e93ca5b](https://github.com/Azzerty23/zenstack/commit/e93ca5bf10c6afdfd723961d3c91c2cd512eb8c8))


### Performance Improvements

* improve runtime performance by removing expensive verbose logging ([#371](https://github.com/Azzerty23/zenstack/issues/371)) ([0d7a2bf](https://github.com/Azzerty23/zenstack/commit/0d7a2bf417c6ea5cc5c6c3568593a0fbe7d7903e))


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/Azzerty23/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))

## [2.0.0-alpha.2](https://github.com/zenstackhq/zenstack/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2024-02-21)


### Miscellaneous Chores

* release 2.0.0-alpha.2 ([f40d7e3](https://github.com/zenstackhq/zenstack/commit/f40d7e3718d4210137a2e131d28b5491d065b914))
