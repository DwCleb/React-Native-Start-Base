# Getting Started

## Prerequisites

Firstly, you need a Mac computer for iOS development. If you want to build an Android app only you can use Linux or Windows.

### Xcode 9.2 or later

Link to [download Xcode](https://developer.apple.com/download/)

If you are using Xcode 10 or later, you need to set the build system as **legacy build system** on Xcode Files -> Project/Workspace Settings

#### Pod version

- pod v1.10.0

### Android Studio 3.0.1 or later

Link to [download Android Studio](https://developer.android.com/studio/index.html)

#### Case you don't have the ANDROID_HOME

Copy `local.properties` file from `configFiles` folder and paste on `android` project folder. Configured to Mac users, necessary change Mac user name in the file - `[USER]`. For other OS change the directory way to Android SDK.

---

Before you get started, make sure you have the following dependencies installed on your machine:

- [NodeJS](https://nodejs.org) with `yarn`.
- [Homebrew](http://brew.sh/)
- [COCOAPODS](https://cocoapods.org//)
- [Latest React Native CLI](https://facebook.github.io/react-native/docs/getting-started) Follow both target OS (iOS just on Mac)

```sh
yarn install -g react-native-cli
```

#### Node and Yarn version

- node v12.13.1+
- yarn v1.22.0+
