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
            // 'cr.auth',
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


    crIdentity.restore().then(function(identity) {
      $state.go("dashboard", {'area': 'test'});
    });

    //what append on user successful login
    $rootScope.$on('auth:identity:success', function(event, data) {
      console.log("oe", data);
    });

    //what append when user refresh the page and identity is restored
    $rootScope.$on('auth:restore:success', function(event, data) {
      console.log("oe2", data);
    });

    //what append on user logout
    $rootScope.$on("auth:purge:success", function(event){
      console.log("oe3", data);
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
}]);
