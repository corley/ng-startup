  angular.module('ng-startup.appConf', [])
  .constant('appConf', function() {

    var conf = {
      "endPoint": "http://test.rest.corley.it/",
      "defaultLanguage": "en_EN"
    };

    // env: build
    conf.debug = true;
    // endenv

    // env: compile
    conf.debug = false;
    // endenv

    return conf;
  });
