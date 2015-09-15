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
            'highcharts-ng',
            'angular-loading-bar',
            'templates-app',
            'templates-common',
            'ui.bootstrap',
            'ui.router',
            'ng-startup.appConf',
            'ng-startup.home',
            'ng-startup.dashboard',
            'ng-startup.signin',
            'ng-startup.layout',
            'cr.remote',
            'cr.loading',
            'cr.session',
            'cr.acl',
            'cr.identity',
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

    console.log(appConf.endPoint);

    $authProvider.loginUrl = appConf.endPoint + 'login';
    $authProvider.authToken = 'Basic';

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

    //what append on user logout
    $rootScope.$on("auth:purge:success", function(event, data){
      $state.go("home");
    });


    document.addEventListener("deviceready", function(){
      // This event is essential to any application. It signals that Cordova's device APIs have loaded and are ready to access.
    });
}])

.controller('AppCtrl', ['$scope','$rootScope', '$location', '$state', 'cfpLoadingBar',
  function AppCtrl($scope, $rootScope, $location, $state, cfpLoadingBar) {


    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $rootScope._state = toState;
        cfpLoadingBar.complete();
        //switch on/off black design

    });
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        cfpLoadingBar.start();
    });
}]);
