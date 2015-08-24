  angular.module('ng-startup.appConf', [])
  .constant('appConf', {
    "endPoint": "<%= config.app.endPoint %>",
    "debug": "<%= config.app.debug %>",
    "defaultLanguage": "<%= config.app.defaultLanguage %>"
  });
