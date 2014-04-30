angular.module(
        'ngPolecats',
        [ 'templates-app', 'templates-common', 'ui.state', 'ui.route', 
          'ngPolecats.home']
)
.config(function myAppConfig($urlRouterProvider) {
    //routing
    $urlRouterProvider.otherwise('/home'); 
})
.run(function run() {

})
.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope) {

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      
    });
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      
    });
})
;
