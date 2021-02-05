
# Development Workflow

## Start the application in iOS simulator

First we need link native dependencies that didn't linked

```sh
cd ios && pod install
```

Back the project root and run (`cd ..`)

```sh
yarn ios
```

## Start the application in Android simulator

```sh
yarn android
```

## Start metro bundle

```sh
yarn start
```

### IOS

### IOS build - install in device

```sh
yarn ios
```

For scheme different of DEV environment, make build by Xcode and selecting the correct scheme: `Product` > `Scheme` and choice.

### IOS build - export IPA

```sh
yarn ios:build
```

A App/ios/[PROJECT_NAME].ipa file will be created.

## Android

### Android build - install in device

- DEV

```sh
yarn android:dev
```

- HML

```sh
yarn android:hml
```

- PROD

```sh
yarn android:prod
```

#### Android build - export APK

- HML

```sh
yarn android:build:hml
```

- PROD

```sh
yarn android:build:prod
```

A [PROJECT_NAME]/android/app/build/outputs/apk/release/app-release.apk file will be created.
