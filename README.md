# Inspiration-native • [![Netlify Status](https://api.netlify.com/api/v1/badges/49ea4e46-01d3-4bfa-a952-afd0c0f53be8/deploy-status)](https://app.netlify.com/sites/inspiration-native-fork/deploys)

> Inspiration Native (Expo iOS, Android and Web)

## Getting started

```bash
yarn
yarn start
```

## Release Workflow

```bash
# 👷‍  Build your GQL Function (don't panic if it logs WARNINGS)
yarn build:lambda

# 👷‍  Build Mobile `apk` or `ipa`
# 🙌  Let Expo handle the process
yarn build:android
yarn build:ios

# 👷‍  Built your static Web `web-build`
yarn build:web

# 🚀  Deploy to Netlify, which will handle `web-build` and our `lambdas`
yarn deploy:prod
```

## Author

| [![twitter/flexbox_](https://gravatar.com/avatar/66ecc55f1bc2e5863eb516ee6f20794e?s=70)](https://twitter.com/flexbox_ 'Follow @flexbox_ on Twitter') |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [David Leuliette](https://davidl.fr/)                                                                                                                |
