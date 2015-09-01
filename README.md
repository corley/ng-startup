# Please refer to complete documentation on [http://ngstartup.corleycloud.com](http://ngstartup.corleycloud.com)


=======
## Project

Main folders and files

* bower.json contains the list of web dependecies (jquery, bootstrap...)
* config contains configuration files (app, phonegap, secret deploy keys)
* src contains the source code (javascript, images, styles) of the app


## Installation
```sh
$ sudo npm -g install grunt-cli karma bower
$ npm install
```




## Local development

This command creates a running version of the app in build folder with no js and css compression

```sh
$ grunt watch
```
Go with browser to http://127.0.0.1:8081


These commands create a running version of the app in bin folder ready for production

```sh
$ grunt build:web
$ grunt compile:web
```
Go with browser to http://127.0.0.1:8081 after grunt compile:web


## Compile with phonegap

This command create a version for mobile, upload to phonegap, then download the apk (in dist folder) when the app is build, install it on android device (if cabled via usb)

```sh
$ grunt build:mobile
$ grunt compile:mobile
```
