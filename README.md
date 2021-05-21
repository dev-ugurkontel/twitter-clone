# twitter-clone

It is the twitter clone created using Ionic, Capacitor and Angular 12.


### Features
- Dynamic multi-language support with ngx translate
- Dynamic multi-theme support (currently being developed on 3 themes)
- Basic system inheritance for features such as platform detection, device features detection, internet status flow, multi-language support management
- Ionic gestures tools for finger gestures (currently only used in sidebar)
- An example pipe structure
- An exemplary service structure
- Created with angular lazy loading structure


![Twitter Clone](http://g.recordit.co/3MjwDoMsa9.gif "Twitter Clone")


### Things to do
- In order to work offline, the local database engine will be created with SQLite and Indexed Database API (sqlite will then be applied as needed).


### Installation

```bash
$ npm i
```


### Build your Ionic App

```bash
$ ionic build
```


### Open IDE to build, run, and deploy

```bash
$ npx cap open ios
$ npx cap open android
```


### Syncing your app with Capacitor
```bash
$ npx cap copy
```


### Run Locally in a Web Browser
```bash
$ ionic serve
```


### Opening the iOS Project
```bash
$ npx cap open ios
```


### Running Your App (iOS)
```bash
$ npx cap run ios
```


### Opening the Android Project
```bash
$ npx cap open android
```


### Running Your App (Android)
```bash
$ npx cap run android
```


### Sync your Project
You may wish to sync your web app with your native project(s) in the following circumstances:

- When you want to copy web assets into your native project(s).
- Before you run your project using a Native IDE.
- After you install a new Capacitor plugin.
- After you clone your project.
- When you want to setup or reconfigure the native project(s) for Capacitor.
- When you want to install native dependencies (e.g. with Gradle or CocoaPods).

To sync your project, run:

```bash
$ npx cap sync
```

### Updating Capacitor
To update Capacitor Core and CLI:

```bash
$ npm i @capacitor/cli@next
$ npm i @capacitor/core@next
```

To update any or all of the platforms you are using:

```bash
$ npm i @capacitor/ios@next
$ npm i @capacitor/android@next
```
