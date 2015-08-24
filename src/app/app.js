angular.module('templates-app', []);
angular.module('templates-common', []);
angular.module(
        'ng-startup',
        [
            'templates-app',
            'templates-common',
            'angulartics',
            'angulartics.google.analytics',
            'LocalStorageModule',
            'ngAnimate',
            'ngSanitize',
            'angular-loading-bar',
            'templates-app',
            'templates-common',
            'ui.bootstrap',
            'ui.router',
            'ng-startup.appConf',
            'ng-startup.home',
            'ng-startup.dashboard',
            'ng-startup.signin',
            'ng-startup.remote',
            'cr.remote',
            'cr.loading',
            'cr.session',
            'cr.acl',
            'satellizer',
            'pascalprecht.translate',
            'infinite-scroll',
            'ngTouch',
            'ngCordova'
        ]
)
.config(['$urlRouterProvider', '$translateProvider', '$authProvider', 'cfpLoadingBarProvider', 'crRemoteProvider', 'appConf', '$logProvider',
  function myappConf($urlRouterProvider,  $translateProvider, $authProvider, cfpLoadingBarProvider, crRemoteProvider, appConf, $logProvider) {

    //set translation preferences
    $translateProvider.useStaticFilesLoader({
        files: [{
            prefix: 'i18n/',
            suffix: '.json'
        }]
    });
    $translateProvider.preferredLanguage(appConf.defaultLanguage);
    $translateProvider.useSanitizeValueStrategy('escaped');

    //set api andpoint by app config
    crRemoteProvider.addEndpoint("default", appConf.endPoint);

    $authProvider.loginUrl = appConf.endPoint + 'login';

    //enable debug state
    $logProvider.debugEnabled(appConf.debug);

    //set home state
    $urlRouterProvider.otherwise('/home');

    //choose between spinner and/or bar fixed to top
    cfpLoadingBarProvider.includeSpinner = false;
    // cfpLoadingBarProvider.includeBar = false;

 }])
.run(['$rootScope', 'crAcl', 'crSession', 'crRemoteHttp', 'crIdentity', '$state', '$log',
function run($rootScope, crAcl, crSession, crRemoteHttp, crIdentity, $state, $log) {

    //set default login state for unauth users
    crAcl.setRedirect("signin");



    //what append on user successful login
    $rootScope.$on('auth:identity:success', function(event, data) {
      $state.go("dashboard", {'area': 'test'});
    });

    //what append when user refresh the page and identity is restored

    crIdentity.restore().then(function(identity) {

    });
    // $rootScope.$on('auth:restore:success', function(event, data) {
    //
    // });

    //what append on user logout
    $rootScope.$on("auth:purge:success", function(event, data){
      $state.go("home");
    });


}])

.controller('AppCtrl', ['$scope','$rootScope', '$location', '$state', 'cfpLoadingBar',
  function AppCtrl($scope, $rootScope, $location, $state, cfpLoadingBar) {


    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        cfpLoadingBar.complete();
        //switch on/off black design

    });
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        cfpLoadingBar.start();
    });
}])


.service('crIdentity', ['crSession', 'crAcl', '$rootScope', '$log', '$q', function(crSession, crAcl, $rootScope, $log, $q) {
    var self = this;

    self.getSign = function(type) {
      var auth = crSession.get('identity', "cr-identity");
      if(auth && auth.type && auth.token) {
        return auth;
      }
      else {
        return false;
      }
    };

    self.set = function(identity)
    {
        $log.debug("[crIdentity] Identity:", identity);
        crSession.set('identity', identity, "cr-identity");
        $rootScope._identity = identity;
    };

    /**
    * Return identity from session
    * @return Object
    */
    self.get = function()
    {
      return crSession.get('identity', "cr-identity");
    };

    /**
    * Clear auth session
    */
    self.purge = function()
    {
      delete $rootScope._identity;
      return crSession.purgeNamespace("cr-identity");
    };


    self.restore = function() {
      var d = $q.defer();
      var identity = self.get();
      if(!identity) {
        d.reject();
      }
      else if(identity && identity.role) {
        crAcl.setRole(identity.role);
      }
      $rootScope._identity = identity;
      //crSession.delete('satellizer_token');

      $rootScope.$emit("auth:restore:success", identity);
      $log.debug("[crIdentity] Broadcast auth:restore:success");

      d.resolve();
      return d.promise;
    };


    $rootScope.$on('auth:login:success', function(event, data) {
      self.set(data);
      // crAcl.setCredentials(data.auth);
      if(data.role) {
        crAcl.setRole(data.role);
      }
      $rootScope.$broadcast('auth:identity:success', data);
      $log.debug("[crAuth] Broadcast auth:identity:success");
    });

    $rootScope.$on('auth:logout:success', function(event, data) {
      self.purge();
      // crAcl.voidCredentials();
      crAcl.setRole();
      $rootScope.$broadcast('auth:purge:success', data);
      $log.debug("[crAuth] Broadcast auth:purge:success");

    });



    return self;
}])


;
