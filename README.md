# Inspiration-native • [![Netlify Status](https://api.netlify.com/api/v1/badges/ece32f9d-5cd2-4360-a0ed-b7e64b2eb7d0/deploy-status)](https://app.netlify.com/sites/inspiration-native/deploys)

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

You can watch the [entire build on this video](https://www.youtube.com/watch?time_continue=3&v=9qrChFqTJBE)
