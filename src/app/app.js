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
            // 'ui.bootstrap',
            // 'ui.router',
            'ng-startup.appConf',
            'ng-startup.home',
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
            'ngCordova',
            'ionic'
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

    //enable debug state
    $logProvider.debugEnabled(appConf.debug);

    //set home state
    $urlRouterProvider.otherwise('/home');

    //choose between spinner and/or bar fixed to top
    cfpLoadingBarProvider.includeSpinner = false;
    // cfpLoadingBarProvider.includeBar = false;

 }])
.run(['$rootScope', 'crAcl', 'crSession', 'crRemoteHttp', 'crIdentity', '$state', '$log',
function run($rootScope, crAcl, crSession, crRemoteHttp, crIdentity, $state, $log,$ionicLoading) {

}])

.controller('AppCtrl', ['$scope','$rootScope', '$location', '$state', '$ionicLoading',
  function AppCtrl($scope, $rootScope, $location, $state, $ionicLoading) {

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $rootScope._state = toState;
    });
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $ionicLoading.show({'template': 'Loading...', 'duration': 500});
    });
}]);
