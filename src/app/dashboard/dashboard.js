angular.module( 'ng-startup.dashboard', ['ui.router.state'])
.config(function config( $stateProvider ) {
	$stateProvider.state( 'dashboard', {
		url: '/dashboard',
		views: {
			"main": {
				controller: 'DashboardCtrl',
				templateUrl: 'dashboard/dashboard.tpl.html'
			}
		},
		data:{ pageTitle: 'Dashboard', is_granted:['ROLE_USER'] }
	});

})
/**
 * Dashboard controller, reserved by Acl
 */
.controller( 'DashboardCtrl', ['$scope', '$stateParams', 'NasaSatellitesRest', 'NasaIssRest', function HomeController( $scope, $stateParams, NasaSatellitesRest, NasaIssRest ) {

	NasaSatellitesRest.get().then(function(res) {

	});

}])
.directive('header', [function() {
	return {
		restrict: "AE",
		replace: true,
		scope: {
			username: "="
		},
		templateUrl: "dashboard/header.tpl.html"
	};
}])
;
