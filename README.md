## This branch is under dev, please visit the "bigboy" branch for a real and running example!
=======
## Project

Main folders and files

* bower.json contains the list of web dependecies (jquery, bootstrap...)
* configuration.dist.json is the "base" for the configuration.json file that contains token, password and keys for phonegap and aws
* src contains the source code (javascript, images, styles) of the app
* config.xml is the configuration file for phonegap (name of the app, plugins... use it if you need to build with phonegap)


## Installation
```sh
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ cp ./configuration.json.dist ./configuration.json
$ grunt appconf (run this command each time configuration is changed)
```


## Edit Configuration

Open configuration.json file and edit with your own values. The values of this files will be reported in the app with the appConf constant that you can edit in tpl/conf.tpl.js. Why two files? conf.tpl.js is the angularjs constant definitions, that get values from configuration.json that is out of revision (.gitignore) fo security reasons.

```sh
$ grunt appconf (run this command each time configuration is changed)
```


## Local development

This command creates a running version of the app in build folder with no js and css compression

```sh
$ grunt watch
```
Go with browser to http://127.0.0.1:8081


These commands create a running version of the app in bin folder ready for production

```sh
$ grunt build
$ grunt compile
```
Go with browser to http://127.0.0.1:8081


## Compile with phonegap

This command create a version for mobile, upload to phonegap, then download the apk (in dist folder) when the app is build, install it on android device (if cabled via usb)

```sh
$ grunt phonegapCompile
```

## How to add a bower dependency

* edit bower.json file
* run bower install or bower update
* edit build.phonegap.js adding css and/or js file to array (web and/or phonegap)
* run grunt watch / build / compile...

## How to edit css

* all app style are in src/less
* variables.less must bu used to host less variables and ovveride bootstrap variables
* app style are in main.less
