angular.module('ng-startup.appConf', [])
// env: build
.constant('appConf', {
  "endPoint": "/",
  "defaultLanguage": "en_EN",
  "debug": true
})
// endenv
// env: compile
.constant('appConf', {
  "endPoint": "/",
  "defaultLanguage": "en_EN",
  "debug": false
})
// endenv

;
