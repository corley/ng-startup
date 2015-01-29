angular.module(
        'ng-startup',
        [
            'templates-app',
            'templates-common',
            'ui.router',
            'ng-startup.home'
        ]
)
.config(function myAppConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
})
.run(function run() {
})
.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope) {
})
;
