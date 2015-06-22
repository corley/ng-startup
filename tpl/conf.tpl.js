  angular.module('ng-startup.appConf', [])
  .constant('appConf', {
    "endPoint": "<%= config.endPoint %>",
    "debug": "<%= config.debug %>",
    "defaultLanguage": "<%= config.defaultLanguage %>"
  });
