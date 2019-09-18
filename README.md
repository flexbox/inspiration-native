# Inspiration-native • [![Netlify Status](https://api.netlify.com/api/v1/badges/49ea4e46-01d3-4bfa-a952-afd0c0f53be8/deploy-status)](https://app.netlify.com/sites/inspiration-native-staging/deploys)

> Inspiration Native (Expo iOS, Android and Web)

## Setup

```bash
# 🔧  Install dependencies
yarn
# 👷‍  Build our Graph QL API Function (don't panic when you see WARNINGS)
yarn build:lambda
```

## Workflow

### Development

```bash
# 🚀  Start Graph QL server
yarn start:lambda
# 🚀  Start the App (Web, iOS, Android)
yarn start
# 💻  In your CLI:
# 📲  Scan the QR code with your phone and watch...It's magic ✨
# ️️⌨  Hit `w` for Web: to open the Web App on your favourite browser and voilà ! 🎩
# ⌨  Hit `i` for iOS: to open the iOS App on your favourite iOS smulator ( ⚠️  Mac and Xcode needed)
# ⌨  Hit `a` for Android: to open the Android App on your Android AVD (⚠️  Android Studio and an already running AVD needed)
```

### Production

```bash
# 📱  Mobile: `apk` or `ipa`
# 🙌  Let Expo handle the process
yarn build:android
yarn build:ios

# 👷‍  Web: files to `web-build`
yarn build:web

# 🚀  Deploy `web-build` and our `lambdas` to Netlify
yarn deploy:prod
```

## Author

| [![twitter/flexbox_](https://gravatar.com/avatar/66ecc55f1bc2e5863eb516ee6f20794e?s=70)](https://twitter.com/flexbox_ 'Follow @flexbox_ on Twitter') |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [David Leuliette](https://davidl.fr/)                                                                                                                |
