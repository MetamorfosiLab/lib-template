# @metamorfosilab/lib-template

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

# Usage

For usage of this library, just replace all `lib-template` with your library name.

Pnpm is a main package manager for this project. You can install it from [pnpm.io](https://pnpm.io/)

To run dev command first install the dependencies without 'playground' filter.

```bash
pnpm install --filter '!playground'
```

This is because of `file:` linking inside `/playground/package.json`

Than run build command, so it will create `dist` folder.

```bash
pnpm run build
```

Than you can install all dependencies:

```bash
pnpm install
```

Because this is a monorepo, you can run `pnpm dev` in the root of the project, and it will run `dev` command in all packages.

```bash
pnpm run dev
```

This will run 2 commands in parallel:

```bash
npm-run-all --parallel lib:dev play:dev
```

So you can develop your library and playground at the same time.

All scripts are defined in `package.json` file, `scripts` key. So if you want to deep dive into the scripts, you can find them there.

# Playground

This is a playground for your library. You can test your library here. You can also use it as a demo for your library.

It uses `vite` with `typescript` under the hood, so it's fast and easy to use.

# Docs

This is a documentation for your library. You can write your documentation in `markdown` and it will be automatically generated.

It uses `vitepress` under the hood, so it's fast and easy to use.

Docs will automatically be generated and published to your github pages.

To config your github pages, go to `Settings` -> `Pages` and select `Source` to `GitHub Actions`.

# Documentation

[Link ❤️](https://metamorfosilab.github.io/lib-template/)

# Basic usage

```bash
npm i @metamorfosilab/lib-template
```

```bash
pnpm i @metamorfosilab/lib-template
```

```bash
yarn add @metamorfosilab/lib-template
```

## License

[MIT](./LICENSE) License © 2024-PRESENT [Metamorfosi Lab](https://github.com/MetamorfosiLab)

## Why not to run `pnpm install` in the root of the project?

Because of `file:` linking inside `/playground/package.json`. If we want to run `pnpm install` in the root of the project, we need to add `/dist` folder to git and commit it. This is not a good practice, so we need to run `pnpm install` without `playground` filter.

## Why you linking `file:` in `/playground/package.json`?

Because we want to test our library in the playground. So you will develop it on rollup, and test it in the playground with all HMRS and other features.

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@metamorfosilab/lib-template?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@metamorfosilab/lib-template
[npm-downloads-src]: https://img.shields.io/npm/dm/@metamorfosilab/lib-template?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@metamorfosilab/lib-template
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@metamorfosilab/lib-template?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@metamorfosilab/lib-template
[license-src]: https://img.shields.io/github/license/@metamorfosilab/lib-template.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/@metamorfosilab/lib-template/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@metamorfosilab/lib-template
